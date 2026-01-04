import * as THREE from "three";

//https://en.wikipedia.org/wiki/Jump_flooding_algorithm
export default function jfa() {
	return new THREE.ShaderMaterial({
		uniforms: {
			inputTexture: { value: null },
			offset: { value: null },
			resolution: { value: null },
			isLast: { value: null },
		},
		glslVersion: THREE.GLSL3,
		vertexShader: `
            out vec2 vUv;
            
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,

		fragmentShader: `
            precision highp float;
            in vec2 vUv;
            uniform sampler2D inputTexture;
            uniform float offset;
            uniform vec2 resolution;
            uniform bool isLast;
            
            out vec4 fragColor;

            void main() {
                vec4 nearestSeed = vec4(0.0); 
                float nearestDist = 9999999.9; // Distance to the nearest seed, make sure its larger then the biggest pixel distance^2

                //prove why the algo works

                for(float y = -1.; y <= 1.; y += 1.){ 
                    for(float x = -1.; x <= 1.; x += 1.){

                        vec2 samplePx = gl_FragCoord.xy + vec2(x, y) * offset; 
                        vec2 sampleUV = samplePx / resolution;

                        if(sampleUV.x < 0.0 || sampleUV.x > 1.0 || sampleUV.y < 0.0 || sampleUV.y > 1.0) { continue; }

                        vec4 sampleValue = texture(inputTexture, sampleUV);

                        if(sampleValue.a != 0.0) {
                            vec2 diff_px = sampleValue.xy - gl_FragCoord.xy;
                            float dist_raw = dot(diff_px, diff_px);
                            float dist_sq = dist_raw;
                            
                            if(dist_sq  < nearestDist){
                                nearestDist = dist_sq;
                                nearestSeed = sampleValue; 
                            }
                        }
                    }
                }

                if(isLast == false) {
                    fragColor = nearestSeed;
                    return;
                }

                //distance calculation last pass 
                vec2 diff_px = nearestSeed.xy - gl_FragCoord.xy;
                
                fragColor = vec4(length(diff_px), 0., 0., 1.);

            }
        `,
	});
}
