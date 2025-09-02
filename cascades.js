import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

const scale = 1;
const canvas = renderer.domElement;
const width = Math.floor(window.innerWidth / scale);
const height = Math.floor(window.innerHeight / scale);

const mouse = {x: null, y: null}; 

canvas.addEventListener('mousemove', (e) => {
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

let rects = [];

for(let i = 0; i < 15; i++) {
  let where = Math.random() > 0.5 ? 'left' : 'right';
  rects.push({
    where: where,
    x: where === 'left' ? 0 : width,
    y: Math.floor(i * height / 15), 
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    height: 2,
    width: Math.random() * 200 + 200,
    speed: Math.random() * 1 + 1,
  });
}

function drawTextToCanvas(text, x, y, color, fontSize) { 
  textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);
  
  rects.forEach(rect => {    
    textCtx.fillStyle = rect.color;
    textCtx.fillRect(rect.x, rect.y, rect.width, rect.height);
  });

  rects.forEach(rect => {
    if(rect.where === 'left') {
      rect.x += rect.speed;
      if (rect.x > width) {
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
  });
  
  textCtx.fillStyle = 'orange';
  textCtx.font = `${100}px Arial`;
  textCtx.textAlign = 'center';
  textCtx.textBaseline = 'middle';
  
  textCtx.fillText(text, x, y);
}

const textTexture = new THREE.CanvasTexture(textCanvas);

const rtA = new THREE.WebGLRenderTarget(width , height, {
  minFilter: THREE.NearestFilter,
  magFilter: THREE.NearestFilter,
  format: THREE.RGBAFormat,
  type: THREE.FloatType,
  wrapS: THREE.ClampToEdgeWrapping,
  wrapT: THREE.ClampToEdgeWrapping,
});

const rtB = rtA.clone();

const seedRT = rtA.clone();

const jfaA = rtA.clone();
const jfaB = rtB.clone();

let currentRT = rtA;
let previousRT = rtB;

const cascadeRTa = new THREE.WebGLRenderTarget(width, height, {
  minFilter: THREE.LinearFilter,
  magFilter: THREE.LinearFilter,
  format: THREE.RGBAFormat,
  type: THREE.FloatType,
  wrapS: THREE.ClampToEdgeWrapping,
  wrapT: THREE.ClampToEdgeWrapping,
});

const cascadeRTb = cascadeRTa.clone();

const geometry = new THREE.PlaneGeometry(2, 2);

const paintMaterial = new THREE.ShaderMaterial({
  uniforms: {
    prevTexture: { value: null },
    mouse: { value: mouse },
    resolution: { value: new THREE.Vector2(width, height) }
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
    uniform vec2 resolution;
        
    void main() { 
        vec4 color = texture(prevTexture, vUv).rgba;
    
        vec2 uvPx = gl_FragCoord.xy;
        vec2 mousePx = mouse;

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
    inputTexture: {value: null},
  },
  vertexShader: paintMaterial.vertexShader,
  fragmentShader: `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D inputTexture;
    void main() {
      vec4 color = texture(inputTexture, vUv);
      if(color.r != 0. || color.g != 0. || color.b != 0.) {
        gl_FragColor = vec4(vUv.x, vUv.y, 0.5, 1.);
      } else {
        gl_FragColor = vec4(0.0);
      }
    }
  `
});

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
            float nearestDist = 9999999.9;

            for(float y = -1.; y <= 1.; y += 1.){ 
                for(float x = -1.; x <= 1.; x += 1.){
                    vec2 sampleUV = vUv + vec2(x, y) * offset / resolution;
                    if (sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) { continue; }

                     vec4 sampleValue = texture(inputTexture, sampleUV);
                     vec2 loc = sampleValue.xy;

                     if(loc.x != 0. || loc.y != 0.) {
                        vec2 diff = loc - vUv;
                        vec2 diff_px = vec2(diff.x * resolution.x, diff.y * resolution.y);
                        float dist_sq = dot(diff_px, diff_px);

                        if(dist_sq < nearestDist){
                            nearestDist = dist_sq;
                            nearestSeed = sampleValue; 
                        }
                     }
                }
            }
            gl_FragColor = nearestSeed;
        }
    `,
});

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
      vec2 nearestSeed = texture(inputTexture, vUv).xy; 
      vec2 diff = nearestSeed - vUv;
      vec2 diff_px = vec2(diff.x * resolution.x, diff.y * resolution.y);
      float dist = length(diff_px);      
      gl_FragColor = vec4(dist, 0.0, 0.0, 1.0);
    }
  `
});

const rayMaterial = new THREE.ShaderMaterial({
  uniforms: {
    iTexture: {value: null},
    distanceTexture: {value: null},
    lastTexture: {value: null},
    resolution: {value: new THREE.Vector2(width, height)},
    baseRayCount: {value: 4},
    cascadeIndex: {value: 0.0},
    cascadeCount: {value: 1.0},
    lastIndex: {value: false},
    srgb: {value: 1.0} //honestly looks better without correction
  },
  vertexShader: paintMaterial.vertexShader,
  fragmentShader: 
   `
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D iTexture;
    uniform sampler2D distanceTexture;
    uniform sampler2D lastTexture;
    uniform vec2 resolution;
    uniform int baseRayCount;
    uniform float cascadeIndex;
    uniform float cascadeCount;
    uniform bool lastIndex;
    uniform float srgb;

    const float PI = 3.14159265;
    const float TAU = 2.0 * PI;
    const int maxSteps = 32;
    const float EPS = 0.001;

    bool outOfBounds(vec2 uv) {
      return uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0;
    }

    vec4 raymarch(){

      vec2 coord = floor(vUv * resolution);

      float base = float(baseRayCount);
      float sqrtBase = sqrt(base);

      float rayCount = pow(base, cascadeIndex + 1.0);

      float spacing = pow(sqrtBase, cascadeIndex);
      vec2 size = floor(resolution / spacing);

      vec2 probeRelativePosition = mod(coord, size);
      vec2 rayPos = floor(coord / size); 

      vec2 probeCenter = (probeRelativePosition + 0.5) * spacing;
      vec2 normalizedProbeCenter = probeCenter / resolution;

      float baseIndex = base * (rayPos.x + spacing * rayPos.y);

      float intervalStart = cascadeIndex == 0.0 ? 0.0 : pow(base, cascadeIndex - 1.0);
      float intervalLength = pow(base, cascadeIndex) * 2.0;

      float oneOverRayCount = 1.0 / rayCount;
      float angleStepSize = TAU * oneOverRayCount;
      vec4 radiance = vec4(0.0);

      for(int i = 0; i < baseRayCount; i++) {
        float index = baseIndex + float(i);
        float angleStep = index + 0.5;
        float angle = angleStepSize * angleStep;

        vec2 rayDirection = vec2(cos(angle), -sin(angle)); 

        vec2 sampleUv = normalizedProbeCenter + rayDirection * intervalStart / resolution;

        vec4 radDelta = vec4(0.0);
        float traveled = 0.0;

        for (int step = 1; step < maxSteps; step++) {
          float dist = texture(distanceTexture, sampleUv).r;

          sampleUv += rayDirection * dist / resolution;
          if (outOfBounds(sampleUv)) break;

          if (dist == 0.0) {
            vec4 colorSample = texture(iTexture, sampleUv);
            radDelta += vec4(pow(colorSample.rgb, vec3(srgb)), colorSample.a); 
            break;
          }

          traveled += dist;
          if (traveled >= intervalLength) break;
        }

        bool nonOpaque = radDelta.a == 0.0;

        if (cascadeIndex < cascadeCount - 1.0 && nonOpaque) {

          float upperSpacing = pow(sqrtBase, cascadeIndex + 1.0);
          vec2 upperSize = floor(resolution / upperSpacing);
          vec2 upperPosition = vec2(
            mod(index, upperSpacing), floor(index / upperSpacing)
          ) * upperSize;

          vec2 offset = (probeRelativePosition + 0.5) / sqrtBase;
          vec2 clamped = clamp(offset, vec2(0.5), upperSize - 0.5);
          vec4 upperSample = texture(
              lastTexture,
              (upperPosition + clamped) / resolution
          );

          radDelta += vec4(upperSample.rgb, upperSample.a);
        }

        radiance += radDelta;
    }

    vec4 totalRadiance = vec4(radiance.rgb / base, 1.0);
    
    return vec4(
      !lastIndex
       ? totalRadiance.rgb
       : pow(totalRadiance.rgb, vec3(1.0 / srgb)),
      1.0
    );
    }  

    void main() {      
      gl_FragColor = raymarch();
    }
  `
});

const mesh = new THREE.Mesh(geometry, paintMaterial);
scene.add(mesh);

function animate() {
  drawTextToCanvas('HELLO LIGHT', width/2, height/2, 'white', 64);
  textTexture.needsUpdate = true;

  mesh.material = new THREE.MeshBasicMaterial({ map: textTexture });

  renderer.setRenderTarget(previousRT); 
  renderer.clear();
  renderer.render(scene, camera);

  mesh.material = paintMaterial;
  paintMaterial.uniforms.prevTexture.value = previousRT.texture;
  renderer.setRenderTarget(currentRT);
  renderer.clear(); 
  renderer.render(scene, camera);

  mesh.material = seedMaterial;
  seedMaterial.uniforms.inputTexture.value = currentRT.texture;
  renderer.setRenderTarget(seedRT);
  renderer.clear();
  renderer.render(scene, camera);

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

  mesh.material = distanceMaterial;
  distanceMaterial.uniforms.inputTexture.value = curT;
  renderer.setRenderTarget(curJFA);
  renderer.render(scene, camera);

  mesh.material = rayMaterial;
  rayMaterial.uniforms.iTexture.value = currentRT.texture;
  rayMaterial.uniforms.distanceTexture.value = curJFA.texture;

  const base = rayMaterial.uniforms.baseRayCount.value;
  const diagonal = Math.sqrt(width * width + height * height);
  const cascadeCount = Math.ceil(Math.log(diagonal) / Math.log(base)) + 1;
  rayMaterial.uniforms.cascadeCount.value = cascadeCount;

  let currRT = cascadeRTa;
  let prevRT = cascadeRTb;

  rayMaterial.uniforms.lastTexture.value = null;

  for (let i = cascadeCount - 1; i >= 0; i--) {
    rayMaterial.uniforms.cascadeIndex.value = i;
    rayMaterial.uniforms.lastIndex.value = i === 0;
    if (i === 0) {
      renderer.setRenderTarget(null);
    } else {
      renderer.setRenderTarget(currRT);
      renderer.clear();
    }
    renderer.render(scene, camera);
    if (i !== 0) {
      rayMaterial.uniforms.lastTexture.value = currRT.texture;
      [currRT, prevRT] = [prevRT, currRT];
    }
  }

  [currentRT, previousRT] = [previousRT, currentRT];
}

renderer.setAnimationLoop(animate);

renderer.setSize(width * scale, height * scale);

window.addEventListener('resize', () => {});
