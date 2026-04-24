import * as THREE from "three";

import type { State } from "./state.js";
import { hrcv2_cones } from "./shaders/hrc/cones.js";
import { hrcv2_extend } from "./shaders/hrc/extensions.js";
import { hrcv2_trace } from "./shaders/hrc/trace.js";
import { hrcv2_sum } from "./shaders/hrc/sum.js";
import { Video } from "./playables/video.js";
import { Playable1 } from "./playables/playable1.js";
import { TextTroika } from "./playables/text.js";
import { LRC } from "./utils/lrcplayer.js";
import { Playable2 } from "./playables/playable2.js";

//https://www.typescriptlang.org/docs/handbook/2/classes.html
export class Visualization {
    state: State;
    renderer: THREE.WebGLRenderer;
    canvas: HTMLCanvasElement;

    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;

    lrcPlayer: LRC;
    video: Video;
    balls: Playable1;
    show: Playable2;
    text: TextTroika;

    width: number;
    height: number;
    dpr: number;

    fixWidth: number;
    fixHeight: number;
    ccWidth: number;
    ccHeight: number;
    opt: number;

    sceneEmiss: THREE.Texture;
    sceneAbsorp: THREE.Texture;

    modelRT: THREE.WebGLRenderTarget;

    raysW: THREE.WebGLRenderTarget[];
    raysH: THREE.WebGLRenderTarget[];

    curCone: THREE.WebGLRenderTarget[]; //0 is w 1 is h
    prevCone: THREE.WebGLRenderTarget[];

    frustums: THREE.WebGLRenderTarget[];

    final: THREE.WebGLRenderTarget; //not needed rn

    traceShader: THREE.ShaderMaterial;
    extendShader: THREE.ShaderMaterial;
    coneShader: THREE.ShaderMaterial;
    sumShader: THREE.ShaderMaterial;

    displayMaterial: THREE.MeshBasicMaterial;

    geometry: THREE.PlaneGeometry;
    mesh: THREE.Mesh;

    mouse: { x: number; y: number };
    frameCount: number;
    lastTime: number;

