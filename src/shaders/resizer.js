import * as THREE from "three";

export default function resizer() {
	return new THREE.ShaderMaterial({
		uniforms: {
			videoTexture: { value: null },
			resolution: { value: null },
			videoHeight: { value: null },
			videoWidth: { value: null },
			videoScale: { value: null },
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
            uniform sampler2D videoTexture;
            uniform vec2 resolution;
            uniform float videoHeight;
            uniform float videoWidth; 
            uniform float videoScale;
            
            out vec4 fragColor;

            void main() {

                float originalAspect = videoWidth / videoHeight;
                float jfaAspect = resolution.x / resolution.y;

                vec2 mul = vec2(videoScale); // think about this as how much uv space we are covering
                if (originalAspect >= jfaAspect) {
                    mul.y *= jfaAspect / originalAspect; //as a future note to me, we mul by jfaaspect so 1 u matches 1 v, then we can divide by the original aspect
                } else {
                    mul.x *= originalAspect / jfaAspect;  
                }

                vec2 offset = 0.5 * (1.0 - mul); 

                vec2 newUv = (vUv - offset) / mul;

                if (newUv.x < 0.0 || newUv.x > 1.0 || newUv.y < 0.0 || newUv.y > 1.0) {
                    discard;
                }

                fragColor = texture(videoTexture, newUv);
            }
        `,
	});
}
