import * as THREE from 'three';

export default function distance(){
    return new THREE.ShaderMaterial({
        uniforms: {
            inputTexture: { value: null },
            resolution: { value: null }
        },
        vertexShader: ` 
            varying vec2 vUv;
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec2 vUv;
            uniform sampler2D inputTexture;
            uniform vec2 resolution;

            void main() { 
                vec2 nearestSeed = texture(inputTexture, vUv).xy; 

                vec2 diff = nearestSeed - vUv;
                vec2 diff_px = vec2(diff.x * resolution.x, diff.y * resolution.y);

                float dist = length(diff_px); //tbd
                
                gl_FragColor = vec4(dist, 0., 0., 1.);
            }
        `
    });
}
