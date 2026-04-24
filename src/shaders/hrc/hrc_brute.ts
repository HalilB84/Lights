import * as THREE from "three";

//not part of the actual code this was just a learning exercise
//hrc but no extensions every ray is DDA traced from its probe
//you can also have non volumetric impl to raymarch an empty space with a SDF from a JFA (changes stuff a lil)

export function hrc_cones() {
    return new THREE.ShaderMaterial({
        uniforms: {
            size: { value: null },
            cascade: { value: null },
            count: { value: null },
            frustum: { value: null },
            prev: { value: null },
            absorption: { value: null },
            emissivity: { value: null },
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
            uniform sampler2D absorption;
            uniform sampler2D emissivity;

            out vec4 fragColor;
            #define LINEAR(c) vec4(pow(c.rgb, vec3(2.2)), c.a)

            struct Light {
                vec4 rad;
                vec4 tran;
            };

            Light DDA(vec2 probe, vec2 dir) {
                Light l;
                l.rad = vec4(0.0);
                l.tran = vec4(1.0);

                //DDA from probe to probe + dir where each pair of endpoints tell us the step length where emiss and absorp are from that pixels endpoint
                vec2 sgn = sign(dir);
                vec2 base = floor(probe);

                vec2 size = vec2(sqrt(1.0 + (dir.y / dir.x) * (dir.y / dir.x)),
                                 sqrt(1.0 + (dir.x / dir.y) * (dir.x / dir.y)));

                vec2 frac = fract(probe);
                vec2 ray;

                ray.x = (dir.x < 0.0) ? (frac.x * size.x) : ((1.0 - frac.x) * size.x);
                ray.y = (dir.y < 0.0) ? (frac.y * size.y) : ((1.0 - frac.y) * size.y);

                float cur = 0.0;
                float mx = length(dir);

                for(int i = 0; i < 2000; ++i) {
                    if(cur >= mx) break;
                    float next = min(ray.x, ray.y); //careful this is the actual length
                    float step = min(next, mx) - cur;
                    cur = next;

                    vec2 c = (base + vec2(0.5)) / size;

                    if(floor(c) != vec2(0.0)) break;

                    vec2 rotate = vec2[](
                        c,
                        vec2(1.0 - c.y, c.x),
                        vec2(1.0 - c.x, 1.0 - c.y),
                        vec2(c.y, 1.0 - c.x)
                    )[frustum];

                    vec4 emiss = LINEAR( texture(emissivity, rotate) );
                    vec4 absrp = LINEAR( texture(absorption, rotate) );

                    vec4 tran = exp(-absrp * step);
                    vec4 rad = emiss * (1.0 - tran); //this is not even right but im not questioning it anymore the actual eq comes out to be divided by abrsp that everyone seems to admit

                    l.rad += l.tran * rad;
                    l.tran *= tran;

                    if (ray.x < ray.y) {
                        base.x += sgn.x;
                        ray.x += size.x;
                    } else {
                        base.y += sgn.y;
                        ray.y += size.y;
                    }
                }

                return l;
            }

            vec4 upperCone(vec2 probe, int index) {
                //sample upper cascade with the upper index to offset from the upper probe
                //two edges: sample falls outside of the tex so cone becomes val 0
                //in the last cascade there are two planes in which both planes guarantee that shooting a ray from it will sample outside so vec4(0.0)

                vec2 pos = vec2(probe.x + float(index), probe.y) / size;
                if(floor(pos) != vec2(0.0)) return vec4(0.0);
                return texture(prev, pos);
            }

            void main() {
                ivec2 coord = ivec2(gl_FragCoord.xy);

                int twoN = 1 << cascade;
                int twoN1 = twoN * 2;

                //first find out which plane this cone originates from (this is only the index of the plane)
                int plane = coord.x / twoN;

                //we also need the index of the cone relative to its probe
                int index = coord.x % twoN;

                //finally we need the probe location centered on the pixel
                vec2 probe = vec2(plane * twoN,  coord.y) + 0.5;

                //if we are at an even plane since we need to merge with the next plane the rays need be 2 v_n(k)
                int even = plane % 2 == 0 ? 2 : 1;

                //v_n(k) = (2^n, 2k - 2^n) from the paper where k can be represented as as the cone index for left and one more for right
                ivec2 downRay = even * ivec2(twoN, 2 * index - twoN);
                ivec2 upRay = even * ivec2(twoN, 2 * (index + 1) - twoN);

                //the above rays are weighted according to their cones they are merging with in the upper cascade
                int downCone = index * 2;
                int upCone = index * 2 + 1;

                //A_n+1(j) = ang(v_n+1(j + 1/2)) - ang(v_n+1(j - 1/2)) eq 13 there is a little switch up between the paper and integer indexes here
                ivec2 one = ivec2(twoN1, 2 * downCone - twoN1);
                ivec2 two = ivec2(twoN1, 2 * upCone - twoN1);
                ivec2 three = ivec2(twoN1, 2 * (upCone + 1) - twoN1);

                float downWeight = atan(float(two.y), float(two.x)) - atan(float(one.y), float(one.x));
                float upWeight = atan(float(three.y), float(three.x)) - atan(float(two.y), float(two.x));

                //now for both rays trace and merge
                Light dTrace = DDA(probe, vec2(downRay));
                Light uTrace = DDA(probe, vec2(upRay));

                vec4 downVal = upperCone(probe + vec2(downRay), downCone);
                vec4 upVal = upperCone(probe + vec2(upRay), upCone);

                //merge operations again per paper merge_r no need for transmittance
                vec4 radDown = downWeight * dTrace.rad + downVal * dTrace.tran;
                vec4 radUp = upWeight * uTrace.rad + upVal * uTrace.tran;

                //at this point we have eq 14 and 17 down yay!
                //bad news is for even planes we gotta go the extra step eq 15, 16
                //the reason for this is not clear in my head rn
                if(even == 2) {
                    vec4 nearDown = upperCone(probe, downCone);
                    vec4 nearUp = upperCone(probe, upCone);
                    radDown = (radDown + nearDown) / 2.0;
                    radUp = (radUp + nearUp) / 2.0;
                }

                fragColor = radDown + radUp;
            }

        `,
    });
}
