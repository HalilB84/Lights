import * as THREE from "three";
import { cover } from "three/src/extras/TextureUtils.js";
import { seed } from "./shaders/rc/seed.ts";
import { jfa } from "./shaders/rc/jfa.ts";
import { ray } from "./shaders/utils/ray.ts";
import { bilateral } from "./shaders/utils/bilateral.ts";
import { radiancecascades_v2, radiancecascades_v3 } from "./shaders/rc/radiance_cascades_v3.ts";
import type { State } from "./state.js";

//old setup for RC not used anymore

//https://www.typescriptlang.org/docs/handbook/2/classes.html
export class RC {
    state: State;
    renderer: THREE.WebGLRenderer;
    canvas: HTMLCanvasElement;

    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;

    width: number;
    height: number;
    dpr: number;
    scaleDown: number;

    actualWidth: number;
    actualHeight: number;

    cascadeInterval: number;
    probeSpacing: number;
    cascadeCount: number;
    cascadeWidth: number;
    cascadeHeight: number;

    modelRT: THREE.WebGLRenderTarget;
    seedRT: THREE.WebGLRenderTarget;
    curJFA: THREE.WebGLRenderTarget;
    prevJFA: THREE.WebGLRenderTarget;
    rayColorRT: THREE.WebGLRenderTarget;
    bilateralRT: THREE.WebGLRenderTarget;
    curCascade: THREE.WebGLRenderTarget;
    prevCascade: THREE.WebGLRenderTarget;
    overlayRT: THREE.WebGLRenderTarget;

    seedMaterial: THREE.ShaderMaterial;
    jfaMaterial: THREE.ShaderMaterial;
    rayMaterial: THREE.ShaderMaterial;
    bilateralMaterial: THREE.ShaderMaterial;
    radiancecascadesMaterialV2: THREE.ShaderMaterial;
    radiancecascadesMaterialV3: THREE.ShaderMaterial;
    displayMaterial: THREE.MeshBasicMaterial;

    geometry: THREE.PlaneGeometry;
    mesh: THREE.Mesh;

    mouse: { x: number; y: number };
    frameCount: number;

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

        this.renderer.setClearColor(0x848484, 0);

        this.canvas = this.renderer.domElement;

