import * as THREE from 'three';

export default function seed(){
    return new THREE.ShaderMaterial({
        uniforms: {
            inputTexture: { value: null }
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
            uniform sampler2D inputTexture;

            void main() {
                //this is the shader that converts the input texture to a seed texture
                //to calculate the nearest seed in the jfa phase, we need to know the location of the seed in the input texture
                //so we are storing the uv coordinates in a texture, this creates a nice looking gradient
                
                vec4 color = texture(inputTexture, vUv);
                if(color.a != 0.) { // There is a seed here
                    gl_FragColor = vec4(vUv.x, vUv.y, gl_FragCoord.x + 0.5, gl_FragCoord.y + 0.5); // vUv.x and vUv.y are the uv coordinates of where this pixel is in, 0.5 is just added to give a nice color scheme
                } else {
                    gl_FragColor = vec4(0.0); //if the color is black, it means there is no seed here thus this will be one of the pixels that shoot rays
                }
            }
        `
    });
}
