import * as THREE from "three";

//appreciate the beauty of this algorithm for a minute

//https://github.com/Yaazarai/GMShaders-Radiance-Cascades/blob/main/RadianceCascades-Optimized/shaders/Shd_RadianceCascades/Shd_RadianceCascades.fsh
//AND https://m4xc.dev/articles/fundamental-rc/

//RC code from Yaazarai's repo and MAX's article. Plus comments (coming) with my own understanding
//at least for me the easiest way to build intuition was to simulate the process on a 8x8 grid using 2 cascades -> See notes
//whats up with performance? -> See yaazarai explanation (uniform sampling and split rays)
//how does bilinear fix work? -> See notes
//why not combine below two impl to one shader file? -> Performance tanks down for reasons beyond me for now
//explain why is clamping +- 1 (or 0.5) units still failing on some resolutions -> IT WAS FLOATING POINT ERRORS, fixed

//RC TODOS:
//1. I should probably learn why sRGB is used
//2. move on to HRC

export function radiancecascades_v2() {
	return new THREE.ShaderMaterial({
		uniforms: {
			sceneTexture: { value: null },
			distanceTexture: { value: null },
			previousCascadeTexture: { value: null },
			distanceResolution: { value: null },
			cascadeResolution: { value: null },
			cascadeCount: { value: null },
			cascadeIndex: { value: null },
			probeSpacing: { value: null },
			interval: { value: null },
			radianceModifier: { value: null },
			fixEdges: { value: null },
			srgbFix: { value: null },
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
            uniform sampler2D sceneTexture;
            uniform sampler2D distanceTexture;
            uniform sampler2D previousCascadeTexture;
            uniform ivec2 distanceResolution;
            uniform ivec2 cascadeResolution;
            uniform int cascadeCount;
            uniform int cascadeIndex;
            uniform float probeSpacing;
            uniform float interval;
            uniform float radianceModifier;
            uniform bool fixEdges;
            uniform bool srgbFix;
            
            out vec4 fragColor;

            #define TAU 6.283185
            #define SRGB(c) pow(c.rgb, srgbFix ? vec3(2.2) : vec3(1.0))
            #define LINEAR(c) pow(c.rgb, srgbFix ? vec3(1.0 / 2.2) : vec3(1.0))

            vec4 raymarch(vec2 ray, vec2 dir, float interval) {
                float traveled = 0.0;

                for(float i = 0.0; i < interval; i++) {
                    float dist = texelFetch(distanceTexture, ivec2(ray), 0).r;
                    
                    if (dist == 0.0 && i == 0.0 && fixEdges) {
                        dist = 1.0;
                    }
                    
                    traveled += dist;
                    ray += dir * dist;

                    if (traveled >= interval || ray.x < 0.0 || ray.y < 0.0 || ray.x >= float(distanceResolution.x) || ray.y >= float(distanceResolution.y)) break;
                    if (dist == 0.0) return vec4(SRGB(texelFetch(sceneTexture, ivec2(ray), 0)), 1.0); 
                }
                
                return vec4(0.0, 0.0, 0.0, 0.0);
            }

            vec4 merge(int upperRayIndex, vec2 probeLocation) {
                int upperAAxis = 1 << (cascadeIndex + 1);
                ivec2 upperSize = cascadeResolution / upperAAxis;

                ivec2 upperDirection = ivec2(upperRayIndex % upperAAxis, upperRayIndex / upperAAxis) * upperSize;

                vec2 upperClamped = clamp(probeLocation, vec2(0.5), vec2(upperSize) - 0.5); 

                vec2 upperProbe = vec2(upperDirection) + upperClamped;
                
                vec4 interpolated = texture(previousCascadeTexture, upperProbe / vec2(cascadeResolution)); 
                return interpolated;
            }

            void main() {        
                ivec2 coord = ivec2(gl_FragCoord.xy);

                int twoPowI = 1 << cascadeIndex; 
                int fourPowI = 1 << (cascadeIndex * 2); 

                int angularAxis = twoPowI;
                int angular = angularAxis * angularAxis;
                int upperAngular = angular * 4;

                vec2 linear = vec2(probeSpacing * float(twoPowI));
                vec2 upperLinear = linear * 2.0;
                                                                            
                ivec2 directionSize = cascadeResolution / angularAxis;
                vec2 probe = vec2(coord % directionSize);

                ivec2 direction2D = coord / directionSize;               
                int direction1D = direction2D.x + (angularAxis * direction2D.y);

                //s_n = a_1 * (1 - r ^ n) / (1 - r) a_1 = interval, r = 4
                float offset = (interval * (1.0 - float(fourPowI)) / -3.0);
                float range = interval * float(fourPowI) + length(upperLinear);
        
                vec2 rayOrigin = (probe + 0.5) * linear;
                int upperRayBase = direction1D * 4;
                float raySpacing = TAU / float(upperAngular);

                vec4 color = vec4(0.0);

                for(int i = 0; i < 4; i++) {
                    int upperRayIndex = upperRayBase + i;
                    float theta = float(upperRayIndex) * raySpacing;
                    vec2 dir = vec2(cos(theta), sin(theta));
                    
                    vec2 start = rayOrigin + (dir * offset);
                    vec4 hit = raymarch(start, dir, range);

                    //DEBUG color = vec4(vec3(theta / TAU), 1.0);

                    if (hit.a == 0.0 && cascadeIndex != cascadeCount - 1) color += merge(upperRayIndex, (probe + 0.5) / 2.0) * 0.25;
                    else color += hit * 0.25;
                }

                if (cascadeIndex == 0) {
                    if(texture(sceneTexture, vUv).a != 1.0) color.rgb *= radianceModifier; 
                    color = vec4(LINEAR(color).rgb, 1.0);    
                }

                fragColor = color;
            }

        `,
	});
}

export function radiancecascades_v3() {
	return new THREE.ShaderMaterial({
		uniforms: {
			sceneTexture: { value: null },
			distanceTexture: { value: null },
			previousCascadeTexture: { value: null },
			distanceResolution: { value: null },
			cascadeResolution: { value: null },
			cascadeCount: { value: null },
			cascadeIndex: { value: null },
			probeSpacing: { value: null },
			interval: { value: null },
			radianceModifier: { value: null },
			fixEdges: { value: null },
			srgbFix: { value: null },
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
            uniform sampler2D sceneTexture;
            uniform sampler2D distanceTexture;
            uniform sampler2D previousCascadeTexture;
            uniform ivec2 distanceResolution;
            uniform ivec2 cascadeResolution;
            uniform int cascadeCount;
            uniform int cascadeIndex;
            uniform float probeSpacing;
            uniform float interval;
            uniform float radianceModifier;
            uniform bool fixEdges;
            uniform bool srgbFix;
            
            out vec4 fragColor;

            #define TAU 6.283185
            #define SRGB(c) pow(c.rgb, srgbFix ? vec3(2.2) : vec3(1.0))
            #define LINEAR(c) pow(c.rgb, srgbFix ? vec3(1.0 / 2.2) : vec3(1.0))

            vec4 raymarch(vec2 ray, vec2 dir, float interval) {
                float traveled = 0.0;

                for(float i = 0.0; i < interval; i++) {
                    float dist = texelFetch(distanceTexture, ivec2(ray), 0).r;
                    
                    if (dist == 0.0 && i == 0.0 && fixEdges) {
                        dist = 1.0;
                    }
                    
                    traveled += dist;
                    ray += dir * dist;

                    if (traveled >= interval || ray.x < 0.0 || ray.y < 0.0 || ray.x >= float(distanceResolution.x) || ray.y >= float(distanceResolution.y)) break;
                    if (dist == 0.0) return vec4(SRGB(texelFetch(sceneTexture, ivec2(ray), 0)), 1.0);
                }
                
                return vec4(0.0, 0.0, 0.0, 0.0);
            }

            vec4 merge(int upperRayIndex, vec2 probeLocation) {
                int upperAAxis = 1 << (cascadeIndex + 1);
                ivec2 upperSize = cascadeResolution / upperAAxis;

                ivec2 upperDirection = ivec2(upperRayIndex % upperAAxis, upperRayIndex / upperAAxis) * upperSize;

                vec2 upperClamped = clamp(probeLocation, vec2(0.5), vec2(upperSize) - 0.5);

                vec2 upperProbe = vec2(upperDirection) + upperClamped;

                vec4 interpolated = texelFetch(previousCascadeTexture, ivec2(upperProbe), 0); 
                return interpolated;
            }

            void main() {
                ivec2 coord = ivec2(gl_FragCoord.xy);
                
                int twoPowI = 1 << cascadeIndex; 
                int fourPowI = 1 << (cascadeIndex * 2); 

                int angularAxis = twoPowI;
                int angular = angularAxis * angularAxis;
                int upperAngular = angular * 4;

                vec2 linear = vec2(probeSpacing * float(twoPowI));
                vec2 upperLinear = linear * 2.0;
                                                                            
                ivec2 directionSize = cascadeResolution / angularAxis;
                vec2 probe = vec2(coord % directionSize);
                
                ivec2 direction2D = coord / directionSize;  
                int direction1D = direction2D.x + (angularAxis * direction2D.y);

                //s_n = a_1 * (1 - r ^ n) / (1 - r) a_1 = interval, r = 4
                float offset = (interval * (1.0 - float(fourPowI)) / -3.0);
                float range = interval * float(fourPowI);
        
                vec2 rayOrigin = (probe + 0.5) * linear;
                int upperRayBase = direction1D * 4;
                float raySpacing = TAU / float(upperAngular);

                vec2 probeC = probe + 0.5;
                vec2 bilinearC = (probeC - 1.0) / 2.0;
                vec2 ratio = fract(bilinearC);

                vec2 probes[4];
                probes[0] = floor(bilinearC);
                probes[1] = probes[0] + vec2(1.0, 0.0);
                probes[2] = probes[0] + vec2(0.0, 1.0);
                probes[3] = probes[0] + vec2(1.0, 1.0);

                vec4 color = vec4(0.0);
                
                for(int i = 0; i < 4; i++) {
                    int upperRayIndex = upperRayBase + i;
                    float theta = float(upperRayIndex) * raySpacing;
                    vec2 dir = vec2(cos(theta), sin(theta));

                    float thetaLower = floor(float(upperRayIndex) / 4.0) * (raySpacing * 4.0);
                    vec2 lowerDir = vec2(cos(thetaLower), sin(thetaLower));
                    vec2 start = rayOrigin + (lowerDir * offset);

                    vec4 rayColors[4];
                    for(int j = 0; j < 4; j++) {
                        vec2 originUpper = (probes[j] + 0.5) * upperLinear;
                        vec2 end = originUpper + dir * (offset + range);
                        rayColors[j] = raymarch(start, normalize(end - start), length(end - start));
                        if (rayColors[j].a == 0.0 && cascadeIndex != cascadeCount - 1) {
                            rayColors[j] = merge(upperRayIndex, probes[j] + 0.5);
                        }
                    }
                    
                    color += ((1.0 - ratio.x) * (1.0 - ratio.y) * rayColors[0] +
                             ratio.x * (1.0 - ratio.y) * rayColors[1] +
                             (1.0 - ratio.x) * ratio.y * rayColors[2] +
                             ratio.x * ratio.y * rayColors[3]) * 0.25;
                }

                
                if (cascadeIndex == 0) {
                    if(texture(sceneTexture, vUv).a != 1.0) color.rgb *= radianceModifier; 
                    color = vec4(LINEAR(color).rgb, 1.0);                                
                }

                fragColor = color;
            }

        `,
	});
}