    constructor(state: State) {
        this.state = state;

        this.renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("canvas") as HTMLCanvasElement, antialias: true });
        this.renderer.autoClear = false;
        this.renderer.info.autoReset = false;
        this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace; //saying that trust me bro i know the colors im dealing with
        //the idea is that the colors in the fragment shader are in srgb space, rc converts the srgb color to linear(srgb?)
        //setHSL IS in srgb space if supplied the srgb colorspace options it does conversion itself however we do that manually inside the rc shader.

        //still have some doubts but I think the defalut colorspace option is because three js parses colors to be linear srgb in shaders
        //and finally at the end converts them back to srgb

        this.renderer.setClearColor(0x000000, 0);

        this.canvas = this.renderer.domElement;

        this.calculateBounds();
        this.renderer.setSize(this.width, this.height, false);

        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); //this entire thing is a full screen quad fragment shader, as long as the plane dimensions match the ortocamera bounds
        //all of the fragments in the render target will be evaluated

        this.lrcPlayer = new LRC();
        this.video = new Video(this.fixWidth, this.fixHeight, 2);
        //this.balls = new Playable1(this.fixWidth, this.fixHeight, 2);
        this.show = new Playable2(this.fixWidth, this.fixHeight, 1);
        this.text = new TextTroika(this.fixWidth, this.fixHeight, 1, 1);

        this.initialize();
        this.shaders();

        this.frameCount = 0;
        this.mouse = { x: 9999, y: 9999 };
        this.canvas.addEventListener("mousemove", (e) => {
            this.mouse.x = (e.clientX * this.dpr);
            this.mouse.y = ((this.canvas.clientHeight - e.clientY) * this.dpr);
        });

        this.renderer.setAnimationLoop(this.render.bind(this));
    }

    calculateBounds() {
        this.dpr = this.state.settings.isMobile ? Math.max(window.devicePixelRatio * 0.75, 1) : window.devicePixelRatio;
        this.width = Math.floor(this.canvas.clientWidth * this.dpr);
        this.height = Math.floor(this.canvas.clientHeight * this.dpr);

        //this needs to be adjustable
        this.fixWidth = 1024;
        this.fixHeight = 512;
        this.ccWidth = Math.ceil(Math.log2(this.fixWidth));
        this.ccHeight = Math.ceil(Math.log2(this.fixHeight));
        this.opt = 2;

    }

    initialize() {
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

        this.modelRT = new THREE.WebGLRenderTarget(this.fixWidth, this.fixHeight, nearestRT);

        this.raysW = [];
        this.raysH = [];

        for (let i = 0; i < this.ccWidth; ++i) {
            const height = this.fixHeight / this.opt;
            const width = this.fixWidth / Math.pow(2, i) * (Math.pow(2, i) + 1);
            const typ = i === 0 ? linearRT : nearestRT;
            this.raysW.push(new THREE.WebGLRenderTarget(width, height, typ));
        }

        for (let i = 0; i < this.ccHeight; ++i) {
            const height = this.fixWidth / this.opt;
            const width = this.fixHeight / Math.pow(2, i) * (Math.pow(2, i) + 1);
            const typ = i === 0 ? linearRT : nearestRT;
            this.raysH.push(new THREE.WebGLRenderTarget(width, height, typ));
        }

        this.prevCone = [];
        this.curCone = [];

        //ideally this should be linear for c1 only when c0 is merging but since textures are(should) be sampled in the center of its corresponding pixel c1..cn, i think its fine
        this.prevCone[0] = new THREE.WebGLRenderTarget(this.fixWidth, this.fixHeight / this.opt, linearRT);
        this.curCone[0] = this.prevCone[0].clone();

        this.prevCone[1] = new THREE.WebGLRenderTarget(this.fixHeight, this.fixWidth / this.opt, linearRT);
        this.curCone[1] = this.prevCone[1].clone();

        this.frustums = [];
        for (let i = 0; i < 4; i++) {
            if (i % 2 === 0) this.frustums.push(new THREE.WebGLRenderTarget(this.fixWidth, this.fixHeight / this.opt, linearRT));
            else this.frustums.push(new THREE.WebGLRenderTarget(this.fixHeight, this.fixWidth / this.opt, linearRT));
        }

        this.final = new THREE.WebGLRenderTarget(this.fixWidth, this.fixHeight, linearRT);

    }

    shaders() {
        this.traceShader = hrcv2_trace();
        this.extendShader = hrcv2_extend();
        this.coneShader = hrcv2_cones();
        this.sumShader = hrcv2_sum();

        const loader = new THREE.TextureLoader();
        this.sceneEmiss = loader.load("emission.png");
        this.sceneAbsorp = loader.load("absorption.png");
        this.sceneEmiss.minFilter = THREE.NearestFilter;
        this.sceneEmiss.magFilter = THREE.NearestFilter;
        this.sceneAbsorp.minFilter = THREE.NearestFilter;
        this.sceneAbsorp.magFilter = THREE.NearestFilter;

        this.displayMaterial = new THREE.MeshBasicMaterial();
        this.geometry = new THREE.PlaneGeometry(2, 2);
        this.mesh = new THREE.Mesh(this.geometry, this.traceShader);
        this.scene.add(this.mesh);
    }

    resize() {
        this.calculateBounds();

        //https://github.com/mrdoob/three.js/blob/dev/src/core/RenderTarget.js setSize disposes for us! love that
        this.renderer.setSize(this.width, this.height, false);

    }

    changeFilter() {

    }

    render() {
        if (Math.floor(this.canvas.clientWidth * this.dpr) !== this.width || Math.floor(this.canvas.clientHeight * this.dpr) !== this.height) {
            this.resize();
        }

        this.video.update(this.state.video.scale, this.state.video.texture, this.state.video.width, this.state.video.height);
        //this.balls.update((1 / 60) * 1000, { x: this.mouse.x - this.fixWidth / 2, y: this.mouse.y - this.fixHeight / 2 });
        this.show.update(this.state.video.texture!);
        this.text.update(null);


        this.renderer.setRenderTarget(this.modelRT);
        this.renderer.clear();
        this.renderer.render(this.show.scene, this.show.camera);

        for (let i = 0; i < 4; ++i) {

            let prev;
            let cur;
            let rays;
            let fw;
            let fh;

            if (i % 2 === 0) {
                prev = this.prevCone[0];
                cur = this.curCone[0];
                rays = this.raysW;
                fw = this.fixWidth;
                fh = this.fixHeight;
            }

            else {
                prev = this.prevCone[1];
                cur = this.curCone[1];
                rays = this.raysH;
                fw = this.fixHeight;
                fh = this.fixWidth;

            }

            //trace pass c0 only or c0...c2 as per paper
            this.mesh.material = this.traceShader;

            this.traceShader.uniforms.size.value = [fw, fh];
            this.traceShader.uniforms.cascade.value = 0;
            this.traceShader.uniforms.frustum.value = i;
            this.traceShader.uniforms.absorption.value = this.modelRT.texture;
            this.traceShader.uniforms.emissivity.value = this.modelRT.texture;
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

            for (let j = 1; j < (i % 2 === 0 ? this.ccWidth : this.ccHeight); ++j) {
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

            for (let j = (i % 2 === 0 ? this.ccWidth : this.ccHeight) - 1; j >= 0; --j) {
                this.coneShader.uniforms.size.value = [cur.width, cur.height];
                this.coneShader.uniforms.cascade.value = j;
                this.coneShader.uniforms.count.value = (i % 2 === 0 ? this.ccWidth : this.ccHeight);
                this.coneShader.uniforms.frustum.value = i;
                this.coneShader.uniforms.prev.value = prev.texture;
                this.coneShader.uniforms.rays.value = rays[j].texture;
                this.coneShader.uniforms.rsize.value = [rays[j].width, rays[j].height];
                this.coneShader.uniforms.opt.value = this.opt;


                if (j === 0) {
                    this.renderer.setRenderTarget(this.frustums[i]);
                    this.renderer.render(this.scene, this.camera);
                }

                else {
                    this.renderer.setRenderTarget(cur);
                    this.renderer.render(this.scene, this.camera);
                }

                [cur, prev] = [prev, cur];

            }
        }

        this.mesh.material = this.sumShader;
        this.sumShader.uniforms.size.value = [this.fixWidth, this.fixHeight];
        this.sumShader.uniforms.f1.value = this.frustums[0].texture;
        this.sumShader.uniforms.f2.value = this.frustums[1].texture;
        this.sumShader.uniforms.f3.value = this.frustums[2].texture;
        this.sumShader.uniforms.f4.value = this.frustums[3].texture;

        // this.renderer.setRenderTarget(this.final);
        // this.renderer.render(this.scene, this.camera);

        // this.mesh.material = this.displayMaterial;
        // this.displayMaterial.map = this.final.texture;

        const aspect = this.width / this.height;
        if (aspect >= 2.0) {
            this.mesh.scale.set(1 / aspect * 2, 1, 1);
        } else {
            this.mesh.scale.set(1, aspect / 2, 1);
        }

        //this.displayMaterial.map = this.frustums[2].texture;

        this.renderer.setRenderTarget(null);
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);

        this.renderer.render(this.show.sceneOverlay, this.show.cameraOverlay);


        this.mesh.scale.set(1, 1, 1);

        this.frameCount = this.frameCount + 1; // % 2;

        this.state.stats.update();

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
