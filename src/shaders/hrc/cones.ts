import * as THREE from "three";

//this can be greatly reduced in size its just explicit rn

export function hrcv2_cones() {
    return new THREE.ShaderMaterial({
        uniforms: {
            size: { value: null },
            cascade: { value: null },
            count: { value: null },
            frustum: { value: null },
            prev: { value: null },
            rays: { value: null },
            rsize: { value: null },
            sky: { value: null },
            opt: { value: null },
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
            uniform vec2 size;
            uniform int cascade;
            uniform int count;
            uniform int frustum;

            uniform sampler2D prev;
            uniform sampler2D rays;
            uniform vec2 rsize;
            uniform int opt;
            uniform sampler2D sky;

            out vec4 fragColor;

            #define TAU 6.283185

            struct Light {
                vec3 rad;
                float tran;
            };

            Light curRay(int plane, int index, vec2 probe, int count) {
                vec2 loc = vec2(plane * count + index, floor(probe.y) / float(opt)) + 0.5;
                loc /= rsize;

                Light l;

                if(floor(loc) != vec2(0.0)) {
                    //sky is not contant emission everywhere its infinitely far away
                    l.rad = vec3(0.0);
                    l.tran = 1.0;
                    return l;
                }

                vec4 s = texture(rays, loc);
                l.rad = s.rgb;
                l.tran = s.a;

                return l;
            }

            vec3 upperCone(vec2 probe, int index, float top, float bottom) {

                vec2 pos = vec2(probe.x + float(index), floor(probe.y) / float(opt) + 0.5) / size;
                if(floor(pos) == vec2(0.0)) return texture(prev, pos).rgb;

                //atp sample sky, get corresponding weight for the upper cone
                //our dir is going to be the middle of the cone

                float angle = (top + bottom) / 2.0; //this is fine because consecutive rays in c1 and above never jump quadrants

                if(angle < 0.0) angle += TAU; //cvrt -pi..0 to pi..2pi
                angle += 1.5708 * float(frustum);
                angle = mod(angle, TAU);
                angle = angle / TAU;

                vec4 ss = texture(sky, vec2(angle, 0.5)); //linear
                return ss.rgb * (top - bottom);
            }

            void main() {
                ivec2 coord = ivec2(gl_FragCoord.xy);

                int twoN = 1 << cascade;
                int twoN1 = twoN * 2;
                int count = twoN + 1;

                int plane = coord.x / twoN;
                int index = coord.x % twoN;

                vec2 probe = vec2(plane * twoN, coord.y * opt) + 0.5;

                int even = plane % 2 == 0 ? 2 : 1;

                ivec2 downRay = ivec2(twoN, 2 * index - twoN);
                ivec2 upRay = ivec2(twoN, 2 * (index + 1) - twoN);

                int downCone = index * 2;
                int upCone = index * 2 + 1;

                //A_n+1(j) = ang(v_n+1(j + 1/2)) - ang(v_n+1(j - 1/2)) eq 13 there is a little switch up between the paper and integer indexes here
                float one = atan(float(2 * downCone - twoN1), float(twoN1));
                float two = atan(float(2 * upCone - twoN1), float(twoN1));
                float three = atan(float(2 * (upCone + 1) - twoN1), float(twoN1));

                float downWeight = two - one;
                float upWeight = three - two;

                vec3 downVal = upperCone(probe + vec2(even * downRay), downCone, two, one);
                vec3 upVal = upperCone(probe + vec2(even * upRay), upCone, three, two);

                Light dTrace = curRay(plane, index, probe, count);
                Light uTrace = curRay(plane, index + 1, probe, count);

                vec3 radDown = downWeight * dTrace.rad + dTrace.tran * downVal;
                vec3 radUp = upWeight * uTrace.rad + uTrace.tran * upVal;

                if(even == 2) {

                    Light dTraceNext = curRay(plane + 1, index,  probe + vec2(downRay), count);
                    Light uTraceNext = curRay(plane + 1, index + 1, probe + vec2(upRay), count);

                    vec3 dRad = dTrace.rad + (dTrace.tran * dTraceNext.rad);
                    float dTran = dTrace.tran * dTraceNext.tran;

                    vec3 uRad = uTrace.rad + (uTrace.tran * uTraceNext.rad);
                    float uTran = uTrace.tran * uTraceNext.tran;

                    radDown = dRad * downWeight + dTran * downVal;
                    radUp = uRad * upWeight + uTran * upVal;

                    vec3 nearDown = upperCone(probe, downCone, 0.0, 0.0);
                    vec3 nearUp = upperCone(probe, upCone, 0.0, 0.0);

                    radDown = (radDown + nearDown) / 2.0;
                    radUp = (radUp + nearUp) / 2.0;
                }

                fragColor = vec4(radDown + radUp, 1.0);
            }

        `,
    });
}
