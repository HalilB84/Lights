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
            uniform vec2 distanceResolution;
            uniform vec2 cascadeResolution;
            uniform float cascadeCount;
            uniform float cascadeIndex;
            uniform float probeSpacing;
            uniform float interval;
            uniform float radianceModifier;
            uniform bool fixEdges;
            uniform bool srgbFix;
            
            out vec4 fragColor;

            #define TAU 6.283185
            
            #define SRGB(c) pow(c.rgb, srgbFix ? vec3(2.2) : vec3(1.0))
            #define LINEAR(c) pow(c.rgb, srgbFix ? vec3(1.0 / 2.2) : vec3(1.0))

            vec4 raymarch(vec2 rayOrigin, vec2 dir, float interval) {
                vec2 ray = rayOrigin;
                float traveled = 0.0;

                for(float i = 0.0; i < interval; i++) {
                    float dist = texelFetch(distanceTexture, ivec2(ray), 0).r;
                    
                    if (dist == 0.0 && i == 0.0 && fixEdges) {
                        dist = 1.0;
                    }
                    
                    traveled += dist;
                    ray += dir * dist;

                    if (traveled >= interval || ray.x < 0.0 || ray.y < 0.0 || ray.x >= distanceResolution.x || ray.y >= distanceResolution.y) break;
                    if (dist == 0.0) return vec4(SRGB(texelFetch(sceneTexture, ivec2(ray), 0).rgb), 1.0); 
                }
                
                return vec4(0.0, 0.0, 0.0, 0.0);
            }

            vec4 merge(vec4 rayColor, float upperRayIndex, vec2 probeLocation) {
                if (rayColor.a == 1.0 || cascadeIndex == cascadeCount - 1.0)
                    return rayColor;
                
                float upperAngular = pow(2.0, cascadeIndex + 1.0);
                vec2 upperSize = cascadeResolution / upperAngular;

                vec2 upperPos = vec2(mod(upperRayIndex, upperAngular), floor(upperRayIndex / upperAngular)) * upperSize;

                vec2 upperClamped = clamp(probeLocation, vec2(0.5), upperSize - 0.5); 

                vec2 upperProbe = upperPos + upperClamped;

                vec4 interpolated = texture(previousCascadeTexture, upperProbe * (1.0 / cascadeResolution));
                return interpolated;
            }

            void main() {
            
                ivec2 coord = ivec2(gl_FragCoord.xy);
                float angular = pow(2.0, cascadeIndex);
                vec2 linear = vec2(probeSpacing * pow(2.0, cascadeIndex));
                                                                            
                ivec2 directionSize = ivec2(cascadeResolution / angular);
                vec2 probe = vec2(coord % directionSize);

                vec2 direction2D = vec2(coord / directionSize);               
                float direction1D = direction2D.x + (angular * direction2D.y);

                float offset = (interval * (1.0 - pow(4.0, cascadeIndex))) / (1.0 - 4.0);
                float range = interval * pow(4.0, cascadeIndex) + length(vec2(probeSpacing * pow(2.0, cascadeIndex + 1.0)));
        
                vec2 rayOrigin = (probe + 0.5) * linear;
                float upperRayBase = direction1D * 4.0;
                float raySpacing = TAU / (angular * angular * 4.0);

                vec4 color = vec4(0.0);

                for(float i = 0.0; i < 4.0; i++) {
                    float upperRayIndex = upperRayBase + i;
                    float theta = (upperRayIndex + 0.5) * raySpacing;
                    vec2 dir = vec2(cos(theta), sin(theta));
                    
                    vec2 start = rayOrigin + (dir * offset);
                    vec4 rayColor = raymarch(start, dir, range);

                    //DEBUG color = vec4(probe / directionSize, 0.0, 1.0); //floats can go kill themselves
                    //DEBUG color = vec4(vec3(theta / TAU), 1.0);

                    color += merge(rayColor, upperRayIndex, (probe + 0.5) / 2.0) * 0.25;
                }

                if (cascadeIndex == 0.0) {
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
            uniform vec2 distanceResolution;
            uniform vec2 cascadeResolution;
            uniform float cascadeCount;
            uniform float cascadeIndex;
            uniform float probeSpacing;
            uniform float interval;
            uniform float radianceModifier;
            uniform bool fixEdges;
            uniform bool srgbFix;
            
            out vec4 fragColor;

            #define TAU 6.283185
            #define SRGB(c) pow(c.rgb, srgbFix ? vec3(2.2) : vec3(1.0))
            #define LINEAR(c) pow(c.rgb, srgbFix ? vec3(1.0 / 2.2) : vec3(1.0))

            vec4 raymarch(vec2 rayOrigin, vec2 dir, float interval) {
                vec2 ray = rayOrigin;
                float traveled = 0.0;

                for(float i = 0.0; i < interval; i++) {
                    float dist = texelFetch(distanceTexture, ivec2(ray), 0).r;
                    
                    if (dist == 0.0 && i == 0.0 && fixEdges) {
                        dist = 1.0;
                    }
                    
                    traveled += dist;
                    ray += dir * dist;

                    if (traveled >= interval || ray.x < 0.0 || ray.y < 0.0 || ray.x >= distanceResolution.x || ray.y >= distanceResolution.y) break;
                    if (dist == 0.0) return vec4(SRGB(texelFetch(sceneTexture, ivec2(ray), 0)).rgb, 1.0);
                }
                
                return vec4(0.0, 0.0, 0.0, 0.0);
            }

            vec4 merge(vec4 rayColor, float upperRayIndex, vec2 probeLocation) {
                if (rayColor.a == 1.0 || cascadeIndex == cascadeCount - 1.0)
                    return rayColor;
                
                float upperAngular = pow(2.0, cascadeIndex + 1.0);
                vec2 upperSize = cascadeResolution / upperAngular;

                vec2 upperPos = vec2(mod(upperRayIndex, upperAngular), floor(upperRayIndex / upperAngular)) * upperSize;

                vec2 upperClamped = clamp(probeLocation, vec2(0.5), upperSize - 0.5);

                vec2 upperProbe = upperPos + upperClamped;

                vec4 interpolated = texelFetch(previousCascadeTexture, ivec2(upperProbe), 0); //nearest filter
                return interpolated;
            }

            void main() {
            
                ivec2 coord = ivec2(gl_FragCoord.xy);
                float angular = pow(2.0, cascadeIndex);
                vec2 linear = vec2(probeSpacing * pow(2.0, cascadeIndex));
                vec2 linearUpper = linear * 2.0;
                                                                            
                ivec2 directionSize = ivec2(cascadeResolution / angular);
                vec2 probe = vec2(coord % directionSize);
                vec2 direction2D = vec2(coord / directionSize);  
                float direction1D = direction2D.x + (angular * direction2D.y);

                float offset = (interval * (1.0 - pow(4.0, cascadeIndex))) / (1.0 - 4.0);
                float range = interval * pow(4.0, cascadeIndex);
        
                vec2 rayOrigin = (probe + 0.5) * linear;
                float upperRayBase = direction1D * 4.0;
                float raySpacing = TAU / (angular * angular * 4.0);

                vec2 probeC = probe + 0.5;
                vec2 bilinearC = (probeC - 1.0) / 2.0;
                vec2 ratio = fract(bilinearC);

                vec2 probes[4];
                probes[0] = floor(bilinearC);
                probes[1] = probes[0] + vec2(1.0, 0.0);
                probes[2] = probes[0] + vec2(0.0, 1.0);
                probes[3] = probes[0] + vec2(1.0, 1.0);

                vec4 color = vec4(0.0);
                for(float i = 0.0; i < 4.0; i++) {
                    float upperRayIndex = upperRayBase + i;
                    float theta = (upperRayIndex + 0.5) * raySpacing;
                    vec2 dir = vec2(cos(theta), sin(theta));

                    float thetaLower = (floor(upperRayIndex / 4.0) + 0.5) * (raySpacing * 4.0);
                    vec2 lowerDir = vec2(cos(thetaLower), sin(thetaLower));
                    vec2 start = rayOrigin + (lowerDir * offset);

                    vec4 rayColors[4];
                    for(int j = 0; j < 4; j++) {
                        vec2 originUpper = (probes[j] + 0.5) * linearUpper;
                        vec2 end = originUpper + dir * (offset + range);
                        rayColors[j] = raymarch(start, normalize(end - start), length(end - start));
                        rayColors[j] = merge(rayColors[j], upperRayIndex, probes[j] + 0.5);
                    }
                    
                    color += ((1.0 - ratio.x) * (1.0 - ratio.y) * rayColors[0] +
                             ratio.x * (1.0 - ratio.y) * rayColors[1] +
                             (1.0 - ratio.x) * ratio.y * rayColors[2] +
                             ratio.x * ratio.y * rayColors[3]) * 0.25;
                }

                
                if (cascadeIndex == 0.0) {
                    if(texture(sceneTexture, vUv).a != 1.0) color.rgb *= radianceModifier; 
                    color = vec4(LINEAR(color).rgb, 1.0);                                
                }

                fragColor = color;
            }

        `,
	});
}
