import * as THREE from 'three';

//https://en.wikipedia.org/wiki/Bilateral_filter
export default function bilateral() {
    return new THREE.ShaderMaterial({
        uniforms: {
            inputTexture: { value: null },
            resolution: { value: null },
            sigmaSpatial: { value: null }, 
            sigmaRange: { value: null },   
            radius: { value: null },     
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
            uniform vec2 resolution;
            uniform float sigmaSpatial;
            uniform float sigmaRange;
            uniform int radius;

            // Bilateral weight = exp( -(|p-q|^2 / 2σ_s^2 + |I(p)-I(q)|^2 / 2σ_r^2 ) )

            float weight(vec2 spatialOffset, vec3 neighbor, vec3 center) {
                float spatialDist2 = dot(spatialOffset, spatialOffset);
                float rangeDist2   = dot(neighbor - center, neighbor - center);
                float w = exp(-(spatialDist2 / (2.0 * sigmaSpatial * sigmaSpatial)
                              + rangeDist2   / (2.0 * sigmaRange  * sigmaRange)));
                return w;
            }

            void main() {
                vec4 center = texture2D(inputTexture, vUv);

                if(center.a != 0.0) {
                    gl_FragColor = center;
                    return;
                }

                float sumW = 0.0;
                vec3 sumC = vec3(0.0);

                for (int j = -radius; j <= radius; ++j) {
                    for (int i = -radius; i <= radius; ++i) {
                        vec2 offset = vec2(float(i), float(j));
                        vec2 uv = vUv + offset / resolution;
                        vec3 neighbor = texture2D(inputTexture, uv).rgb;

                        float w = weight(offset, neighbor, center.rgb);
                        sumW += w;
                        sumC += neighbor * w;
                    }
                }

                vec3 filtered = sumC / sumW;
                gl_FragColor = vec4(filtered, 1.0);
            }
        `
    });
}
