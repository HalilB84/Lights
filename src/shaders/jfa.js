import * as THREE from 'three';

export default function jfa(){
    return new THREE.ShaderMaterial({
        uniforms: {
            inputTexture: { value: null },
            offset: { value: null },
            resolution: { value: null }
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
        `
    });
}
