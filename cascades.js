import * as THREE from 'three';

//realistically we dont even need three.js for a 2d scene but since it reduces boilerplate and provides a lot of useful functionality, we ball//we will use three.js for the sake of learning

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer(); ///webgl 1 btw
document.body.appendChild(renderer.domElement);

const scale = 1;
const canvas = renderer.domElement;
const width = Math.floor(window.innerWidth / scale); //make sure the scaled and non scaled are perfectly divisible bc I do not want to deal with how webgl handles this right now
const height = Math.floor(window.innerHeight / scale);

const mouse = {x: null, y: null}; 

canvas.addEventListener('mousemove', (e) => { // look at this again when my sanity is restored, it doesnt matter much but its bugging me
  const rect = canvas.getBoundingClientRect();

  mouse.x = (e.clientX - rect.left) / scale;
  mouse.y = (rect.height - (e.clientY - rect.top)) / scale;

  mouse.x = Math.floor(mouse.x);
  mouse.y = Math.floor(mouse.y);
}); 

const textCanvas = document.createElement('canvas');
textCanvas.width = width;
textCanvas.height = height;
const textCtx = textCanvas.getContext('2d');

let rects = []

for(let i = 0; i < 15; i++) { // akari style rects
  let where = Math.random() > 0.5 ? 'left' : 'right';
  rects.push({
    where: where,
    x: where === 'left' ? 0 : width,
    y: Math.floor(i * height / 15), 
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    height: 1,
    width: Math.random() * 100 + 50,
    speed: Math.random() * 1 + 1,
  })
}


function drawTextToCanvas(text, x, y, color, fontSize) { 
  textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
  
  rects.forEach(rect => {    
    textCtx.fillStyle = rect.color;
    textCtx.fillRect(rect.x, rect.y, rect.width, rect.height);
  })

  
  rects.forEach(rect => {
    if(rect.where === 'left') {
      rect.x += rect.speed;
      if (rect.x > width ) {
        rect.x = 0 - rect.width; 
        rect.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      }
    } else {
      rect.x -= rect.speed;
      if (rect.x + rect.width < 0) {
        rect.x = width; 
        rect.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      }
    }
  })
  
  textCtx.fillStyle = 'orange';
  textCtx.font = `${24}px Arial`;
  textCtx.textAlign = 'center';
  textCtx.textBaseline = 'middle';
  
  textCtx.fillText(text, x, y);
}

const textTexture = new THREE.CanvasTexture(textCanvas);


// All render targets are used to render a texture to a texture offscreen
const rtA = new THREE.WebGLRenderTarget(width, height, {
  minFilter: THREE.NearestFilter,
  magFilter: THREE.NearestFilter,
  format: THREE.RGBAFormat,
  type: THREE.FloatType,
  wrapS: THREE.ClampToEdgeWrapping,
  wrapT: THREE.ClampToEdgeWrapping,
});

const rtB = rtA.clone(); //ping pong element so webgl doesnt yell at me for reading and writing to the same texture

const seedRT = rtA.clone();

const jfaA = rtA.clone();
const jfaB = rtB.clone();

let currentRT = rtA;
let previousRT = rtB;

const cascadeRT = rtA.clone();
const cascadePT = rtB.clone();


const geometry = new THREE.PlaneGeometry(2, 2); //this is the mesh that will be rendered to the screen. 2,2 because we want it to cover clip space -1 to 1 both x and y

const paintMaterial = new THREE.ShaderMaterial({
  uniforms: {
    prevTexture: { value: null },
    mouse: { value: mouse },
    resolution: { value: new THREE.Vector2(width, height) }
  },
  vertexShader: ` //standard vertex shader for the plane, realistically we dont need this but I didnt create a camera for no reason 
    varying vec2 vUv;
    void main() { 
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;
    varying vec2 vUv; //interpolated coordinates coming from the vertex shader between 0 and 1, one u is 1/width and one v is 1/height per pixel, and as far as I understand, when you access UV in a fragment it gives the interpolated value in the center of that fragment. 
    uniform sampler2D prevTexture;
    uniform vec2 mouse;   
    uniform vec2 resolution;
        
    void main() { 
        // This is the shader that paints and accumates the color to the texture, used it when I was looking at the tutorial but now its just overriden by the canvas texture, 
        // I am keeping it here because right now it shows a 10px circle where the mouse is which is fun. 

        vec4 color = texture(prevTexture, vUv).rgba;
    
        vec2 uvPx = gl_FragCoord.xy; //gives the pixel coordinate of the framgent, well kinda, it gives the center of the fragment
        vec2 mousePx = mouse;

        //if(gl_FragCoord.xy - vec2(0.5) == floor(vUv * resolution)) {
          //color = vec4(vUv.x, vUv.y, 0.5, 1.);
        //}

        float dist = length(uvPx - mousePx);

        float brushRadius = 10.0; //brush radius in pixels
        if(dist < brushRadius) {
            color = vec4(vUv.x, vUv.y, 0.5, 1.);
        }

        gl_FragColor = color;
    }
  `
});