        this.calculateBounds();
        this.renderer.setSize(this.width, this.height, false);

        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); //this why understanding the rendering pipeline is important, even though the camera doesnt respect the aspect ratio we use the quad as a fullscreen quad fragment shader so it streching doesn't matter

        this.initialize();
        this.shaders();

        this.frameCount = 0;
        this.mouse = { x: 9999, y: 9999 };
        this.canvas.addEventListener("mousemove", (e) => {
            this.mouse.x = (e.clientX * this.dpr) / this.scaleDown;
            this.mouse.y = ((this.canvas.clientHeight - e.clientY) * this.dpr) / this.scaleDown;
        });

        this.renderer.setAnimationLoop(this.render.bind(this));
    }

    calculateBounds() {
        this.dpr = this.state.settings.isMobile ? Math.max(window.devicePixelRatio * 0.75, 1) : window.devicePixelRatio;
        this.width = Math.floor(this.canvas.clientWidth * this.dpr);
        this.height = Math.floor(this.canvas.clientHeight * this.dpr);

        this.scaleDown = this.state.settings.isMobile ? 2 : 2;
        const initialWidth = Math.floor(this.width / this.scaleDown);
        const initialHeight = Math.floor(this.height / this.scaleDown);

        this.cascadeInterval = 1;

        const count = (w: number, h: number) => Math.ceil(Math.log((3 * Math.hypot(w, h)) / this.cascadeInterval + 1) / Math.log(4));

        const errorRate = Math.pow(2.0, count(initialWidth, initialHeight) - 1);
        const errorX = Math.ceil(initialWidth / errorRate);
        const errorY = Math.ceil(initialHeight / errorRate);
        this.actualWidth = errorX * errorRate;
        this.actualHeight = errorY * errorRate;

        this.cascadeCount = count(this.actualWidth, this.actualHeight);

        // console.log(this.cascadeCount);
        // console.log(this.actualWidth, this.actualHeight);
        // console.log(this.width, this.height, (this.actualWidth * this.scaleDown == this.width && this.actualHeight * this.scaleDown == this.height));

        this.probeSpacing = 1;
        this.cascadeWidth = Math.floor(this.actualWidth / this.probeSpacing);
        this.cascadeHeight = Math.floor(this.actualHeight / this.probeSpacing);
    }

    initialize() {
        const nearestRT = {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            type: THREE.FloatType,
        };

        const linearRT = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            type: THREE.FloatType,
        };

        this.modelRT = new THREE.WebGLRenderTarget(this.actualWidth, this.actualHeight, nearestRT);
        this.seedRT = this.modelRT.clone();

        this.curJFA = this.modelRT.clone();
        this.prevJFA = this.modelRT.clone();

        this.rayColorRT = this.modelRT.clone();
        this.bilateralRT = this.modelRT.clone();

        this.curCascade = new THREE.WebGLRenderTarget(this.cascadeWidth, this.cascadeHeight, linearRT);
        this.prevCascade = this.curCascade.clone();

        this.overlayRT = new THREE.WebGLRenderTarget(this.actualWidth * this.scaleDown, this.actualHeight * this.scaleDown, linearRT);
    }

    shaders() {
        this.seedMaterial = seed();
        this.jfaMaterial = jfa();
        this.rayMaterial = ray();

        const blueNoiseTexture = new THREE.TextureLoader().load("LDR_LLL1_0.png");
        blueNoiseTexture.wrapS = THREE.RepeatWrapping;
        blueNoiseTexture.wrapT = THREE.RepeatWrapping;
        blueNoiseTexture.minFilter = THREE.NearestFilter;
        blueNoiseTexture.magFilter = THREE.NearestFilter;

        this.rayMaterial.uniforms.blueNoise.value = blueNoiseTexture;
        this.rayMaterial.uniforms.rayCount.value = 24;

        this.bilateralMaterial = bilateral();
        this.bilateralMaterial.uniforms.sigma_d.value = 2.0;
        this.bilateralMaterial.uniforms.sigma_r.value = 0.5;
        this.bilateralMaterial.uniforms.radius.value = 2.0;

        this.radiancecascadesMaterialV2 = radiancecascades_v2();
        this.radiancecascadesMaterialV3 = radiancecascades_v3();
        this.displayMaterial = new THREE.MeshBasicMaterial();
        this.geometry = new THREE.PlaneGeometry(2, 2);
        this.mesh = new THREE.Mesh(this.geometry, this.seedMaterial);
        this.scene.add(this.mesh);
    }

    resize() {
        this.calculateBounds();

        //https://github.com/mrdoob/three.js/blob/dev/src/core/RenderTarget.js setSize disposes for us! love that
        this.renderer.setSize(this.width, this.height, false);

        this.modelRT.setSize(this.actualWidth, this.actualHeight);
        this.seedRT.setSize(this.actualWidth, this.actualHeight);
        this.curJFA.setSize(this.actualWidth, this.actualHeight);
        this.prevJFA.setSize(this.actualWidth, this.actualHeight);
        this.rayColorRT.setSize(this.actualWidth, this.actualHeight);
        this.bilateralRT.setSize(this.actualWidth, this.actualHeight);
        this.curCascade.setSize(this.cascadeWidth, this.cascadeHeight);
        this.prevCascade.setSize(this.cascadeWidth, this.cascadeHeight);
        this.overlayRT.setSize(this.actualWidth * this.scaleDown, this.actualHeight * this.scaleDown);
    }

    changeFilter() {
        this.prevCascade.dispose();
        this.curCascade.dispose();

        const nlRT = {
            minFilter: this.state.settings.bilinearFix ? THREE.NearestFilter : THREE.LinearFilter,
            magFilter: this.state.settings.bilinearFix ? THREE.NearestFilter : THREE.LinearFilter,
            type: THREE.FloatType,
        };

        this.curCascade = new THREE.WebGLRenderTarget(this.cascadeWidth, this.cascadeHeight, nlRT);
        this.prevCascade = this.curCascade.clone();
    }

    render() {
        if (Math.floor(this.canvas.clientWidth * this.dpr) !== this.width || Math.floor(this.canvas.clientHeight * this.dpr) !== this.height) {
            this.resize();
        }

        let optimizationMode;
        if (this.state.settings.enableRC && this.state.settings.twoPassOptimization) {
            optimizationMode = this.frameCount % 2 === 0 ? 1 : 2;
        } else {
            optimizationMode = 3;
        }

        this.state.update();

        if (optimizationMode !== 2) {
            this.renderer.setRenderTarget(this.modelRT);
            this.renderer.clear();
            this.renderer.render(this.state.active.scene, this.state.active.camera);

            // this.mesh.material = this.displayMaterial;
            // this.displayMaterial.map = this.modelRT.texture;

            // this.renderer.setRenderTarget(null);
            // this.renderer.clear();
            // this.renderer.render(this.scene, this.camera);

            // return;

            //seed phase
            this.mesh.material = this.seedMaterial;
            this.seedMaterial.uniforms.resolution.value = [this.actualWidth, this.actualHeight];
            this.seedMaterial.uniforms.inputTexture.value = this.modelRT.texture;

            this.renderer.setRenderTarget(this.seedRT);
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);

            // this.mesh.material = this.displayMaterial;
            // this.displayMaterial.map = this.modelRT.texture;

            // this.renderer.setRenderTarget(null);
            // this.renderer.clear();
            // this.renderer.render(this.scene, this.camera);

            // return;

            // jfa + distance phase
            const passes = Math.ceil(Math.log2(Math.max(this.actualWidth, this.actualHeight)));
            this.mesh.material = this.jfaMaterial;
            this.jfaMaterial.uniforms.resolution.value = [this.actualWidth, this.actualHeight];

            for (let i = 0; i < passes; i++) {
                this.jfaMaterial.uniforms.inputTexture.value = i === 0 ? this.seedRT.texture : this.prevJFA.texture;
                this.jfaMaterial.uniforms.offset.value = Math.pow(2, passes - i - 1);
                this.jfaMaterial.uniforms.isLast.value = i === passes - 1;

                this.renderer.setRenderTarget(this.curJFA);
                this.renderer.clear();
                this.renderer.render(this.scene, this.camera);

                [this.curJFA, this.prevJFA] = [this.prevJFA, this.curJFA];
            }
        }

        //RC phase
        if (this.state.settings.enableRC) {
            this.mesh.material = this.state.settings.bilinearFix ? this.radiancecascadesMaterialV3 : this.radiancecascadesMaterialV2;
            const radiancecascadesMaterial = this.state.settings.bilinearFix ? this.radiancecascadesMaterialV3 : this.radiancecascadesMaterialV2;
            radiancecascadesMaterial.uniforms.sceneTexture.value = this.modelRT.texture;
            radiancecascadesMaterial.uniforms.distanceTexture.value = this.prevJFA.texture;
            radiancecascadesMaterial.uniforms.radianceModifier.value = this.state.settings.radiance;
            radiancecascadesMaterial.uniforms.distanceResolution.value = [this.actualWidth, this.actualHeight];
            radiancecascadesMaterial.uniforms.cascadeResolution.value = [this.cascadeWidth, this.cascadeHeight];
            radiancecascadesMaterial.uniforms.cascadeCount.value = this.cascadeCount;
            radiancecascadesMaterial.uniforms.probeSpacing.value = this.probeSpacing;
            radiancecascadesMaterial.uniforms.interval.value = this.cascadeInterval;
            radiancecascadesMaterial.uniforms.fixEdges.value = this.state.settings.fixEdges;
            radiancecascadesMaterial.uniforms.srgbFix.value = this.state.settings.srgbFix;

            let start = this.frameCount % 2 === 0 ? this.cascadeCount - 1 : Math.ceil((this.cascadeCount - 1) / 2) - 1;
            let end = this.frameCount % 2 === 0 ? Math.ceil((this.cascadeCount - 1) / 2) : 0;

            if (!this.state.settings.twoPassOptimization) {
                start = this.cascadeCount - 1;
                end = 0;
            }

            for (let i = start; i >= end; i--) {
                radiancecascadesMaterial.uniforms.cascadeIndex.value = i;
                radiancecascadesMaterial.uniforms.previousCascadeTexture.value = this.prevCascade.texture;

                this.renderer.setRenderTarget(this.curCascade);
                this.renderer.clear();
                this.renderer.render(this.scene, this.camera);

                [this.curCascade, this.prevCascade] = [this.prevCascade, this.curCascade];
            }
        } else {
            this.mesh.material = this.rayMaterial;
            this.rayMaterial.uniforms.sceneTexture.value = this.modelRT.texture;
            this.rayMaterial.uniforms.distanceTexture.value = this.prevJFA.texture;
            this.rayMaterial.uniforms.resolution.value = [this.actualWidth, this.actualHeight];
            this.rayMaterial.uniforms.time.value = performance.now();
            this.rayMaterial.uniforms.radianceModifier.value = this.state.settings.radiance;
            this.rayMaterial.uniforms.fixEdges.value = this.state.settings.fixEdges;
            this.rayMaterial.uniforms.srgbFix.value = this.state.settings.srgbFix;

            this.renderer.setRenderTarget(this.rayColorRT);
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);
        }

        //bilateral filter phase (to smooth out noise/artifacts) - forgor that prevcascade could be linear so like there is that but im lazy
        if (optimizationMode !== 1) {
            this.mesh.material = this.bilateralMaterial;
            this.bilateralMaterial.uniforms.inputTexture.value = this.state.settings.enableRC ? this.prevCascade.texture : this.rayColorRT.texture;
            this.bilateralMaterial.uniforms.resolution.value = [this.actualWidth, this.actualHeight];

            this.renderer.setRenderTarget(this.bilateralRT);
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera);
        }

        //because of the error calculation there will be a mismatch between the main rendering and the other resolutions.
        //to solve this everything renders into overlayRT (which is the same res as RC) and fit to cover

        this.mesh.material = this.displayMaterial;
        this.displayMaterial.map = this.bilateralRT.texture;

        this.renderer.setRenderTarget(this.overlayRT);
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);

        //overlay phase (to display text/video on full res)
        this.renderer.render(this.state.active.scene, this.state.active.camera);

        cover(this.overlayRT.texture, this.width / this.height);
        this.mesh.material = this.displayMaterial;

        this.displayMaterial.map = this.overlayRT.texture;

        this.renderer.setRenderTarget(null);
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);

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

