import * as THREE from 'three';

//realistically we dont even need three.js for a 2d scene but since it reduces boilerplate and provides a lot of useful functionality, we ball//we will use three.js for the sake of learning

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

const canvas = renderer.domElement;
const width = window.innerWidth;
const height = window.innerHeight;

const mouse = {x: null, y: null}; 

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();

  mouse.x = (e.clientX - rect.left);
  mouse.y = rect.height - (e.clientY - rect.top);   
});

const textCanvas = document.createElement('canvas');
textCanvas.width = width;
textCanvas.height = height;
const textCtx = textCanvas.getContext('2d');

let rectX = 0; 
const rectY = height/1.4;
const rectWidth = 100;
const rectHeight = 50;
const rectSpeed = 2;


function drawTextToCanvas(text, x, y, color, fontSize) {
  textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
  
  textCtx.fillStyle = 'cyan';
  textCtx.fillRect(rectX, rectY, rectWidth, rectHeight);

  textCtx.fillStyle = 'red';
  textCtx.fillRect(rectX, rectY - 600, rectWidth, rectHeight);


  
  rectX += rectSpeed;
  if (rectX > width ) {
    rectX = 0 - rectWidth; 
  }
  
  textCtx.fillStyle = color;
  textCtx.font = `${fontSize}px Arial`;
  textCtx.textAlign = 'center';
  textCtx.textBaseline = 'middle';
  
  textCtx.fillText(text, x, y);
}

const textTexture = new THREE.CanvasTexture(textCanvas);



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

// ping pong for jfa
const jfaA = rtA.clone();
const jfaB = rtB.clone();

let currentRT = rtA;
let previousRT = rtB;


renderer.setSize(width, height);


const geometry = new THREE.PlaneGeometry(2, 2);

const paintMaterial = new THREE.ShaderMaterial({
  uniforms: {
    prevTexture: { value: null },
    mouse: { value: mouse },
    uResolution: { value: new THREE.Vector2(width, height) }
  },
  vertexShader: `
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
        vec4 color = texture2D(prevTexture, vUv).rgba;
        
        if(color.a == 0.0) { //probably not the best way to do this 
            color = vec4(0.0, 0.0, 0.0, 1.0);
        }

        vec2 uvPx = vUv * uResolution;
        vec2 mousePx = mouse;

        if(color.x > 0. || color.y > 0. && (color.x != vUv.x || color.y != vUv.y)) { //to be removed
          //  color = vec4(vUv.x, vUv.y, 0.5, 1.);
        }

        float dist = length(uvPx - mousePx);

        float brushRadius = 10.0; 
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
      vec4 color = texture(inputTexture, vUv);
      if(color.a == 1.0 && (color.r != 0. || color.g != 0. || color.b != 0.)) {
        gl_FragColor = vec4(vUv.x, vUv.y, 0.5, 1.);
      } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
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
            vec4 nearestSeed = vec4(0., 0., 0., 1.); //prove why the algo works
            float nearestDist = 9999999.9;

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

      vec2 nearestSeed = texture(inputTexture, vUv).xy;  
      float dist = clamp(distance(nearestSeed, vUv), 0., 1.);
      
      gl_FragColor = vec4(vec3(dist), 1.);
    }
  `
})

const rayMaterial = new THREE.ShaderMaterial({
  uniforms: {
    iTexture: {value: null},
    distanceTexture: {value: null},
    rayCount: {value: 64}
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
      if(light.r != 0. || light.g != 0.) {
        return light;
      }

      float oneOverRayCount = 1.0 / float(rayCount);
      float tauOverRayCount = TAU * oneOverRayCount;

      float noise = rand(vUv); 
      vec4 radiance = vec4(0.);

      for(int i = 0; i < rayCount; i++) {
        float angle = tauOverRayCount * (float(i) + noise);
        vec2 rayDirection = vec2(cos(angle), -sin(angle));

        vec2 sampleUv = vUv;
        vec4 radDelta = vec4(0.0);
        
        for (int step = 1; step < 32; step++) {
          float dist = texture(distanceTexture, sampleUv).r;
          
          sampleUv += rayDirection * dist;
          
          if (outOfBounds(sampleUv)) break;
          
          if (dist < EPS) {
            vec4 sampleColor = texture(iTexture, sampleUv);
            radDelta += sampleColor;
            break;
          }
        }

        radiance += radDelta;
      }

      return vec4(max(light, radiance * oneOverRayCount).rgb, 1.0);
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

  renderer.render(scene, camera);

  //swap for next frame
  [currentRT, previousRT] = [previousRT, currentRT];
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  rtA.setSize(w, h);
  rtB.setSize(w, h);
  jfaA.setSize(w, h);
  jfaB.setSize(w, h);
  paintMaterial.uniforms.uResolution.value.set(w, h);
});