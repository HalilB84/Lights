import * as THREE from "three";

export default function ray() {
	return new THREE.ShaderMaterial({
		uniforms: {
			iTexture: { value: null },
			distanceTexture: { value: null },
			blueNoise: { value: null },
			rayCount: { value: null },
			resolution: { value: null },
			frame: { value: null },
			radianceModifier: { value: null },
			showProgram: { value: null },
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
            uniform sampler2D iTexture;
            uniform sampler2D distanceTexture;
            uniform sampler2D blueNoise;
            uniform int rayCount;
            uniform vec2 resolution;
            uniform float frame;
            uniform float radianceModifier;
            uniform bool showProgram;
            const float PI = 3.14159265;
            const float TAU = 2.0 * PI;

            bool outOfBounds(vec2 uv) {
                return uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0;
            }

            float rand(vec2 co) {
                return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
            }

            float blueNoiseSample(vec2 coord) { //blue noise with frame based offset to it looks more blended
                vec2 blueNoiseResolution = vec2(128.0);
                vec2 offset = vec2(mod(frame, blueNoiseResolution.x), 
                                   mod(frame * 37.0, blueNoiseResolution.y)); //apparently we use 37 because its prime numbers create pesudo random patterns
                vec2 noiseUV = mod(coord + offset, blueNoiseResolution) / blueNoiseResolution;
                return texture2D(blueNoise, noiseUV).r;
            }

            //https://www.shadertoy.com/view/4tXGWN - ign noise no idea how it works, but it does reduce noise, not the best sol
            float ign(vec2 p) {
                const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
                return fract(magic.z * fract(dot(p, magic.xy)));
            }

            vec4 raymarch(){
                vec4 light = texture(iTexture, vUv);
                
                if(light.a != 0.0 && !showProgram) {
                    return vec4(light.rgb, 1.0);
                }

                float oneOverRayCount = 1.0 / float(rayCount); 
                float tauOverRayCount = TAU * oneOverRayCount;

                float noise = blueNoiseSample(gl_FragCoord.xy);

                //float noise = ign(gl_FragCoord.xy);

                //float noise = rand(vUv);

                vec4 radiance = vec4(0.0); //total light that will be accumulated
                //calcualte and shoot rayCount rays that are equidstant from each other, expensive
                
                bool useBruteForce = light.a != 0.0 && showProgram; //if we are at a seed location use fixed stop size so when the full res element is overlaid the blocky edges smooth out
                int maxSteps = useBruteForce ? 20 : 10;
                float fixedStepSize = 1.0;

                for(int i = 0; i < rayCount; i++) {
                    float angle = tauOverRayCount * (float(i) + noise); //if we dont add noise all rays will be in the same direction which will introduce patterns
                    vec2 rayDirection = vec2(cos(angle), -sin(angle)); //unit circle, NOW FIXED!!!!!!

                    vec2 sampleUv = vUv; //start at the current uv coordinate
                    vec4 radDelta = vec4(0.0);
                    
                    for (int step = 1; step < maxSteps; step++) { // one funny observation is that pixels that are close to the seed will need more steps to accumulate radiance, this is because since the dist is so small, the rays looking at the other direction (the direction not immediately looking at the seed) will need more steps to reach something else 
                        float dist = useBruteForce ? fixedStepSize : texture(distanceTexture, sampleUv).r;
                        
                        sampleUv += (rayDirection * dist) / resolution;
                        
                        //sampleUv += rayDirection * dist; //move the pixel in the direction of the ray, dist is the distance to the nearest seed so we now we can at least move that much
                        //also sampleUV wont travel from center to center, nearestfilter will get the color of the closest pixel, but sampleUV might be somewhere else in the pixel, not a big deal tho, at most we will need more stpes 
                
                        if (outOfBounds(sampleUv)) break; // end if we know we arent getting anywhere
                        
                        if (dist == 0.0 || (useBruteForce && texture(distanceTexture, sampleUv).r == 0.0)) { 
                            // at this point we now we hit a seed, so get its color and add it to the radiance
                            vec4 sampleColor = texture(iTexture, sampleUv);
                            radDelta += sampleColor;
                            break;
                        }
                    }

                    radiance += radDelta;
                }
                
                return vec4((radiance * oneOverRayCount * radianceModifier).rgb, 0.0); //finally we return the color of the pixel by averaging the light 
            }

            void main() {
                gl_FragColor = raymarch();
            }
        `,
	});
}
