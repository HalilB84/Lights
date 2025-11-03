import * as THREE from 'three';

export default function resizer(){
    return new THREE.ShaderMaterial({
        uniforms: {
            sourceTex: { value: null },
            resolution: { value: null },
            sourceAspect: { value: null },
            sourceScale: { value: null },
            centerX: { value: null },
            mouse: { value: null }
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
            uniform sampler2D sourceTex;
            uniform vec2 resolution;
            uniform float sourceAspect;
            uniform float sourceScale;
            uniform float centerX; 
            uniform vec2 mouse;

            void main() {
                float basePx = sourceScale * min(resolution.x, resolution.y);
                float wPx = basePx;
                float hPx = basePx;
                if (sourceAspect >= 1.0) {
                  hPx = basePx / sourceAspect;
                } else {
                  wPx = basePx * sourceAspect;
                }
                vec2 sizeUv = vec2(wPx / resolution.x, hPx / resolution.y);
                vec2 minUv = vec2(centerX, 0.5) - 0.5 * sizeUv;
                vec2 maxUv = minUv + sizeUv;
                bool inside = vUv.x >= minUv.x && vUv.x <= maxUv.x && vUv.y >= minUv.y && vUv.y <= maxUv.y;
                if (inside) {
                  vec2 localUv = (vUv - minUv) / sizeUv;
                  gl_FragColor = texture2D(sourceTex, localUv);
                } 
                else {
                  if(distance(gl_FragCoord.xy, mouse) < 10.) {
                    gl_FragColor = vec4(vUv.x, vUv.y, 1.0, 1.0);
                  } 

                  else {
                    discard;
                  }
                }
            }
        `
    });
}
