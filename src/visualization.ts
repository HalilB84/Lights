import * as THREE from "three";
import { cover } from "three/src/extras/TextureUtils.js";
import Stats from "stats-gl";
import { seed } from "./shaders/seed.ts";
import { jfa } from "./shaders/jfa.ts";
import { ray } from "./shaders/ray.ts";
import { resizer } from "./shaders/resizer.ts";
import { bilateral } from "./shaders/bilateral.ts";
import { radiancecascades_v2, radiancecascades_v3 } from "./shaders/rc/radiance_cascades_v3.ts";
import { Text } from "./playables/text.ts";
import { LRC } from "./playables/lrcplayer.ts";
import { Playable1 } from "./playables/playable1.ts";
import { Playable2 } from "./playables/playable2.ts";
import type { State } from "./state.js";

//https://www.typescriptlang.org/docs/handbook/2/classes.html
export class Visualization {
	state: State;
	renderer: THREE.WebGLRenderer;
	canvas: HTMLCanvasElement;
	stats: Stats;

	scene: THREE.Scene;
	camera: THREE.OrthographicCamera;

	lrcPlayer: LRC;
	text: Text;
	playable1: Playable1;
	playable2: Playable2;

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

	mouse = { x: 9999, y: 9999 };
	frameCount = 0;
	lastTime = 0;

	resizerMaterial: THREE.ShaderMaterial;
	seedMaterial: THREE.ShaderMaterial;
	jfaMaterial: THREE.ShaderMaterial;
	rayMaterial: THREE.ShaderMaterial;
	bilateralMaterial: THREE.ShaderMaterial;
	radiancecascadesMaterialV2: THREE.ShaderMaterial;
	radiancecascadesMaterialV3: THREE.ShaderMaterial;
	displayMaterial: THREE.MeshBasicMaterial;

	geometry: THREE.PlaneGeometry;
	mesh: THREE.Mesh;

	constructor(state: State) {
		this.state = state;

		this.renderer = new THREE.WebGLRenderer({ antialias: true }); 
		this.renderer.autoClear = false;
		this.renderer.info.autoReset = false;
		this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace; //so three js doesnt apply the correction but kinda confused on for what 
		this.renderer.setClearColor(0x848484, 0); //The clear color is completely transparent because light moves through alpha values that are exactly 0.0, to gurantee this we set the clear color ( is 1.0)

		document.body.appendChild(this.renderer.domElement);

		this.canvas = this.renderer.domElement;

		this.calculateBounds();

		this.renderer.setSize(this.width, this.height, false);
		this.renderer.setAnimationLoop(this.render.bind(this));

		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1); //this why understanding the rendering pipeling is important, even though the camera doesnt respect the aspect raitio we use the quad as a fullscreen quad fragment shader so it streching doesn't matter

		this.stats = new Stats({
			trackGPU: true,
			trackHz: false,
			trackCPT: false,
			logsPerSecond: 4,
			graphsPerSecond: 30,
			samplesLog: 40,
			samplesGraph: 10,
			precision: 2,
			horizontal: true,
			minimal: true,
			mode: 0,
		});

		document.body.appendChild(this.stats.dom);

		//playground
		this.lrcPlayer = new LRC();
		this.text = new Text(this.actualWidth, this.actualHeight, this.state.settings.textScale, this.scaleDown);
		this.playable1 = new Playable1(this.actualWidth, this.actualHeight, this.scaleDown);
		this.playable2 = new Playable2(this.actualWidth, this.actualHeight, this.scaleDown);

		this.initialize();
		this.shaders();

		this.canvas.addEventListener("mousemove", (e) => {
			//bottom left corner is 0,0 to match UV coords and is not fully matched up but its not fully because of error calc
			const rect = this.canvas.getBoundingClientRect();
			this.mouse.x = ((e.clientX - rect.left) * this.dpr) / this.scaleDown;
			this.mouse.y = ((rect.height - (e.clientY - rect.top)) * this.dpr) / this.scaleDown;
		});