const seedMaterial = new THREE.ShaderMaterial({
  uniforms: {
    inputTexture: {value: null},
  },
  vertexShader: paintMaterial.vertexShader,
  fragmentShader: `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D inputTexture;
    void main() {
      //this is the shader that converts the input texture to a seed texture
      //to calculate the nearest seed in the jfa phase, we need to know the location of the seed in the input texture
      //so we are storing the uv coordinates in a texture, this creates a nice looking gradient
      
      vec4 color = texture(inputTexture, vUv);
      if(color.r != 0. || color.g != 0. || color.b != 0.) { // There is a seed here
        gl_FragColor = vec4(vUv.x, vUv.y, 0.5, 1.); // vUv.x and vUv.y are the uv coordinates of where this pixel is in, 0.5 is just added to give a nice color scheme
      } else {
        gl_FragColor = vec4(0.0); //if the color is black, it means there is no seed here thus this will be one of the pixels that shoot rays
      }
    }
  `
})

const jfaMaterial = new THREE.ShaderMaterial({
    uniforms:{
        inputTexture: {value: null},
        offset: {value: null},
        resolution: {value: new THREE.Vector2(width, height)}
    },
    vertexShader: paintMaterial.vertexShader,
    fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D inputTexture;
        uniform float offset;
        uniform vec2 resolution;

        void main() {
            vec4 nearestSeed = vec4(0.0); 
            float nearestDist = 9999999.9; // Distance to the nearest seed, we start at 9.9 because that obv larger than any distance in the uv space

            //prove why the algo works
            for(float y = -1.; y <= 1.; y += 1.){ 
                for(float x = -1.; x <= 1.; x += 1.){
                    vec2 sampleUV = vUv + vec2(x, y) * offset / resolution; //because offset is in pixels we normalize it to uv space by dividing by resolution
                    if (sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) { continue; }

                     vec4 sampleValue = texture(inputTexture, sampleUV);
                     vec2 loc = sampleValue.xy;

                     if(loc.x != 0. || loc.y != 0.) {
                        vec2 diff = loc - vUv;

                        vec2 diff_px = vec2(diff.x * resolution.x, diff.y * resolution.y);
                        float dist = dot(diff, diff);
                        float dist_sq = dot(diff_px, diff_px);

                        if(dist_sq  < nearestDist){
                            nearestDist = dist_sq;
                            nearestSeed = sampleValue; 
                        }
                     }
                }
            }
            gl_FragColor = nearestSeed;
        }
    `,
})

const distanceMaterial = new THREE.ShaderMaterial({
  uniforms:{
    inputTexture: {value: null},
    resolution: {value: new THREE.Vector2(width, height)}
  },
  vertexShader: paintMaterial.vertexShader,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D inputTexture;
    uniform vec2 resolution;

    void main() { 

      vec2 nearestSeed = texture(inputTexture, vUv).xy;  //YAY we now know where the nearest seed is so just calculate the distance to it

      vec2 diff = nearestSeed - vUv;
      vec2 diff_px = vec2(diff.x * resolution.x, diff.y * resolution.y);

      float dist = length(diff_px);
      float dist2 = distance(nearestSeed, vUv);
      
      gl_FragColor = vec4(dist, dist2, 0., 1.);
    }
  `
})

