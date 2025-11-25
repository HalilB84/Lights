import * as THREE from "three";

export default function seed() {
	return new THREE.ShaderMaterial({
		uniforms: {
			inputTexture: { value: null },
			resolution: { value: null },
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
            
            out vec4 fragColor;

            void main() {
                //this is the shader that converts the input texture to a seed texture
                //to calculate the nearest seed in the jfa phase, we need to know the location of the seed in the input texture
                //so we are storing the coordinates in a texture, this creates a nice looking gradient 

                vec4 color = texture(inputTexture, vUv);
        
                if(color.a != 0.) {
                    fragColor = vec4(gl_FragCoord.xy, 0.0, 1.0);
                } else {
                    fragColor = vec4(0.0);
                }
            }
        `,
	});
}
