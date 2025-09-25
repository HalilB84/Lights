import * as THREE from 'three';

export default function upscale(){
    return new THREE.ShaderMaterial({
        uniforms: {
            source: { value: null }
        },
        vertexShader: ` 
            varying vec2 vUv;
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: ` // this is a simple upscaler shader, because I don't know how to make a low res texture appear full screen
            precision highp float;
            varying vec2 vUv;
            uniform sampler2D source;
            void main() {
                gl_FragColor = texture2D(source, vUv);
            }
        `
    });
}
