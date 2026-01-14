import * as THREE from "three";

//same thing as radiancecascades but probe major with no pre averaging. Made it to make sure I understand it all the way through
//works, it looks exactly the same as the other one except small differences in the edges because of the differet clamping in v2

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
            void main() { 
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
		fragmentShader: `
            precision highp float;
            
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
            
            out vec4 fragColor;

            #define TAU 6.283185

            vec4 raymarch(vec2 rayOrigin, float theta, float offset, float range) {        
                vec2 texel = 1.0 / distanceResolution;
                vec2 delta = vec2(cos(theta), sin(theta));
                vec2 ray = (rayOrigin + delta * offset) * texel;
                float traveled = 0.0;

                for(float i = 0.0; i < range; i++) {
                    float dist = texture(distanceTexture, ray).r;
                    
                    if (dist == 0.0 && i == 0.0 && fixEdges) {                             
                        dist = 1.0;
                    }
                    
                    traveled += dist;
                    ray += delta * dist * texel;
                    
                    if (traveled >= range || floor(ray) != vec2(0.0)) break;
                    if (dist == 0.0) return vec4(texture(sceneTexture, ray).rgb, 1.0);
                }
                
                return vec4(0.0, 0.0, 0.0, 0.0);
            }

            vec4 merge(vec2 probeIndex, float rayOffset) {
                float upperBlockSize = pow(2.0, cascadeIndex + 2.0);
                vec2 upperProbeCount = cascadeResolution / upperBlockSize;
                
                //find bottom left probe in the upper cascade like this per yaazarais explanation (makes so much sense btw)
                vec2 adjusted = max(probeIndex - 1.0, 0.0);
                vec2 BL = floor(adjusted / 2.0);
                
                //at this point is the bottom left probe in the upper cascade. But there is an exception where the bottom left might not have a right or top probe if its on the edge
                if (BL.x == upperProbeCount.x - 1.0) BL.x -= 1.0;
                if (BL.y == upperProbeCount.y - 1.0) BL.y -= 1.0;

                //ok that is the bottom left probe now offset
                vec2 BR = BL + vec2(1.0, 0.0);
                vec2 TL = BL + vec2(0.0, 1.0);
                vec2 TR = BL + vec2(1.0, 1.0);

                //ray in the upper cascade
                float rayIndex = rayOffset * 4.0;

                vec4 colors[4];
                vec2 bilinearPos[4];
                vec2 probes[4] = vec2[4](BL, BR, TL, TR);

                for (int i = 0; i < 4; i++) {
                    colors[i] = vec4(0.0);
                    bilinearPos[i] = (probes[i] + 0.5) * upperBlockSize;

                    for (int j = 0; j < 4; j++) {
                        float ray = rayIndex + float(j);
                        vec2 rayPos = vec2(mod(ray, upperBlockSize), floor(ray / upperBlockSize));
                        ivec2 texel = ivec2(probes[i] * upperBlockSize + rayPos);
                        colors[i] += texelFetch(previousCascadeTexture, texel, 0) * 0.25;
                    }
                }

                //last step is getting the bilinear weights (there is most very likely a better way as per MAX's fract way)
                vec2 pos = (probeIndex + 0.5) * (upperBlockSize / 2.0);

                //now bilinear pos and pos is in cascade space
                pos = clamp(pos, bilinearPos[0], bilinearPos[3]);
                
                float h = (pos.x - bilinearPos[0].x) / (bilinearPos[1].x - bilinearPos[0].x);
                float v = (pos.y - bilinearPos[0].y) / (bilinearPos[2].y - bilinearPos[0].y);
                
                return colors[0] * (1.0 - h) * (1.0 - v) +
                       colors[1] * h * (1.0 - v) +
                       colors[2] * (1.0 - h) * v +
                       colors[3] * h * v;
            }

            //init ray 4 assuming cascadeRes is 4x scene Res
            void main() {
                vec2 coord = gl_FragCoord.xy - 0.5;
                float blockSize = pow(2.0, cascadeIndex + 1.0);
                float rayCount = pow(4.0, cascadeIndex + 1.0);

                //get which block you are in in in this cascade level
                vec2 blockIndex = floor(coord / blockSize);
                 
                //now where in the block exactly
                vec2 blockRelative2D = mod(coord, blockSize);
                float blockRelative1D = blockRelative2D.x + blockRelative2D.y * blockSize;
                
                float theta = (blockRelative1D + 0.5) * TAU / rayCount;

                //IN SCENE PIXELS
                vec2 probePos = (blockIndex + 0.5) * pow(2.0, cascadeIndex);
                
                float offset = interval * (1.0 - pow(4.0, cascadeIndex)) / (1.0 - 4.0);
                float range = interval * pow(4.0, cascadeIndex);
                range += length(vec2(pow(2.0, cascadeIndex + 1.0)));    
                
                vec4 color = raymarch(probePos, theta, offset, range);
                fragColor = color;

                if (color.a == 0.0 && cascadeIndex != cascadeCount - 1.0) {
                    fragColor = merge(blockIndex, blockRelative1D);
                }
            }
        `,
	});
}

/*

export function collapseFinal() {
    return new THREE.ShaderMaterial({
        uniforms: {
            cascadeTexture: { value: null },
        },
        glslVersion: THREE.GLSL3,
        vertexShader: ` 
            void main() { 
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            precision highp float;
            uniform sampler2D cascadeTexture;
            
            out vec4 fragColor;

            void main() {                
                vec2 coord = gl_FragCoord.xy - 0.5;
                
                vec4 color = vec4(0.0);
                for (int i = 0; i < 4; i++) {
                    color += texelFetch(cascadeTexture, ivec2(coord * 2.0 + vec2(i % 2, i / 2)), 0) * 0.25;
                }
                
                fragColor = color;
            }
        `,
    });
}
    
*/
