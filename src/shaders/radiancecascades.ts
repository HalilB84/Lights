import * as THREE from "three";

//appreciate the beauty of this algorithm for a minute

//https://mini.gmshaders.com/p/radiance-cascades2
//https://github.com/Yaazarai/GMShaders-Radiance-Cascades/blob/main/RadianceCascades-Optimized/shaders/Shd_RadianceCascades/Shd_RadianceCascades.fsh
//Vanilla RC code from Yaazarai's repo commented with my own understanding + some small changes
//At least for me the easiest way to build intuition was to simulate the process on a 8x8 grid using 2 cascades -> SEE NOTES

//Whats up with performance?
//Quite puzzled on performance, I expected RC to be faster than naive ray marching as every other tutorial says it is
//With 6 cascade passes and a fixed 4 rays per pixel, thats 24 rays per pixel not counting the ray marching phase.
//How does naive ray marching run faster than RC with 32 rays per pixel? Is it beacuse RC is done in several passes?
//Also like why does this happen when the text on the screen is bigger? I get that its more ray steps but it shouldnt be slower than Naive RM????????

//RC TODOS:
//1. Implement and explain optional bilinear-fix. First of all why does the interpolation artifacts happen -> the probe in cascadeN might be blocked with an occluder but the probes in cascadeN+1 are not necessarily blocked.
//So what is the fix? -> https://github.com/Yaazarai/GMShaders-Radiance-Cascades/blob/main/RadianceCascades-Optimized/shaders/Shd_RadianceCascades_BilinearFix/Shd_RadianceCascades_BilinearFix.fsh
//2. I should probably learn why sRGB is used
//3. Explain why is clamping +- 1 units still failing on some resolutions? -> Still have no idea

