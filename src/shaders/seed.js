import * as THREE from "three";

export default function seed() {
	return new THREE.ShaderMaterial({
		uniforms: {
			prevTexture: { value: null },
			mouse: { value: null },
			resolution: { value: null },
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
            uniform sampler2D prevTexture;
            uniform vec2 mouse;   
            uniform vec2 resolution;
                
            void main() {
                //this is the shader that converts the input texture to a seed texture
                //to calculate the nearest seed in the jfa phase, we need to know the location of the seed in the input texture
                //so we are storing the coordinates in a texture, this creates a nice looking gradient 

                vec4 color = texture2D(prevTexture, vUv);
        
                if(color.a != 0.) {
                    gl_FragColor = vec4(vUv.x, vUv.y, gl_FragCoord.x, gl_FragCoord.y);
                } else {
                    gl_FragColor = vec4(0.0);
                }
            }
        `,
	});
}
