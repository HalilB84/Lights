import * as THREE from "three";

import type { State } from "./state.js";
import { hrcv2_cones } from "./shaders/hrc/cones.js";
import { hrcv2_extend } from "./shaders/hrc/extensions.js";
import { hrcv2_trace } from "./shaders/hrc/trace.js";
import { hrcv2_sum } from "./shaders/hrc/sum.js";

//https://www.typescriptlang.org/docs/handbook/2/classes.html
export class HRC {
    state: State;
    renderer: THREE.WebGLRenderer;

    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;

    width: number;
    height: number;

    fixWidth: number;
    fixHeight: number;
    ccWidth: number;
    ccHeight: number;
    opt: number;

    modelRT: THREE.WebGLRenderTarget;
    skyData: THREE.DataTexture;

    raysW: THREE.WebGLRenderTarget[];
    raysH: THREE.WebGLRenderTarget[];

    conesW: THREE.WebGLRenderTarget[];
    conesH: THREE.WebGLRenderTarget[];

    frustums: THREE.WebGLRenderTarget[];

    final: THREE.WebGLRenderTarget; //not needed rn

    traceShader: THREE.ShaderMaterial;
    extendShader: THREE.ShaderMaterial;
    coneShader: THREE.ShaderMaterial;
    sumShader: THREE.ShaderMaterial;

    displayMaterial: THREE.MeshBasicMaterial;

    geometry: THREE.PlaneGeometry;
    mesh: THREE.Mesh;

    frameCount: number;

    constructor(state: State) {
        this.state = state;

        this.renderer = new THREE.WebGLRenderer({ canvas: this.state.canvas, antialias: true });
        this.renderer.autoClear = false;
        this.renderer.setClearColor(0x000000, 0); //premultiplied
        this.renderer.info.autoReset = false;
        this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
        //finally figured this out -> outputcolorspace linearsrgb changes how builtin three js materials gets converted
        //if you are running shader material (see below) applying this conversion based on the colorspace is on you
        //i incorrectly assumed that this automatically happened, which it technically does but only for builtin (like meshbasic) materials

        //so rn hrc needs to convert linear color to srgb either via three js injections or manually
        //so because of this whole thing there can be conflicts bceause im using built in material and shader materials at the same time
        //if outputspace is srgb video.texture.colorspace needs to be srgb bc mesh basic map samples srgb -> linear then output color space converts linear ->srgb BUT because now trace.ts gets linear I cant have manual srgb correction but this collides with text.ts
        //anyways current method is fine three js makes no conversions to anything eveything is assumed to be srgb going into trace.ts
        //also who knew you had to specify texture colorspace idk why i assumed the would all be srgb (CAREFUL there is a difference between a color being srgb and how webgl reads and gives it you via sampler2D)

        //https://threejs.org/manual/#en/color-management -> "Custom materials based on ShaderMaterial and RawShaderMaterial have to implement their own output color space conversion"
        //https://github.com/mrdoob/three.js/blob/dev/src/renderers/webgl/WebGLProgram.js -> shows what conversion is given to shaders
        //https://github.com/mrdoob/three.js/blob/dev/src/renderers/webgl/WebGLPrograms.js //s proves that there is no conversion in render targets
        //also one more thing I learned (line 259 in above file -> material.transparent === false && material.blending === NormalBlending)
        //this was why I thought transparent = true was needed to alpha values to work, but actually you can just have blending rules diff to make them work
        //a lot of the problems can be just solved by not relying on built in mats tbh but its ok. the more we know

        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); //this entire thing is a full screen quad fragment shader, as long as the plane dimensions match the ortocamera bounds
        //all of the fragments in the render target will be evaluated

        this.calculateBounds();
        this.targets();
        this.shaders();
        this.sky("none");

        this.renderer.setSize(this.width, this.height, false);
        this.renderer.setAnimationLoop(this.render.bind(this));