export function radiancecascades() {
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
            uniform float probeSpacing;                                                    //Basically controls the probe spacing in the intended resolution (this is very hard to put into words). Remember that cascadeResolution = intended res / probe spacing. So if the spacing was 0.5 the cascadeTexture would be bigger to hold more data. In the 0.5 case in the intended res space each texel would have 4 probes in cascade0. The math checks out but hard to wrap your head around without visualizing it. 
            uniform float interval;
            uniform float radianceModifier;
            uniform bool fixEdges;
            
            out vec4 fragColor;

            #define TAU 6.283185

            vec4 raymarch(vec2 rayOrigin, float theta, float offset, float range) {        //Same logic as ray.js but also accounting for the offset and range of the cascade level
                vec2 texel = 1.0 / distanceResolution;
                vec2 delta = vec2(cos(theta), sin(theta));
                vec2 ray = (rayOrigin + (delta * offset)) * texel;
                                                                                           //there is also the issue where a ray can accidentally sample a pixel that is not the edge of a light source since it starts at info.offset. Doesn't seem to change much
                                                                                           //wait no, because of the extended range in the previous cascade, this shouldnt be a problem, we never start a ray at a seed/light location. 
                for(float i = 0.0, df = 0.0, rd = 0.0; i < range; i++) {
                    df = texture(distanceTexture, ray).r;
                    
                    if (df == 0.0 && i == 0.0 && fixEdges) {                               //Basically the idea here is that if we are at the very edge of the text we actually sample 1px inwards to smooth out the edges by treating them as part of the scene (receiving light) This looks good because of the overlay, needs fix tho.
                        df = 1.0;
                    }
                    
                    rd += df;
                    ray += delta * df * texel;
                    
                    if (rd >= range || floor(ray) != vec2(0.0)) break;
                    if (df == 0.0) return vec4(texture(sceneTexture, ray).rgb, 0.0);
                }
                
                return vec4(0.0, 0.0, 0.0, 1.0);
            }

            vec4 merge(vec4 rayColor, float upperRayIndex, vec2 directionSize, vec2 probe) {
                if (rayColor.a == 0.0 || cascadeIndex >= cascadeCount - 1.0)               //If the ray hits something (meaning we dont need to check upper cascades) or this is the first (topmost) cascade (there is no upper cascade) just return the color.                         
                    return rayColor;                                                       //The original code has 1.0 - rinfo.a, but at least here it doesn't matter. There is no alpha check in the merge step so alpha can be anything.
                
                float upperAngular = pow(2.0, cascadeIndex + 1.0);                         //The number of direction segments in each axis in the upper cascade
                vec2 upperSize = directionSize * 0.5;                                      //The size of each direction block in the upper cascade

                vec2 upperPos = vec2(mod(upperRayIndex, upperAngular), 
                                    floor(upperRayIndex / upperAngular)) * upperSize;      //This is the bottom left corner of the direction block in the upper cascade.
                                                                                          
                vec2 upperAdjust = (probe * 0.5) + 0.25;                                   //Relative probe position in that direction block. I think the 0.25 is to account for the centering of the pixel in this cascade level. 
                vec2 upperClamped = max(vec2(2.0), min(upperAdjust, upperSize - 2.0));     //Ohh this is good one. If we dont clamp, we might accidentally interpolate stuff from other direction blocks. the max min stop that. 
                                                                                           //However for some magical reasons the light can still leak in some situations when using +-1.Fixed by making it +-2. I lowkey gave up on understanding why, I'm blaming it on the bilinear filter because it makes my life easier.
                                                                                        
                vec2 upperProbe = upperPos + upperClamped;                                 //Variable name is misleading. This is the actual probe position in the upper cascade in pixel coordinates

                vec4 interpolated = texture(previousCascadeTexture, 
                                            upperProbe * (1.0 / cascadeResolution));       //Finally sample this position by getting the UV pos. Stuff will be automatically interpolated. The texture filter needs to be THREE.LinearFilter for this.
                                                                                           //Also the reason we interpolate is because the probe from the lower cascade does not have an exact match with the probe in the upper cascade. 
                                                                                           //Using nearest filter makes the light look blocky, whereas bilinear filtering blends the nearest 4 probes together making it look more smooth. 
                return rayColor + interpolated;
            }

            void main() {
            
                vec2 coord = gl_FragCoord.xy - 0.5;                                        //Get the the pixel's coordinate. 0,0 being the bottom left one of the texture, then proceed to calculate relevant stuff about the pixel.
                float angular = pow(2.0, cascadeIndex);                                    //I like to think about this as the number of direction segments in each axis of the entire texture
                vec2 linear = vec2(probeSpacing * pow(2.0, cascadeIndex));                 //The spacing between the probes in the texture. As each cascade level goes up, the linear resolution decreases, so there is more spacing. 
                                                                                           //why pow2? Because we scale each axis, which comes out to 4x scaling overall. 
                                                                            
                vec2 directionSize = cascadeResolution / angular;                          //The size of each direction block in the texture.
                vec2 probe = mod(coord, directionSize);                                    //This pixel is in this probe group
                vec2 direction2D = floor(vUv * angular);                                   //This pixel is in this direction block but in 2D
                float direction1D = direction2D.x + (angular * direction2D.y);             //This pixel is in this direction block but in 1D

                float offset = (interval * (1.0 - pow(4.0, cascadeIndex))) / (1.0 - 4.0);  //In each cascade level we are responsible for different ray ranges, thus we need to calculate the starting offset as follows.
                float range = interval * pow(4.0, cascadeIndex);                           //The range of rays we are responsible for. 
                
                                                                                           //Just to solidfy starting and ending points it goes like (assuming cascadeInterval is 1): Cascade0: [0, 1], Cascade1: [1, 5], Cascade2: [5, 21], Cascade3: [21, 85], Cascade4: [85, 341], Cascade5: [341, 1365], Cascade6: [1365, 5461], you won't need more than that

                range += length(vec2(probeSpacing * pow(2.0, cascadeIndex + 1.0)));        //The probe in cascadeN doesnt map the the same relative location in cascadeN+1, there will be some difference in the positions.
                                                                                           //So think about this example where the range is not extended: The probe I shot a ray from in cascadeN didn't hit anything. 
                                                                                           //In the merge step, I ask the upper cascade what happened to this ray?. However because of the difference in relative positions the probe in cascadeN+1 shoots the ray at a slight offset in addition to the normal offset. 
                                                                                           //Because of this unintended additional offset, the ray might skip over a light source and sample something behind it. I think this is what is meant by a light leak in the original post.
                                                                                           //Why extend it that much? Because that is the digonal (max) distance between probes in cascadeN+1, and the relative difference can be at most this much between the 4 interpolating probes.   

                vec2 rayOrigin = (probe + 0.5) * linear;                                   //The ray calculation starts from the center of the probe. Why add 0.5? Because we shoot from the center of the pixel. 
                                                                                           //Remember that pinfo.probe is a integer pixel position. So muliply that by the pinfo.linear (the spacing between the probes) to get the proper position in the texture.

                float upperRayBase = direction1D * 4.0;                                    //One ray in this cascade corresponds to 4 rays in the upper cascade to account for this shift we multiply the index by 4
                                                                                           //Remember that this pixel doesn't necessarily look at all directions, it only looks at directions it is responsible for in its probe group. 
                                                                                           //It only looks at all directions (each pixel owns all of the rays) when it is the last cascade (cascade0).
                                                                  
                float raySpacing = TAU / (angular * angular * 4.0);                        //Divide the circle angles into the amount of rays we are shooting in this cascade (we shoot this amount of rays from each probe, not per pixel)

                vec4 color = vec4(0.0);                                                    //Total light stored in this pixel
                for(float i = 0.0; i < 4.0; i++) {                                         //Shoot 4 rays per pixel. This has to be 4. If it was higher then some rays wouldn't have a direction block in the upper Cascade. It also can't be less.
                    float upperRayIndex = upperRayBase + i;                                //Which ray are we dealing with? This is important because the index tells us which direction block we are in the upper cascade. 
                    float theta = (upperRayIndex + 0.5) * raySpacing;                      //Calculate the angle of the ray, I think the 0.5 is to offset the rays to they are not purely horizontal.vertical, idk doesnt make any difference 
                    
                    vec4 rayColor = raymarch(rayOrigin, theta, offset, range);             //Simple raymarch, the logic is the same as ray.js
                    color += merge(rayColor, upperRayIndex, directionSize, probe) * 0.25;  //Merge with the upper cascade, we multiply by 0.25 as we are averaging 4 different ray directions
                }
                
                if (cascadeIndex == 0.0) {
                    if(texture(sceneTexture, vUv).a != 1.0) color.rgb *= radianceModifier; //Last cascade, apply the radiance modifier, this is purely aesthetics
                    //color = vec4(pow(color.rgb, vec3(1.0 / 2.2)), 1.0);                  //All my homies hate srgb, jokes aside I still dont know how or why this works but it looks better without it. 
                }
                    
                fragColor = color;
            }

        `,
	});
}