/*

<div class="setting-row">
    <label for="fix-edges">Fix blocky edges</label>
    <input id="fix-edges" type="checkbox" />
</div>
<div class="setting-row">
    <label for="enable-rc">Enable Radiance Cascades</label>
    <input id="enable-rc" type="checkbox" />
    <img src="help.svg" />
    <span class="tooltiptext">Radiance Cascades is a global illumination technique that runs faster and doesn't have noise. Checking off this checkbox will default to shooting N random rays per pixel, however keeping it on for lighting is recommended for better performance and looks. Technical details on this can be found on Github. </span>
</div>
<div class="setting-row rc-collapse">
    <label for="2-pass-optimization">2 pass optimization</label>
    <input id="2-pass-optimization" type="checkbox" />
    <img src="help.svg" />
    <span class="tooltiptext">If performance is an issue, enable this. The cascade calculation happens in 2 passes, meaning if the overlay is 60 fps, the lighting is calculated at 30 fps. Because the overlay and the light are calculated at different speeds, there will be artifacts where the previous frame is visible for a split second.</span>
</div>
<div class="setting-row rc-collapse">
    <label for="bilinear-fix">Bilinear Fix</label>
    <input id="bilinear-fix" type="checkbox" />
    <img src="help.svg" />
    <span class="tooltiptext">Fixes the ringing artifacts in RC, but brings down performance as more rays are cast</span>
</div>
<div class="setting-row">
    <label for="srgb-fix">SRGB Fix</label>
    <input id="srgb-fix" type="checkbox" />
    <img src="help.svg" />
    <span class="tooltiptext">Lighting calculations need to happen in linear space but colors are in srgb space, this makes that conversion. The lighting effect will be there when this option is off, but it will be technically incorrect. The reason its off by default is because it makes the ringing artifacts way more visible.</span>
</div>

*/
