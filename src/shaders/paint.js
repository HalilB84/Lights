import * as THREE from 'three';

export default function paint(){
    return new THREE.ShaderMaterial({

        uniforms: {
            prevTexture: { value: null },
            mouse: { value: null },
            resolution: { value: null }
        },
        
        vertexShader: ` 
            //standard vertex shader for the plane, realistically we dont need this but I didnt create a camera for no reason 
            varying vec2 vUv;
            void main() { 
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,

        fragmentShader: `
            precision highp float;
            varying vec2 vUv; //interpolated coordinates coming from the vertex shader between 0 and 1, one u is 1/width and one v is 1/height per pixel, and as far as I understand, when you access UV in a fragment it gives the interpolated value in the center of that fragment. 
            uniform sampler2D prevTexture;
            uniform vec2 mouse;   
            uniform vec2 resolution;
                
            void main() { 
                // This is the shader that paints and accumates the color to the texture, used it when I was looking at the tutorial but now its just overriden by the canvas texture, 
                // I am keeping it here because right now it shows a 10px circle where the mouse is which is fun. 
        
                vec4 color = texture2D(prevTexture, vUv).rgba;
            
                vec2 uvPx = gl_FragCoord.xy; //gives the pixel coordinate of the framgent, well kinda, it gives the center of the fragment
                vec2 mousePx = mouse;
        
                //if(gl_FragCoord.xy - vec2(0.5) == floor(vUv * resolution)) {
                    //color = vec4(vUv.x, vUv.y, 0.5, 1.);
                //}
        
                float dist = length(uvPx - mousePx);
        
                float brushRadius = 10.0; //brush radius in pixels
                if(dist < brushRadius) {
                    color = vec4(vUv.x, vUv.y, 0.5, 1.);
                }
        
                gl_FragColor = color;
            }
        `
    });
}