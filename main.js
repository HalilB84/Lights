import * as THREE from 'three';

//realistically we dont even need three.js for a 2d scene but since it reduces boilerplate and provides a lot of useful functionality, we ball//we will use three.js for the sake of learning

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

const scale = 4;
const canvas = renderer.domElement;
const width = window.innerWidth / scale;
const height = window.innerHeight / scale;

const mouse = {x: null, y: null}; 

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();

  mouse.x = (e.clientX - rect.left) / scale;
  mouse.y = (rect.height - (e.clientY - rect.top)) / scale;   
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
    y: Math.floor(i * width / 14),  // Force integer positions
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    height: 0.5,
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

renderer.setSize(width, height);

const geometry = new THREE.PlaneGeometry(2, 2); //this is the mesh that will be rendered to the screen. 2,2 because we want it to cover clip space -1 to 1 both x and y

const paintMaterial = new THREE.ShaderMaterial({
  uniforms: {
    prevTexture: { value: null },
    mouse: { value: mouse },
    uResolution: { value: new THREE.Vector2(width, height) }
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
    varying vec2 vUv;
    uniform sampler2D prevTexture;
    uniform vec2 mouse;        
    uniform vec2 uResolution;  

    void main() { 
        // This is the shader that paints and accumates the color to the texture, used it when I was looking at the tutorial but now its just overriden by the canvas texture, 
        // I am keeping it here because right now it shows a 10px circle where the mouse is which is fun. 

        vec4 color = texture2D(prevTexture, vUv).rgba;
    
        vec2 uvPx = vUv * uResolution; //convert stuff the screen space so brush radius can be in pixels
        vec2 mousePx = mouse;

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
    inputTexture: {value: null}
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
            float nearestDist = 9.9; // Distance to the nearest seed, we start at 9.9 because that obv larger than any distance in the uv space


            //prove why the algo works
            for(float y = -1.; y <= 1.; y += 1.){ 
                for(float x = -1.; x <= 1.; x += 1.){
                    vec2 sampleUV = vUv + vec2(x, y) * offset / resolution; //basically normalizing the target pixel (by offset) in uv coordinates // isnt this prone to rounding errors tho?
                    if (sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) { continue; }

                     vec4 sampleValue = texture(inputTexture, sampleUV);
                     vec2 loc = sampleValue.xy;

                     if(loc.x != 0. || loc.y != 0.) {
                        vec2 diff = loc - vUv;
                        float dist = dot(diff, diff);
                        if(dist < nearestDist){
                            nearestDist = dist;
                            nearestSeed = sampleValue; //vec4(sampleUV.r, sampleUV.g, 0.5, 1.); this breaks the chain
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
    inputTexture: {value: null}
  },
  vertexShader: paintMaterial.vertexShader,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D inputTexture;

    void main() { 

      vec2 nearestSeed = texture(inputTexture, vUv).xy;  //YAY we now know where the nearest seed is so just calculate the distance to it
      float dist = distance(nearestSeed, vUv); //Not sure why we would clamp it tho (in the tutorial)? because 0,0 to 1,1 is ~1.4
      
      gl_FragColor = vec4(vec3(dist), 1.);
    }
  `
})

const rayMaterial = new THREE.ShaderMaterial({
  uniforms: {
    iTexture: {value: null},
    distanceTexture: {value: null},
    rayCount: {value: 16}
  },
  vertexShader: paintMaterial.vertexShader,
  fragmentShader: 
   `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D iTexture;
    uniform sampler2D distanceTexture;
    uniform int rayCount;

    const float PI = 3.14159265;
    const float TAU = 2.0 * PI;
    const float EPS = 0.0001; 

    bool outOfBounds(vec2 uv) {
      return uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0;
    }

    float rand(vec2 co) {
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }

    vec4 raymarch(){
      vec4 light = texture(iTexture, vUv);
      if(light.r != 0. || light.g != 0. || light.b != 0.) { //if we are at a seed location, we dont need to raymarch 
        return light / 1.5; //lighter color so doesnt mix up with the lighting
      }

      float oneOverRayCount = 1.0 / float(rayCount); 
      float tauOverRayCount = TAU * oneOverRayCount;

      float noise = rand(vUv); //noise so rays are offseted from each other
      vec4 radiance = vec4(0.0); //total light that will be accumulated

    
      //calcualte and shoot rayCount rays that are equidstant from each other, expensive
      for(int i = 0; i < rayCount; i++) {
        float angle = tauOverRayCount * (float(i) + noise);
        vec2 rayDirection = vec2(cos(angle), -sin(angle));

        vec2 sampleUv = vUv; //start at the target pixel
        vec4 radDelta = vec4(0.0);
        
        for (int step = 1; step < 32; step++) { // one funny observation is that pixels that are close to the seed will need more steps to accumulate radiance, this is because since the dist is so small, the rays looking at the other direction (the direction not immediately looking at the seed) will need more steps to reach something else 
          float dist = texture(distanceTexture, sampleUv).r;
          
          sampleUv += rayDirection * dist; //move the pixel in the direction of the ray, dist is the distance to the nearest seed so we now we can at least move that much
          
          if (outOfBounds(sampleUv)) break;
          
          if (dist == 0.0) { //Not sure why we would need EPS? since if we are at a seed location, dist is guaranteed to be 0.0
            // at this point we now we hit a seed, so get its color and add it to the radiance
            vec4 sampleColor = texture(iTexture, sampleUv);
            radDelta += sampleColor;
            break;
          }
        }

        radiance += radDelta;
      }

      return vec4((radiance * oneOverRayCount).rgb, 1.0); //finally we return the color of the pixel by averaging the light 
    }

    void main() {
      gl_FragColor = raymarch();
    }
  `
})

const mesh = new THREE.Mesh(geometry, paintMaterial);
scene.add(mesh);

function initializeBuffers() {
  mesh.material = new THREE.MeshBasicMaterial({ map: textTexture }); //you cant just pass the text texture to prevRT so this is the way

  renderer.setRenderTarget(previousRT); 
  renderer.clear();
  renderer.render(scene, camera);

  renderer.setRenderTarget(null); 
}


function animate() {
  drawTextToCanvas('HELLO LIGHT', width/2, height/2, 'white', 64);
  textTexture.needsUpdate = true;
  initializeBuffers();
  
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
  renderer.setRenderTarget(null); //actual screen
  renderer.setSize(window.innerWidth, window.innerHeight); //im going to be completely honest, I have no idea why this achieves a crazy amount of speedup, I now akari downsamples and i get the intution but rn this is black magic to me TODO LOG THE SHADERS

  renderer.render(scene, camera);

  //swap for next frame
  [currentRT, previousRT] = [previousRT, currentRT]; //tbd
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', () => { //resizing is gonna be painful
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  rtA.setSize(w, h);
  rtB.setSize(w, h);
  jfaA.setSize(w, h);
  jfaB.setSize(w, h);
  seedRT.setSize(w, h);
  paintMaterial.uniforms.uResolution.value.set(w, h);
});

