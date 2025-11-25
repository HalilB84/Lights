import * as THREE from "three";

//https://mini.gmshaders.com/p/radiance-cascades2
//https://github.com/Yaazarai/GMShaders-Radiance-Cascades/blob/main/RadianceCascades-Optimized/shaders/Shd_RadianceCascades/Shd_RadianceCascades.fsh
//Vanilla RC code from Yaazarai's repo commented with my own understanding
//At least for me the easiest way to build intution was to simulate the process on a 8x8 grid using 2 cascades.

//Things that need further explaining:
//Why do we need to overlap the range? -> well I know why, but not the intution
//Why is clamping +- 1 units is still failing on some resolutions

export default function radiancecascades() {
	return new THREE.ShaderMaterial({
		uniforms: {
			sceneTexture: { value: null },
			distanceTexture: { value: null },
			previousCascadeTexture: { value: null },
			resolution: { value: null },
			cascadeExtent: { value: null },
			cascadeCount: { value: null },
			cascadeIndex: { value: null },
			cascadeLinear: { value: null },
			cascadeInterval: { value: null },
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
            uniform vec2 resolution;
            uniform vec2 cascadeExtent;
            uniform float cascadeCount;
            uniform float cascadeIndex;
            uniform float cascadeLinear;
            uniform float cascadeInterval;
            uniform float radianceModifier;
            uniform bool fixEdges;
            
            out vec4 fragColor;

            #define TAU 6.283185

            struct probe_info { float angular; vec2 linear, size, probe; float index, offset, range; };
            vec3 tosrgb(vec3 color) { return pow(color, vec3(2.2)); }

            probe_info calc(vec2 coord) {
                float angular = pow(2.0, cascadeIndex);                                             //I like to think about this as the number of direction segments in each axis of the entire texture
                vec2 linear = vec2(cascadeLinear * pow(2.0, cascadeIndex));                         //The spacing between the probes in the texture. Each cascade level (going up) linear resolution decreases, so there is more spacing. 
                                                                                                    //why pow2? Because we scale each axis, which comes out to 4x scaling overall. 
                                                                            
                vec2 size = cascadeExtent / angular;                                                //The size of each direction block in the texture.
                vec2 probe = mod(coord, size);                                                      //This pixel is in this probe group
                vec2 raypos = floor(vUv * angular);                                                 //This pixel is in this direction block but in 2D
                float index = raypos.x + (angular * raypos.y);                                      //This pixel is in this direction block but in 1D
                float offset = (cascadeInterval  * (1.0 - pow(4.0, cascadeIndex))) / (1.0 - 4.0);   //In each cascade level we are responsible for different ray ranges, thus we need to caculate the starting offset as follows.
                float range = cascadeInterval * pow(4.0, cascadeIndex);                             //The range of rays we are responsible for.
                range += length(vec2(cascadeLinear * pow(2.0, cascadeIndex+1.0)));                  //There is a need for some overlap due to the nature of merging? I havent fully figured out why.
                
                return probe_info(angular * angular, linear, size, probe, index, offset, range);   
            }

            vec4 raymarch(vec2 point, float theta, probe_info info) {                               //Same logic as ray.js but also account for the offset and range of the cascade level

                vec2 texel = 1.0 / resolution;
                vec2 delta = vec2(cos(theta), -sin(theta));
                vec2 ray = (point + (delta * info.offset)) * texel;

                for(float i = 0.0, df = 0.0, rd = 0.0; i < info.range; i++) {
                    df = texture(distanceTexture, ray).r;
                    
                    if (df == 0.0 && i == 0.0 && fixEdges) {                                                    //Basically the idea here is that if we are the the very edge of the text we actually sample 1px inwards to smooth out the edges by treating them as a part of the scene (the light receiving) This Looks goos because of the overlay, needs fix fix tho.
                        df = 1.0;
                    }
                    
                    rd += df;
                    ray += delta * df * texel;
                    
                    if (rd >= info.range || floor(ray) != vec2(0.0)) break;
                    if (df == 0.0) return vec4(texture(sceneTexture, ray).rgb, 0.0);
                }
                
                return vec4(0.0, 0.0, 0.0, 1.0);
            }

            vec4 merge(vec4 rinfo, float index, probe_info pinfo) {
                if (rinfo.a == 0.0 || cascadeIndex >= cascadeCount - 1.0)                               //If the ray hit something (meaning we dont need to check upper cascades) or this is the first (topmost) cascade (there is no upper cascade) just return the color.                         
                    return vec4(rinfo.rgb, 0.0);                                                        //The original code has 1.0 - rinfo.a, but since this output also goes through the bilateral filter we don't need it. 
                
                float angularN1 = pow(2.0, cascadeIndex + 1.0);                                         //The number of direction blocks in each axis in the upper cascade
                vec2 sizeN1 = pinfo.size * 0.5;                                                         //The size of each direction block in the upper cascade
                vec2 probeN1 = vec2(mod(index, angularN1), floor(index / angularN1)) * sizeN1;          //Variable name is misleading. This is the topleft corner of the direction block in the upper cascade.
                vec2 interpUVN1 = (pinfo.probe * 0.5) + 0.25;                                           //Relative probe position in that direction block. I think the 0.25 is to account for the centering in the pixel in this cascade level. 
                vec2 clampedUVN1 = max(vec2(2.0), min(interpUVN1, sizeN1 - 2.0));                       //Ohh this is good one. If we dont clamp, we might accidentally interpolate stuff from outher directions blocks. the max min stop that. 
                                                                                                        //However for some magical reasons the light can still leak in some situations when using +-1.Fixed by making it +-2. I lowkey gave up on understanding why, I'm blaming it one the bilinear filter because it makes my life easier.
                                                                                                        
                vec2 probeUVN1 = probeN1 + clampedUVN1;                                                 //Variable name is misleading. This is the actual probe position in the upper cascade in pixel position
                vec4 interpolated = texture(previousCascadeTexture, probeUVN1 * (1.0 / cascadeExtent)); //Finally sample this position by getting the UV pos. Stuff will be automatically interpolated. The texture filter needs to be THREE.LinearFilter for this.
                return rinfo + interpolated;
            }

            void main() {
            
                probe_info pinfo = calc(gl_FragCoord.xy - 0.5);   //Get the the pixel's coordinate. 0,0 being the bottom left one of the texture, then proceed to calculate relevant stuff about the pixel.
                vec2 origin = (pinfo.probe + 0.5) * pinfo.linear; //The ray calculation starts from the center of the probe. Why add 0.5? Because we shoot from the center of the pixel. 
                                                                  //Remember that pinfo.probe is a integer pixel position. So muliply that by the pinfo.linear (the spacing between the probes) to get the proper position in the texture.

                float preavg_index = pinfo.index * 4.0;           //One ray in this cascade correspond to 4 rays in the upper cascade to account for this shift we multiply the index by 4
                                                                  //Remember that this pixel doesn't necessarily look at all directions, it only looks at directions it is responsible for in its prober group. 
                                                                  //It only looks at all directions (each pixel owns all of the rays) when it is the last cascade (cascade0).
                                                                  
                float theta_scalar = TAU / (pinfo.angular * 4.0); //Divide the circle angles into the amount of rays we are shooting this cascade (we shoot this amount of rays from each probe, not per pixel)
                
                vec4 color = vec4(0.0);                           //Total light stored in this pixel
                for(float i = 0.0; i < 4.0; i++) {                //Shoot 4 rays per pixel.
                    float index = preavg_index + i;               //Which ray are we dealing with? This is important because the index tells us which direction block we are in the upper cascade. 
                    float theta = (index + 0.5) * theta_scalar;   //Calculate the angle of the ray, I think the 0.5 is to offset the rays to they are not purely horizontal.vertical, idk doesnt make any difference 
                    
                    vec4 rinfo = raymarch(origin, theta, pinfo);  //Simple raymarch the logic is the same as ray.js
                    color += merge(rinfo, index, pinfo) * 0.25;   //Merge with the uppder cascade, we multiply by 0.25 as we are averaging 4 different ray directions
                }
                
                if (cascadeIndex == 0.0) {
                    if(texture(sceneTexture, vUv).a != 1.0) color.rgb *= radianceModifier;    //Last cascade, apply the radiance modifier, this is purely aesthetics
                    //color = vec4(pow(color.rgb, vec3(1.0 / 2.2)), 1.0);                     //All my homies hate srgb, jokes aside I still dont know how or why this works but without it looks better. 
                }
                fragColor = color;
            }
        `,
	});
}