const rayMaterial = new THREE.ShaderMaterial({
  uniforms: {
    iTexture: {value: null},
    distanceTexture: {value: null},
    lastTexture: {value: null},
    rayCount: {value: null},
    resolution: {value: new THREE.Vector2(width, height)},
    baseRayCount: {value: 4},
    start: {value: 0.125}
  },
  vertexShader: paintMaterial.vertexShader,
  fragmentShader: 
   `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D iTexture;
    uniform sampler2D distanceTexture;
    uniform sampler2D lastTexture;
    uniform int rayCount;
    uniform vec2 resolution;
    uniform int baseRayCount;
    uniform float start;

    const float PI = 3.14159265;
    const float TAU = 2.0 * PI;

    bool outOfBounds(vec2 uv) {
      return uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0;
    }

    vec4 raymarch(){

      vec2 coord = floor(vUv * resolution); //pixel loc of fragment

      float intervalStart_px = rayCount == baseRayCount ? 0.00 : start * min(resolution.x, resolution.y);
      float intervalEnd_px = rayCount == baseRayCount ? start * min(resolution.x, resolution.y) : length(resolution);
      

      vec2 effectiveUv = rayCount == baseRayCount ? vUv : (floor(coord / 2.0) * 2.0) / resolution; //snap 2 by 2 pixel groups to top left

      vec4 light = texture(iTexture, vUv);
      if(light.r != 0. || light.g != 0. || light.b != 0.) { 
        return light; 
      }

      float oneOverRayCount = 1.0 / float(rayCount); 
      float tauOverRayCount = TAU * oneOverRayCount;

      vec4 radiance = vec4(0.0); //total light that will be accumulated


      for(int i = 0; i < rayCount; i++) {
        float index = float(i);
        float angleStep = (index + 0.5);
        float angle = tauOverRayCount * angleStep;
        vec2 rayDirection = vec2(cos(angle), -sin(angle)); 

        vec2 sampleUv = effectiveUv + rayDirection * intervalStart_px / resolution;
        vec4 radDelta = vec4(0.0);

        float traveled = intervalStart_px;

        for (int step = 1; step < 32; step++) {

        float dist = texture(distanceTexture, sampleUv).r;

          sampleUv += rayDirection * dist / resolution;

          if (outOfBounds(sampleUv)) break;

          if (dist < 0.001) {
            vec4 colorSample = texture(iTexture, sampleUv);
            radDelta += vec4(pow(colorSample.rgb, vec3(2.2)), 1.0);
            break;
          }
          
          traveled += dist;

          if (traveled >= intervalEnd_px) break;
        }

        // Only merge on non-opaque areas
        if (rayCount == baseRayCount && radDelta.a == 0.0) {
          vec4 upperSample = texture(lastTexture, vUv);

          radDelta += vec4(pow(upperSample.rgb, vec3(2.2)), upperSample.a);

        }

        // Accumulate total radiance
        radiance += radDelta;
    }

    vec3 final = (radiance.rgb * oneOverRayCount);

    return vec4(pow(final, vec3(1.0 / 2.2)), 1.0);
        
    }  

    void main() {      
      gl_FragColor = raymarch();
    }
  `
})

const mesh = new THREE.Mesh(geometry, paintMaterial);
scene.add(mesh);



function animate() {
  drawTextToCanvas('HELLO LIGHT', width/2, height/2, 'white', 64);
  textTexture.needsUpdate = true;

  mesh.material = new THREE.MeshBasicMaterial({ map: textTexture }); //you cant just pass the text texture to prevRT so this is the way

  renderer.setRenderTarget(previousRT); 
  renderer.clear();
  //renderer.render(scene, camera);

  // paint phase
  mesh.material = paintMaterial;
  paintMaterial.uniforms.prevTexture.value = previousRT.texture;
  renderer.setRenderTarget(currentRT);
  renderer.clear(); 
  renderer.render(scene, camera);

  //seed phase there has to be a better way to do this
  mesh.material = seedMaterial;
  seedMaterial.uniforms.inputTexture.value = currentRT.texture;
  renderer.setRenderTarget(seedRT);
  renderer.clear();
  renderer.render(scene, camera);


  // jfa phase
  let curT = seedRT.texture;
  let curJFA = jfaA;
  let nextJFA = jfaB;
  const passes = Math.ceil(Math.log2(Math.max(width, height)));
  mesh.material = jfaMaterial;

  for(let i = 0; i < passes; i++) {
    jfaMaterial.uniforms.inputTexture.value = curT;
    jfaMaterial.uniforms.offset.value = Math.pow(2, passes - i - 1);

    renderer.setRenderTarget(curJFA);
    renderer.render(scene, camera);

    curT = curJFA.texture;
    [curJFA, nextJFA] = [nextJFA, curJFA]; 
  }

  //distance phase
  mesh.material = distanceMaterial;
  distanceMaterial.uniforms.inputTexture.value = curT;
  renderer.setRenderTarget(curJFA);
  renderer.render(scene, camera);


  //display phase

  mesh.material = rayMaterial;

  rayMaterial.uniforms.iTexture.value = currentRT.texture;
  rayMaterial.uniforms.distanceTexture.value = curJFA.texture;
  rayMaterial.uniforms.lastTexture.value = null;

  for(let i = 2; i >= 1; i--) {
    rayMaterial.uniforms.rayCount.value = Math.pow(rayMaterial.uniforms.baseRayCount.value, i);

    if(i == 1) {
      renderer.setRenderTarget(null);
      rayMaterial.uniforms.lastTexture.value = cascadeRT.texture;
      renderer.render(scene, camera);
    }
    else{
      renderer.setRenderTarget(cascadeRT);
      renderer.render(scene, camera);
    }
  }


  /*mesh.material = rayMaterial;
  rayMaterial.uniforms.iTexture.value = currentRT.texture;
  rayMaterial.uniforms.distanceTexture.value = curJFA.texture;
  renderer.setRenderTarget(null); //actual screen

  renderer.render(scene, camera);*/

  //swap for next frame
  [currentRT, previousRT] = [previousRT, currentRT]; //tbd
}

renderer.setAnimationLoop(animate);

renderer.setSize(width * scale, height * scale); //not sure why the speed up is massive, research later

window.addEventListener('resize', () => { //resizing is gonna be painful
  
});

