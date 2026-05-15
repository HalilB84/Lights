import * as THREE from "three";

export function sample_video() {
    return new THREE.ShaderMaterial({
        uniforms: {
            resolution: { value: null },
            videoTexture: { value: null },
            init: { value: null },
            time: { value: null },
        },
        glslVersion: THREE.GLSL3,
        vertexShader: `
            out vec3 vWorldPosition;

            void main() {
                vWorldPosition = (instanceMatrix * vec4(position, 1.0)).rgb;
                gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            precision highp float;
            in vec3 vWorldPosition;
            uniform vec2 resolution;
            uniform sampler2D videoTexture;
            uniform bool init;
            uniform float time;

            out vec4 fragColor;

            void main() {
                vec2 uv = (vWorldPosition.xy + (resolution / 2.0)) / resolution;
                if(init) {
                    fragColor = vec4(vec3(1.0), 30.0);
                }
                else {
                    fragColor = vec4(texture(videoTexture, uv).rgb, 30.0);
                }
            }
        `,
    });
}
