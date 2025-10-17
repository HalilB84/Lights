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
                float nearestDist = 9999999.9; // Distance to the nearest seed, make sure its larger then the biggest pixel distance^2

                //prove why the algo works

                for(float y = -1.; y <= 1.; y += 1.){ 
                    for(float x = -1.; x <= 1.; x += 1.){

                        vec2 samplePx = gl_FragCoord.xy + vec2(x, y) * offset; 
                        vec2 sampleUV = samplePx / resolution;

                        if(sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) { continue; }

                        vec4 sampleValue = texture2D(inputTexture, sampleUV);

                        if(sampleValue.a != 0.0) {

                       
                        vec2 diff_px = sampleValue.zw - gl_FragCoord.xy;
                        float dist_raw = dot(diff_px, diff_px);
                        float dist_sq = dist_raw;
                          

                        //WHAT THE FUCK IS HAPPENING
                        //IF THEY ARE THE SAME VALUE THEN WHYYYYYYYYYYYYYYYYYYYYYYY JFA

                        if (abs(dist_raw - nearestDist) == 0.0) { //this shit fixes something, not sure what but yes
                            float seedBias = fract(sin(dot(sampleValue.zw, vec2(12.9898, 78.233))) * 43758.5453);
                            dist_sq -= seedBias * 1e-1; 
                        }

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