		window.addEventListener("resize", () => {
			this.resize();
		});
	}

	calculateBounds() {
		this.dpr = this.state.settings.isMobile ? Math.max(window.devicePixelRatio * 0.75, 1) : window.devicePixelRatio;
		this.width = Math.floor(this.canvas.clientWidth * this.dpr);
		this.height = Math.floor(this.canvas.clientHeight * this.dpr);

		this.scaleDown = this.state.settings.isMobile ? 2 : 2;
		const initialWidth = Math.floor(this.width / this.scaleDown);
		const initialHeight = Math.floor(this.height / this.scaleDown);

		this.cascadeInterval = 1;

		const count = (w: number, h: number) => Math.ceil(Math.log((3 * Math.sqrt(w * w + h * h)) / this.cascadeInterval + 1) / Math.log(4));

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
		}

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
		this.resizerMaterial = resizer();
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
		this.rayMaterial.uniforms.frame.value = 0;

		this.bilateralMaterial = bilateral();
		this.bilateralMaterial.uniforms.sigma_d.value = 2.0;
		this.bilateralMaterial.uniforms.sigma_r.value = 0.5;
		this.bilateralMaterial.uniforms.radius.value = 2.0;

		this.radiancecascadesMaterialV2 = radiancecascades_v2();
		this.radiancecascadesMaterialV3 = radiancecascades_v3();
		this.displayMaterial = new THREE.MeshBasicMaterial();
		this.geometry = new THREE.PlaneGeometry(2, 2);
		this.mesh = new THREE.Mesh(this.geometry, this.seedMaterial);
		this.mesh.position.z = -1;
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

		this.text.resize(this.actualWidth, this.actualHeight, this.scaleDown);
		this.playable1.resize(this.actualWidth, this.actualHeight, this.scaleDown);
		this.playable2.resize(this.actualWidth, this.actualHeight, this.scaleDown);
	}

	changeFilter() { 
		this.prevCascade.dispose();
		this.curCascade.dispose();

		const nlRT = {
			minFilter: this.state.settings.bilinearFix ? THREE.NearestFilter : THREE.LinearFilter,
			magFilter: this.state.settings.bilinearFix ? THREE.NearestFilter : THREE.LinearFilter,
			type: THREE.FloatType,
		}

		this.curCascade = new THREE.WebGLRenderTarget(this.cascadeWidth, this.cascadeHeight, nlRT);
		this.prevCascade = this.curCascade.clone();
	}

	render() {
		const currentTime = performance.now();
		const delta = currentTime - this.lastTime;
		this.lastTime = currentTime;

		//ok so its messy here text calls update via the event listener, but these updates are called by frame - fix or make it better

		if (this.state.settings.mode === "playable1") {
			this.playable1.update(delta, { x: this.mouse.x - this.actualWidth / 2, y: this.mouse.y - this.actualHeight / 2 });
		} else if (this.state.settings.mode === "playable2" && this.state.video.texture) {
			this.playable2.update(this.state.video.texture);
		}

		if ((this.state.settings.twoPassOptimization && this.frameCount % 2 === 0) || !this.state.settings.twoPassOptimization) {
			if (this.state.settings.mode === "video") {
				this.mesh.material = this.resizerMaterial;
				this.resizerMaterial.uniforms.resolution.value = [this.actualWidth, this.actualHeight];
				this.resizerMaterial.uniforms.videoTexture.value = this.state.video.texture;
				this.resizerMaterial.uniforms.videoHeight.value = this.state.video.height;
				this.resizerMaterial.uniforms.videoWidth.value = this.state.video.width;
				this.resizerMaterial.uniforms.videoScale.value = this.state.video.scale;

				this.renderer.setRenderTarget(this.modelRT);
				this.renderer.clear();
				this.renderer.render(this.scene, this.camera);
				//
			} else if (this.state.settings.mode === "lyrics" && this.text.isReady) {
				this.text.mesh.material.uniforms.time.value = performance.now() * 0.001;
				this.renderer.setRenderTarget(this.modelRT);
				this.renderer.clear();
				this.renderer.render(this.text.scene, this.text.camera);
				//
			} else if (this.state.settings.mode === "playable1" && this.playable1.isReady) {
				this.renderer.setRenderTarget(this.modelRT);
				this.renderer.clear();
				this.renderer.render(this.playable1.scene, this.playable1.camera);
			} else if (this.state.settings.mode === "playable2" && this.playable2.isReady) {
				this.renderer.setRenderTarget(this.modelRT);
				this.renderer.clear();
				this.renderer.render(this.playable2.scene, this.playable2.camera);
			}

			//seed phase
			this.mesh.material = this.seedMaterial;
			this.seedMaterial.uniforms.resolution.value = [this.actualWidth, this.actualHeight];
			this.seedMaterial.uniforms.inputTexture.value = this.modelRT.texture;

			this.renderer.setRenderTarget(this.seedRT);
			this.renderer.clear();
			this.renderer.render(this.scene, this.camera);

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
			this.rayMaterial.uniforms.frame.value += 1;
			this.rayMaterial.uniforms.radianceModifier.value = this.state.settings.radiance;
			this.rayMaterial.uniforms.fixEdges.value = this.state.settings.fixEdges;

			this.renderer.setRenderTarget(this.rayColorRT);
			this.renderer.clear();
			this.renderer.render(this.scene, this.camera);
		}

		//bilateral filter phase (to smooth out noise/artifacts) - forgor that prevcascade could be linear so like there is that but im lazy
		if (!this.state.settings.enableRC || !this.state.settings.twoPassOptimization || this.frameCount % 2 === 1) {
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
		if (this.state.settings.mode === "playable1" && this.playable1.isReady) {
			this.renderer.render(this.playable1.sceneOverlay, this.playable1.cameraOverlay);
			//
		} else if (this.state.settings.mode === "lyrics" && this.text.isReady) {
			this.text.mesh.material.uniforms.time.value = performance.now() / 1000;
			this.renderer.render(this.text.sceneOverlay, this.text.cameraOverlay);
			//
		} else if (this.state.settings.mode === "video" && this.state.video.loading) {
			this.mesh.material = this.resizerMaterial;
			this.resizerMaterial.uniforms.resolution.value = [this.actualWidth, this.actualHeight];
			this.resizerMaterial.uniforms.videoTexture.value = this.state.video.texture;
			this.resizerMaterial.uniforms.videoHeight.value = this.state.video.height;
			this.resizerMaterial.uniforms.videoWidth.value = this.state.video.width;
			this.resizerMaterial.uniforms.videoScale.value = this.state.video.scale;
			this.renderer.render(this.scene, this.camera);
			//
		} else if (this.state.settings.mode === "playable2" && this.playable2.isReady) {
			this.renderer.render(this.playable2.sceneOverlay, this.playable2.cameraOverlay);
		}

		cover(this.overlayRT.texture, this.width / this.height);
		this.mesh.material = this.displayMaterial;
		this.displayMaterial.map = this.overlayRT.texture; 

		this.renderer.setRenderTarget(null);
		this.renderer.clear();
		this.renderer.render(this.scene, this.camera);

		this.frameCount = this.frameCount + 1; // % 2;

		this.stats.update();

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