        this.frameCount = 0;
    }

    calculateBounds() {
        this.width = Math.floor(this.state.canvas.clientWidth * this.state.dpr);
        this.height = Math.floor(this.state.canvas.clientHeight * this.state.dpr);

        //this needs to be adjustable, has to be even
        this.fixWidth = this.state.settings.probeCount;

        this.fixHeight = Math.floor(this.fixWidth / (this.width / this.height));
        if (this.fixHeight % 2 === 1) this.fixHeight += 1;

        if (this.height > this.width) {
            this.fixHeight = this.state.settings.probeCount;
            this.fixWidth = Math.floor(this.fixHeight / (this.height / this.width));
            if (this.fixWidth % 2 === 1) this.fixWidth += 1;
        }

        this.ccWidth = Math.ceil(Math.log2(this.fixWidth));
        this.ccHeight = Math.ceil(Math.log2(this.fixHeight));
        this.opt = 2;
    }

    targets() {
        const nearestRT = {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            type: THREE.HalfFloatType,
        };

        const linearRT = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            type: THREE.HalfFloatType,
        };

        this.modelRT?.dispose();
        this.modelRT = new THREE.WebGLRenderTarget(this.fixWidth, this.fixHeight, nearestRT);

        this.raysW?.forEach((target) => {
            target.dispose();
        });

        this.raysH?.forEach((target) => {
            target.dispose();
        });

        this.raysW = [];
        this.raysH = [];

        //linear in c0 cuz when opt = 2, c1 needs interpolation when extending the second half the ray + c0 needs interp ray data during merge
        for (let i = 0; i < this.ccWidth; ++i) {
            const height = this.fixHeight / this.opt;
            const width = Math.ceil(this.fixWidth / Math.pow(2, i)) * (Math.pow(2, i) + 1);

            const typ = i === 0 ? linearRT : nearestRT;
            this.raysW.push(new THREE.WebGLRenderTarget(width, height, typ));
        }

        for (let i = 0; i < this.ccHeight; ++i) {
            const height = this.fixWidth / this.opt;
            const width = Math.ceil(this.fixHeight / Math.pow(2, i)) * (Math.pow(2, i) + 1);

            const typ = i === 0 ? linearRT : nearestRT;
            this.raysH.push(new THREE.WebGLRenderTarget(width, height, typ));
        }

        this.conesW?.forEach((target) => {
            target.dispose();
        });

        this.conesH?.forEach((target) => {
            target.dispose();
        });

        this.conesW = [];
        this.conesH = [];

        //linear in c1 because when opt = 2, c0 needs interpolation when reading upperCone values
        for (let i = 1; i < this.ccWidth; ++i) {
            const height = this.fixHeight / this.opt;
            const width = Math.ceil(this.fixWidth / Math.pow(2, i)) * Math.pow(2, i);

            const typ = i === 1 ? linearRT : nearestRT;

            this.conesW.push(new THREE.WebGLRenderTarget(width, height, typ));
        }

        for (let i = 1; i < this.ccHeight; ++i) {
            const height = this.fixWidth / this.opt;
            const width = Math.ceil(this.fixHeight / Math.pow(2, i)) * Math.pow(2, i);
            const typ = i === 1 ? linearRT : nearestRT;

            this.conesH.push(new THREE.WebGLRenderTarget(width, height, typ));
        }

        this.frustums?.forEach((target) => {
            target.dispose();
        });

        this.frustums = [];
        for (let i = 0; i < 4; ++i) {
            if (i % 2 === 0) this.frustums.push(new THREE.WebGLRenderTarget(this.fixWidth, this.fixHeight / this.opt, linearRT));
            else this.frustums.push(new THREE.WebGLRenderTarget(this.fixHeight, this.fixWidth / this.opt, linearRT));
        }
        // this.final = new THREE.WebGLRenderTarget(this.fixWidth, this.fixHeight, linearRT);
    }

    shaders() {
        this.traceShader = hrcv2_trace();
        this.extendShader = hrcv2_extend();
        this.coneShader = hrcv2_cones();
        this.sumShader = hrcv2_sum();

        this.displayMaterial = new THREE.MeshBasicMaterial();
        this.geometry = new THREE.PlaneGeometry(2, 2);
        this.mesh = new THREE.Mesh(this.geometry, this.traceShader);
        this.scene.add(this.mesh);
    }

    sky(mode: string) {
        let sky = new Float32Array(200 * 4); //each texel covers an angle of 2pi/num
        //new Float16Array()
        const hsl = new THREE.Color();

        for (let i = 0; i < 200; ++i) {
            hsl.set(0.0, 0.0, 0.0);
            if (i <= 50 && mode === "rainbow") hsl.setHSL(i / 50, 1.0, 0.5, THREE.SRGBColorSpace);

            sky[i * 4] = hsl.r;
            sky[i * 4 + 1] = hsl.g;
            sky[i * 4 + 2] = hsl.b;
            sky[i * 4 + 3] = 1;
        }

        this.skyData?.dispose();
        this.skyData = new THREE.DataTexture(sky, 200, 1, THREE.RGBAFormat, THREE.FloatType);
        this.skyData.needsUpdate = true;
    }

    resize() {
        this.calculateBounds();
        this.targets();
        this.state.active.resize(this.fixWidth, this.fixHeight);

        //https://github.com/mrdoob/three.js/blob/dev/src/core/RenderTarget.js setSize disposes for us! love that
        this.renderer.setSize(this.width, this.height, false);
    }

    //4 * (ceil(log2(num)) * 2) + 2 passes every frame (82 for 1024, 90 for 2048)
    //1 + 2 * ccWidth - 1 + 2 * ccHeight - 1 + 4 textures in total
    render() {
        if (Math.floor(this.state.canvas.clientWidth * this.state.dpr) !== this.width || Math.floor(this.state.canvas.clientHeight * this.state.dpr) !== this.height) {
            this.resize();
        }

        this.state.update();
        this.state.active.volumetrics(false);

        this.renderer.setRenderTarget(this.modelRT);
        this.renderer.clear();
        this.renderer.render(this.state.active.scene, this.state.active.camera);

        for (let i = 0; i < 4; ++i) {
            let num;
            let cones;
            let rays;
            let fw;
            let fh;

            if (i % 2 === 0) {
                num = this.ccWidth;
                cones = this.conesW;
                rays = this.raysW;
                fw = this.fixWidth;
                fh = this.fixHeight;
            } else {
                num = this.ccHeight;
                cones = this.conesH;
                rays = this.raysH;
                fw = this.fixHeight;
                fh = this.fixWidth;
            }

            //trace pass c0 only or c0...c2 as per paper
            this.mesh.material = this.traceShader;

            this.traceShader.uniforms.size.value = [fw, fh];
            this.traceShader.uniforms.cascade.value = 0;
            this.traceShader.uniforms.frustum.value = i;
            this.traceShader.uniforms.emissAbsrp.value = this.modelRT.texture;
            this.traceShader.uniforms.opt.value = this.opt;

            this.renderer.setRenderTarget(rays[0]);
            this.renderer.render(this.scene, this.camera);

            /*for(let j = 0; j <= 2; ++j) { //remember to start from c3 below. Also this kills performance compared to c0 or c1starting
                this.traceShader.uniforms.cascade.value = j;

                this.renderer.setRenderTarget(rays[j]);
                this.renderer.render(this.scene, this.camera);
            }*/

            //extension pass
            this.mesh.material = this.extendShader;

            for (let j = 1; j < num; ++j) {
                this.extendShader.uniforms.cascade.value = j;
                this.extendShader.uniforms.frustum.value = i;
                this.extendShader.uniforms.rays.value = rays[j - 1].texture;
                this.extendShader.uniforms.rsize.value = [rays[j - 1].width, rays[j - 1].height];
                this.extendShader.uniforms.opt.value = this.opt;

                this.renderer.setRenderTarget(rays[j]);
                this.renderer.render(this.scene, this.camera);
            }

            //cone pass
            this.mesh.material = this.coneShader;

            for (let j = num - 1; j >= 0; --j) {
                let width = j === num - 1 ? 1 : cones[j].width;
                let height = j === num - 1 ? 1 : cones[j].height;
                let tex = j === num - 1 ? null : cones[j].texture;

                this.coneShader.uniforms.size.value = [width, height];
                this.coneShader.uniforms.cascade.value = j;
                this.coneShader.uniforms.count.value = num;
                this.coneShader.uniforms.frustum.value = i;
                this.coneShader.uniforms.prev.value = tex;
                this.coneShader.uniforms.rays.value = rays[j].texture;
                this.coneShader.uniforms.rsize.value = [rays[j].width, rays[j].height];
                this.coneShader.uniforms.sky.value = this.skyData;
                this.coneShader.uniforms.opt.value = this.opt;

                this.renderer.setRenderTarget(j === 0 ? this.frustums[i] : cones[j - 1]);
                this.renderer.render(this.scene, this.camera);
            }
        }

        this.mesh.material = this.sumShader;
        this.sumShader.uniforms.multiplier.value = this.state.settings.radiance;
        this.sumShader.uniforms.size.value = [this.fixWidth, this.fixHeight];
        this.sumShader.uniforms.f1.value = this.frustums[0].texture;
        this.sumShader.uniforms.f2.value = this.frustums[1].texture;
        this.sumShader.uniforms.f3.value = this.frustums[2].texture;
        this.sumShader.uniforms.f4.value = this.frustums[3].texture;

        //this.renderer.setRenderTarget(this.final);
        //this.renderer.render(this.scene, this.camera);

        //this.mesh.material = this.displayMaterial;
        //this.displayMaterial.map = this.final.texture;

        //this.displayMaterial.map = this.frustums[0].texture;

        this.renderer.setRenderTarget(null);
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);

        //dont render overlay on volumetrics
        this.state.active.volumetrics(true);
        this.renderer.render(this.state.active.volScene, this.state.active.camera);

        this.frameCount = this.frameCount + 1; // % 2;

        this.state.stats.update();

        const fps = this.state.stats.getData().fps;
        const ms = (1000 / fps).toFixed(1);

        document.getElementById("fps")!.textContent = fps + " (" + ms + "ms)";

        //https://github.com/mrdoob/three.js/blob/dev/src/renderers/webgl/WebGLInfo.js
        /*if (this.frameCount % 100 === 1) {
            console.clear();
            console.log("geom", this.renderer.info.memory.geometries);
            console.log("tex", this.renderer.info.memory.textures);
            console.log("calls:", this.renderer.info.render.calls); //meshes in all scene renders
            console.log("triangles", this.renderer.info.render.triangles); //total triangles in all scene renders
        }*/

        this.renderer.info.reset();
    }
}
