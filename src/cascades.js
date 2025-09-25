// TO BE REMOVED AFTER MAKING CASCADES SHADER
import * as THREE from 'three'; // Three.js to reduce WebGL boilerplate

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);

const scale = 2; // scaling the canvas, which means that the actual canvas is bigger than what we sample, if we don't do this it's unusable everywhere
const canvas = renderer.domElement;
const width = 512 // For now has to be a power of two because of the cascade algorithm or problems at the edges; this needs a fix
const height = 512

const mouse = {x: null, y: null}; 

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = (e.clientX - rect.left) / scale;
  mouse.y = (rect.height - (e.clientY - rect.top)) / scale;
  mouse.x = Math.floor(mouse.x);
  mouse.y = Math.floor(mouse.y);
}); 

const textCanvas = document.createElement('canvas'); // to display complex shapes on the canvas we can create a canvas element and draw on it
textCanvas.width = width;
textCanvas.height = height;
const textCtx = textCanvas.getContext('2d');

let rects = [];

for(let i = 0; i < 15; i++) { // inspired by Akari
  let where = Math.random() > 0.5 ? 'left' : 'right';
  rects.push({
    where: where,
    x: where === 'left' ? 0 : width,
    y: Math.floor(i * height / 15), 
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    height: 1,
    width: Math.random() * 200 + 100,
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
  textCtx.font = `${24}px Arial`;
  textCtx.textAlign = 'center';
  textCtx.textBaseline = 'middle';
  
  textCtx.fillText(text, x, y);
}

const textTexture = new THREE.CanvasTexture(textCanvas); // canvas texture is how you turn canvas -> texture

const rtA = new THREE.WebGLRenderTarget(width , height, { // a WebGL render target is an offscreen texture that can be used to render to, this is useful because we can use these render targets to store in-between textures
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
  minFilter: THREE.LinearFilter, // same as above but for cascades we use linear filter so they look less blocky
  magFilter: THREE.LinearFilter,
  format: THREE.RGBAFormat,
  type: THREE.FloatType,
  wrapS: THREE.ClampToEdgeWrapping,
  wrapT: THREE.ClampToEdgeWrapping,
});

const cascadeRTb = cascadeRTa.clone();

const geometry = new THREE.PlaneGeometry(2, 2); // 2,2 because we want it to cover clip space -1 to 1 for both x and y; default is 1,1

const paintMaterial = new THREE.ShaderMaterial({
  uniforms: {
    prevTexture: { value: null },
    mouse: { value: mouse },
    resolution: { value: new THREE.Vector2(width, height) }
  },
  vertexShader: ` // we use the same vertex shader everywhere, standard position calculations
    varying vec2 vUv; // these are the coordinates that are to be interpolated between the vertices, for a plane this will be 0,0 in the bottom left and 1,1 in the top right 
    void main() { 
      vUv = uv; // for every vertex we set vUv to the UV, then it's interpolated; one u is 1/width and one v is 1/height per pixel.
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
    }
  `,
  fragmentShader: ` // this is a very simple fragment shader that can be used to paint (accumulate using the ping-pong technique) or just draw a circle where the mouse is
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
        if(dist < brushRadius) { // if the pixel is 10 px away from the mouse, paint it
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
  fragmentShader: ` // this shader converts every painted pixel to a seed pixel so it can be used in the JFA phase to find the nearest seed
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D inputTexture;

    void main() {
      vec4 color = texture(inputTexture, vUv);
      if(color.r != 0. || color.g != 0. || color.b != 0.) {
        gl_FragColor = vec4(vUv.x, vUv.y, 0.5, 1.); // the reason why we set the x,y to vUv.x and vUv.y is because we want to store the UV coordinates of the seed in the texture
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
    fragmentShader: ` // this shader finds the nearest seed to every pixel, in n log n time, great speedup for the ray marching phase!
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D inputTexture;
        uniform float offset;
        uniform vec2 resolution;

        void main() {
            vec4 nearestSeed = vec4(0.0); 
            float nearestDist = 9999999.9;

            for(float y = -1.; y <= 1.; y += 1.){ // prove why this works later
                for(float x = -1.; x <= 1.; x += 1.){
                    vec2 sampleUV = vUv + vec2(x, y) * offset / resolution; // check some amount of pixels in 4 directions, convert to UV because that's how you sample a texture
                    if (sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) { continue; }

                     vec4 sampleValue = texture(inputTexture, sampleUV);
                     vec2 loc = sampleValue.xy;

                     if(loc.x != 0. || loc.y != 0.) { // this means if the pixel is a seed then continue processing
                        vec2 diff = loc - vUv;
                        vec2 diff_px = vec2(diff.x * resolution.x, diff.y * resolution.y); // very important that diff is computed in pixels, UV space doesn't account for aspect
                        float dist_sq = dot(diff_px, diff_px); // dot product is the square of the distance, no sqrt because it's expensive and no need for it since comparing squares achieves the same result

                        if(dist_sq < nearestDist){
                            nearestDist = dist_sq;
                            nearestSeed = sampleValue; // the nearest seed is stored in the texture
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
    varying vec2 vUv; // this shader computes the distance to the nearest seed in pixels
    uniform sampler2D inputTexture;
    uniform vec2 resolution;

    void main() { 
      vec2 nearestSeed = texture(inputTexture, vUv).xy; 
      vec2 diff = nearestSeed - vUv;
      vec2 diff_px = vec2(diff.x * resolution.x, diff.y * resolution.y); // again compute in pixels so we don't have to deal with aspect in UV space
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
    baseRayCount: {value:4},
    cascadeIndex: {value: 0.0},
    cascadeCount: {value: 1.0},
    lastIndex: {value: false},
    srgb: {value: 1.0} // honestly looks better without correction, I don't understand why we need this at all right now
  },
  vertexShader: paintMaterial.vertexShader,
  fragmentShader: // this is the raymarching shader; the main difference from main.js is that we raymarch in multiple passes and merge them together. Each pass has a different resolution and amount of rays
   ` // this needs more explaining, right now it doesn't cover the entire idea of radiance cascades
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

    bool outOfBounds(vec2 uv) {
      return uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0;
    }

    vec4 raymarch(){

      vec2 coord = floor(vUv * resolution); // coordinate of the current pixel; could also use gl_FragCoord.xy - 0.5

      float base = float(baseRayCount); // base is the number of rays per pixel, although we say we change the angular resolution, the rays per pixel always stay the same; it's just the way we do it that changes the output. 
      float sqrtBase = sqrt(base);  

      float rayCount = pow(base, cascadeIndex + 1.0); // this is not the actual ray count per pixel! this is the ray count per probe!

      float spacing = pow(sqrtBase, cascadeIndex); // spacing is how many pixels each probe covers, changes based on layer
      vec2 size = floor(resolution / spacing); // size is how many probes fit in the current layer, we floor for non-divisible resolutions -> I think this is causing errors and light leaks


      // main thing to note here is that pixels are not sampling from where they are, but from where the probe is! 
      // this is why in the intermediate cascade layers we see the texture being divided into blocks of directions. 

      vec2 probeRelativePosition = mod(coord, size); // each coord is assigned to a probe 
      vec2 rayPos = floor(coord / size); // within the probe, this pixel might be responsible for different rays!

      vec2 probeCenter = (probeRelativePosition + 0.5) * spacing; // we shoot the rays from the center of the pixel group (the probe)
      vec2 normalizedProbeCenter = probeCenter / resolution; // compute its UV coordinates

      float baseIndex = base * (rayPos.x + spacing * rayPos.y); // we calculate which rays this pixel is responsible for

      float intervalStart = cascadeIndex == 0.0 ? 0.0 : pow(base, cascadeIndex - 1.0); // each layer has a different interval and this is how you determine it; this is not following any formal rule, I think
      float intervalLength = pow(base, cascadeIndex) * 2.0; // multiply by 2, it helps look smoother for some reason im yet to figure out

      float oneOverRayCount = 1.0 / rayCount;
      float angleStepSize = TAU * oneOverRayCount;
      vec4 radiance = vec4(0.0);

      for(int i = 0; i < baseRayCount; i++) { // same logic as main except we also sample from the upper layer
        float index = baseIndex + float(i); // the rays start at the base index so each pixel in the same probe is responsible for different ray sections
        float angleStep = index + 0.5;
        float angle = angleStepSize * angleStep;

        vec2 rayDirection = vec2(cos(angle), -sin(angle)); 

        vec2 sampleUv = normalizedProbeCenter + rayDirection * intervalStart / resolution;

        vec4 radDelta = vec4(0.0);
        float traveled = 0.0;

        for (int step = 1; step < maxSteps; step++) { // the max number of steps we take for each ray, most likely we are not hitting this anyway
          float dist = texture(distanceTexture, sampleUv).r;

          sampleUv += rayDirection * dist / resolution; // also one fix from the blog post, we travel in pixels but convert to UV for sampling
          if (outOfBounds(sampleUv)) break;

          if (dist == 0.0) { // not sure why we use EPS in the tutorial, I mean it's not a big deal but this makes more sense to me.
            vec4 colorSample = texture(iTexture, sampleUv);
            radDelta += vec4(pow(colorSample.rgb, vec3(srgb)), colorSample.a); 
            break;
          }

          traveled += dist;
          if (traveled >= intervalLength) break;
        }

        bool nonOpaque = radDelta.a == 0.0; // only sample from upper if the pixel couldn't hit anything

        if (cascadeIndex < cascadeCount - 1.0 && nonOpaque) { // yep I'm also clueless about this right now, I will look into it. The high-level idea is that we get what this pixel looks like in the upper layer

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
    
    return vec4( // sRGB correction that I need to look into
      !lastIndex
       ? totalRadiance.rgb
       : pow(totalRadiance.rgb, vec3(1.0 / srgb)),
      1.0
    );
    }  

    void main() { // will split this into functions later (merge etc.)    
      gl_FragColor = raymarch();
    }
  `
});

const mesh = new THREE.Mesh(geometry, paintMaterial);
scene.add(mesh);

function animate() {
  drawTextToCanvas('HELLO LIGHT', width/2, height/2, 'white', 64);
  textTexture.needsUpdate = true;

  mesh.material = new THREE.MeshBasicMaterial({ map: textTexture }); // apparently this is how you render a canvas texture to a WebGL target

  // rest of this logic is the same as main.js—just a bunch of offscreen rendering, ping-pongs, and finally render to the actual screen

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
