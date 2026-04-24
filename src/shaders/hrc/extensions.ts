

import * as THREE from "three";

export function hrcv2_extend() {
    return new THREE.ShaderMaterial({
        uniforms: {
            cascade: { value: null },
            frustum: { value: null },
            rays: { value: null },
            rsize: { value:null },
            opt: { value:null },
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

            out vec4 fragColor;

            in vec2 vUv;
            uniform int cascade;
            uniform int frustum;
            uniform sampler2D rays;
            uniform vec2 rsize;
            uniform int opt;

            struct Light {
                vec3 rad;
                float tran;
            };

            Light extend(int k1, int k2, int plane, vec2 probe, ivec2 coord) {
                //when 2k is even k1 and k2 are the same thing
                //when 2k is odd k1 is k2 = k1 + 1 or k1 = k2 + 1 depending on  F- or F+

                int twoP = 1 << (cascade - 1);
                int prev = twoP + 1;

                vec2 loc = vec2(plane * 2 * prev + k1, coord.y) + 0.5;
                loc /= rsize;

                vec4 s = texture(rays, loc);
                vec3 rad = s.rgb;
                float tran = s.a;

                ivec2 dir = ivec2(twoP, 2 * k1 - twoP);
                vec2 tnvk = probe + vec2(dir);

                vec2 loc2 = vec2((plane * 2 + 1) * prev + k2, floor(tnvk.y) / float(opt)) + 0.5;
                loc2 /= rsize; //can be out of bounds

                Light l;

                if(floor(loc2) != vec2(0.0)) {
                    l.rad = rad;
                    l.tran = 1.0;
                    return l;
                }

                vec4 su = texture(rays, loc2);
                vec3 radTnvk = su.rgb;
                float tranTnvk = su.a;

                l.rad = rad + (tran * radTnvk);
                l.tran = tran * tranTnvk;

                return l;
            }


            void main() {
                ivec2 coord = ivec2(gl_FragCoord.xy);

                int twoN = 1 << cascade;

                int count = twoN + 1;

                int plane = coord.x / count;
                int ind = coord.x % count;

                vec2 probe = vec2(plane * twoN, coord.y * opt) + 0.5;

                //if ind is even we only need rayLower
                int rayLower = ind / 2;
                int rayUpper = (ind % 2 == 0) ? rayLower : rayLower + 1;

                Light l = extend(rayLower, rayUpper, plane, probe, coord);
                vec3 radOut = l.rad;
                float tranOut = l.tran;

                if(ind % 2 == 1) {
                    Light u = extend(rayUpper, rayLower, plane, probe, coord);
                    radOut = (l.rad + u.rad) / 2.0;
                    tranOut = (l.tran + u.tran) / 2.0;
                }

                fragColor = vec4(radOut, tranOut);
            }

        `,
    });
}
