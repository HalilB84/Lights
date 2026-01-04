import * as THREE from "three";

//Direct implementation of the equations given in:
//https://en.wikipedia.org/wiki/Bilateral_filter
export default function bilateral() {
	return new THREE.ShaderMaterial({
		uniforms: {
			inputTexture: { value: null },
			resolution: { value: null },
			sigma_d: { value: null },
			sigma_r: { value: null },
			radius: { value: null },
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
            uniform vec2 resolution;

            uniform float sigma_d;
            uniform float sigma_r;
            uniform float radius;
            
            out vec4 fragColor;

            void main() {
                vec2 ij = gl_FragCoord.xy;
                vec3 I_ij = texture(inputTexture, vUv).rgb;
                
                vec3 I_DT = vec3(0.0);
                float I_DB = 0.0;

                for(float i = -radius; i <= radius; i++) {
                    for(float j = -radius; j  <= radius; j++) {
                       
                        vec2 kl = ij + vec2(i, j);
                        vec3 I_kl = texture(inputTexture, kl / resolution).rgb;

                        float space_diff = dot(ij - kl, ij - kl);
                        float image_diff = dot(I_ij - I_kl, I_ij - I_kl);

                        float w = exp( -(space_diff / (2.0 * sigma_d * sigma_d)) - (image_diff / (2.0 * sigma_r * sigma_r)) );

                        I_DT += w * I_kl;
                        I_DB += w; 
                    }
                }
                
                fragColor = vec4(I_DT / I_DB, 1.0);
            }
        `,
	});
}
