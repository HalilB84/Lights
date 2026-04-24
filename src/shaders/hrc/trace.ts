import * as THREE from "three";

//https://threejs.org/examples/?q=rendertar#webgl_multiple_rendertargets
//above is only needed for full transmittance

export function hrcv2_trace() {
    return new THREE.ShaderMaterial({
        uniforms: {
            size: { value: null },
            cascade: { value: null },
            frustum: { value: null },
            absorption: { value: null },
            emissivity: { value: null },
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

            out vec4 fragColor;

            in vec2 vUv;
            uniform vec2 size;
            uniform int cascade;
            uniform int frustum;
            uniform sampler2D absorption;
            uniform sampler2D emissivity;
            uniform int opt;

            struct Light {
                vec3 rad;
                float tran;
            };

            Light DDA(vec2 probe, vec2 dir) {
                Light l;
                l.rad = vec3(0.0);
                l.tran = 1.0;

                vec2 sgn = sign(dir);
                vec2 base = floor(probe);

                vec2 dist = vec2(sqrt(1.0 + (dir.y / dir.x) * (dir.y / dir.x)),
                                 sqrt(1.0 + (dir.x / dir.y) * (dir.x / dir.y)));

                vec2 frac = fract(probe);
                vec2 ray;

                ray.x = (dir.x < 0.0) ? (frac.x * dist.x) : ((1.0 - frac.x) * dist.x);
                ray.y = (dir.y < 0.0) ? (frac.y * dist.y) : ((1.0 - frac.y) * dist.y);

                float cur = 0.0;
                float mx = length(dir);

                for(int i = 0; i < 2000; ++i) {
                    if(cur >= mx) break;
                    float next = min(ray.x, ray.y);
                    float step = min(next, mx) - cur;
                    cur = next;

                    vec2 c = (base + vec2(0.5)) / size;

                    if(floor(c) != vec2(0.0)) break;

                    //flipping idea from yaazarai's but without flipping
                    vec2 rotate = vec2[](
                        c,
                        vec2(1.0 - c.y, c.x),
                        1.0 - c,
                        vec2(c.y, 1.0 - c.x)
                    )[frustum];

                    //ok so this part is a little confusing, first of rn absortion values are between 0 to 1 but absrp 1 gives tran = 0.24 at max step length so it can be bigger?
                    vec3 emiss = pow( texture(emissivity, rotate).rgb, vec3(2.2) );
                    float absrp = pow( texture(absorption, rotate).a, 2.2 );

                    //way to think about this is if absrp is 0.0 then transmittance is 1.0 meaning all light passes through and emits none
                    //if absrp going to infinity then transmittance is going to 0. If absrp inf then only emit, anywhere in between means you emit some and let some
                    //but also eq 4 on the paper comes out to be divided by absrp but we don't do that?

                    //what I dont understand is, if absrp 0.0 lets all the light through then a light source should have infinite absrp for this to properly work?
                    if(absrp == 1.0) { //tbd
                        absrp = 50.0;
                    }

                    //whaaa? look later

                    float tran = exp(-absrp * step); //eq2
                    vec3 rad = emiss * (1.0 - tran); //eq4

                    l.rad += l.tran * rad; //eq5
                    l.tran *= tran; //eq6

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


            void main() {
                ivec2 coord = ivec2(gl_FragCoord.xy);

                int twoN = 1 << cascade;
                int count = twoN + 1;

                int plane = coord.x / count;
                int ind = coord.x % count;

                vec2 probe = vec2(plane * twoN, coord.y * opt) + 0.5;
                ivec2 dir = ivec2(twoN, 2 * ind - twoN);

                Light trace = DDA(probe, vec2(dir));

                fragColor = vec4(trace.rad, trace.tran);
            }

        `,
    });
}
