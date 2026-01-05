import * as THREE from "three";
import Stats from "stats-gl";
import seed from "./shaders/seed.ts";
import jfa from "./shaders/jfa.ts";
import ray from "./shaders/ray.ts";
import resizer from "./shaders/resizer.ts";
import bilateral from "./shaders/bilateral.ts";
import radiancecascades from "./shaders/radiancecascades.ts";
import Text from "./playables/text.ts";
import LRC from "./playables/lrcplayer.ts";
import Playable1 from "./playables/playable1.ts";
import Playable2 from "./playables/playable2.ts";
import type State from "./state.js";

//realistically we dont even need three.js for a 2d scene but since it reduces boilerplate and provides a lot of useful functionality, we ball//we will use three.js for the sake of learning

//https://www.typescriptlang.org/docs/handbook/2/classes.html
//!'s because of strict mode
export default class Visualization {
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
	JFAscale: number;
	jfaWidth: number;
	jfaHeight: number;
	radiance_interval: number;
	radiance_cascades: number;
	render_width: number;
	render_height: number;
	radiance_linear: number;
	radiance_width: number;
	radiance_height: number;
	fullJfaWidth: number;
	fullJfaHeight: number;

	modelRT: THREE.WebGLRenderTarget;
	seedRT: THREE.WebGLRenderTarget;
	curJFA: THREE.WebGLRenderTarget;
	prevJFA: THREE.WebGLRenderTarget;
	rayColorRT: THREE.WebGLRenderTarget;
	bilateralRT: THREE.WebGLRenderTarget;
	curCascade: THREE.WebGLRenderTarget;
	prevCascade: THREE.WebGLRenderTarget;

	mouse = { x: 9999, y: 9999 };
	frameCount = 0;
	lastTime = 0;

	resizerMaterial: THREE.ShaderMaterial;
	seedMaterial: THREE.ShaderMaterial;
	jfaMaterial: THREE.ShaderMaterial;
	rayMaterial: THREE.ShaderMaterial;
	bilateralMaterial: THREE.ShaderMaterial;
	radiancecascadesMaterial: THREE.ShaderMaterial;
	displayMaterial: THREE.MeshBasicMaterial;

	geometry: THREE.PlaneGeometry;
	mesh: THREE.Mesh;

	constructor(state: State) {
		this.state = state;

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.autoClear = false;
		this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace; // <- I dont know why this works needs research
		this.renderer.setClearColor(0x848484, 0); //The clear color is completely transparent because light moves through alpha values that are exactly 0.0, to gurantee this we set the clear color (default is 1.0)
		//also since its clear the body background will be visible, since the color is just black it blends. This is bugging me though

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
		this.text = new Text(this.jfaWidth, this.jfaHeight, this.state.settings.textScale, this.fullJfaWidth, this.fullJfaHeight, this.JFAscale * this.state.settings.textScale);
		this.playable1 = new Playable1(this.jfaWidth, this.jfaHeight, this.fullJfaWidth, this.fullJfaHeight, this.JFAscale);
		this.playable2 = new Playable2(this.jfaWidth, this.jfaHeight, this.fullJfaWidth, this.fullJfaHeight, this.JFAscale);

		this.initialize();
		this.shaders();

		this.canvas.addEventListener("mousemove", (e) => {
			//bottom left corner is 0,0 to match UV coords and is not fully matched up
			const rect = this.canvas.getBoundingClientRect();
			this.mouse.x = ((e.clientX - rect.left) * this.dpr) / this.JFAscale;
			this.mouse.y = ((rect.height - (e.clientY - rect.top)) * this.dpr) / this.JFAscale;
		});

		window.addEventListener("resize", () => {
			this.resize();
		});
	}

	calculateBounds() {
		this.dpr = this.state.settings.isMobile ? Math.max(window.devicePixelRatio * 0.75, 1) : window.devicePixelRatio;
		this.width = Math.floor(this.canvas.clientWidth * this.dpr);
		this.height = Math.floor(this.canvas.clientHeight * this.dpr);

		this.JFAscale = this.state.settings.isMobile ? 2 : 2;
		this.jfaWidth = Math.floor(this.width / this.JFAscale);
		this.jfaHeight = Math.floor(this.height / this.JFAscale);

		//some differences from the original code atp idc.
		this.radiance_interval = 1; //TODO: figure out why in the original code its set to 2?

		const diagonal = Math.sqrt(this.jfaWidth * this.jfaWidth + this.jfaHeight * this.jfaHeight);

		this.radiance_cascades = Math.ceil(Math.log((3 * diagonal) / this.radiance_interval + 1) / Math.log(4));
		//console.log(diagonal);
		//console.log(this.radiance_cascades);

		const errorRate = Math.pow(2.0, this.radiance_cascades - 1);
		const errorX = Math.ceil(this.jfaWidth / errorRate);
		const errorY = Math.ceil(this.jfaHeight / errorRate);
		this.render_width = errorX * errorRate;
		this.render_height = errorY * errorRate;

		//console.log(this.render_width, this.render_height);
		//console.log(this.jfaWidth, this.jfaHeight);
		//console.log("end");

		this.radiance_linear = 1; //spacing between probes/quality control however anything other than 1 either looks bad or tanks performance
		this.radiance_width = Math.floor(this.render_width / this.radiance_linear);
		this.radiance_height = Math.floor(this.render_height / this.radiance_linear);

		this.jfaWidth = this.render_width;
		this.jfaHeight = this.render_height;

		this.fullJfaWidth = this.jfaWidth * this.JFAscale;
		this.fullJfaHeight = this.jfaHeight * this.JFAscale;
	}

	initialize() {
		const rtConfig = {
			minFilter: THREE.NearestFilter,
			magFilter: THREE.NearestFilter,
			type: THREE.FloatType,
		};

		const cascadeRTConfig = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			type: THREE.FloatType,
		};

		this.modelRT = new THREE.WebGLRenderTarget(this.jfaWidth, this.jfaHeight, rtConfig);
		this.seedRT = this.modelRT.clone();

		this.curJFA = this.modelRT.clone();
		this.prevJFA = this.modelRT.clone();

		this.rayColorRT = this.modelRT.clone();
		this.bilateralRT = this.modelRT.clone();

		this.curCascade = new THREE.WebGLRenderTarget(this.radiance_width, this.radiance_height, cascadeRTConfig);
		this.prevCascade = this.curCascade.clone();
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
		this.rayMaterial.uniforms.rayCount.value = 32;
		this.rayMaterial.uniforms.frame.value = 0;

		this.bilateralMaterial = bilateral();
		this.bilateralMaterial.uniforms.sigma_d.value = 2.0;
		this.bilateralMaterial.uniforms.sigma_r.value = 0.5;
		this.bilateralMaterial.uniforms.radius.value = 2.0;

		this.radiancecascadesMaterial = radiancecascades();
		this.displayMaterial = new THREE.MeshBasicMaterial();

		this.geometry = new THREE.PlaneGeometry(2, 2);
		this.mesh = new THREE.Mesh(this.geometry, this.seedMaterial);
		this.mesh.position.z = -1;
		this.scene.add(this.mesh);
	}

	resize() {
		this.calculateBounds();

		this.renderer.setSize(this.width, this.height, false);

		this.modelRT.setSize(this.jfaWidth, this.jfaHeight);
		this.seedRT.setSize(this.jfaWidth, this.jfaHeight);
		this.curJFA.setSize(this.jfaWidth, this.jfaHeight);
		this.prevJFA.setSize(this.jfaWidth, this.jfaHeight);
		this.rayColorRT.setSize(this.jfaWidth, this.jfaHeight);
		this.bilateralRT.setSize(this.jfaWidth, this.jfaHeight);

		//TODO: Resize radiance cascades although there is a very cool looking bug when you don't. Look into it
		this.curCascade.setSize(this.radiance_width, this.radiance_height);
		this.prevCascade.setSize(this.radiance_width, this.radiance_height);

		this.text.resize(this.jfaWidth, this.jfaHeight, this.fullJfaWidth, this.fullJfaHeight);
		this.playable1.resize(this.jfaWidth, this.jfaHeight, this.fullJfaWidth, this.fullJfaHeight);
		this.playable2.resize(this.jfaWidth, this.jfaHeight, this.fullJfaWidth, this.fullJfaHeight);
	}

	render() {
		const currentTime = performance.now();
		const delta = currentTime - this.lastTime;
		this.lastTime = currentTime;

		if (this.state.settings.mode === "playable1") {
			this.playable1.update(delta, { x: this.mouse.x - this.jfaWidth / 2, y: this.mouse.y - this.jfaHeight / 2 });
		} else if (this.state.settings.mode === "playable2" && this.state.video.texture) {
			this.playable2.update(this.state.video.texture);
		}

		if ((this.state.settings.twoPassOptimization && this.frameCount % 2 === 0) || !this.state.settings.twoPassOptimization) {
			if (this.state.settings.mode === "video") {
				this.mesh.material = this.resizerMaterial;
				this.resizerMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];
				this.resizerMaterial.uniforms.videoTexture.value = this.state.video.texture;
				this.resizerMaterial.uniforms.videoHeight.value = this.state.video.height;
				this.resizerMaterial.uniforms.videoWidth.value = this.state.video.width;
				this.resizerMaterial.uniforms.videoScale.value = this.state.video.scale;

				this.renderer.setRenderTarget(this.modelRT);
				this.renderer.clear(); //this is incase the user changes the scale
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
			this.seedMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];
			this.seedMaterial.uniforms.inputTexture.value = this.modelRT.texture;

			this.renderer.setRenderTarget(this.seedRT);
			this.renderer.clear();
			this.renderer.render(this.scene, this.camera);

			// jfa + distance phase
			const passes = Math.ceil(Math.log2(Math.max(this.jfaWidth, this.jfaHeight)));
			this.mesh.material = this.jfaMaterial;
			this.jfaMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];

			for (let i = 0; i < passes; i++) {
				//ping pong so webgl doesnt yell at me for reading and writing to the same texture
				this.jfaMaterial.uniforms.inputTexture.value = i === 0 ? this.seedRT.texture : this.prevJFA.texture;
				this.jfaMaterial.uniforms.offset.value = Math.pow(2, passes - i - 1);
				this.jfaMaterial.uniforms.isLast.value = i === passes - 1;

				this.renderer.setRenderTarget(this.curJFA);
				this.renderer.clear();
				this.renderer.render(this.scene, this.camera);

				[this.curJFA, this.prevJFA] = [this.prevJFA, this.curJFA];
			}
		}

		//Naive Ray Marching / RC phase
		if (this.state.settings.enableRC) {
			this.mesh.material = this.radiancecascadesMaterial;
			this.radiancecascadesMaterial.uniforms.sceneTexture.value = this.modelRT.texture;
			this.radiancecascadesMaterial.uniforms.distanceTexture.value = this.prevJFA.texture;
			this.radiancecascadesMaterial.uniforms.radianceModifier.value = this.state.settings.radiance;
			this.radiancecascadesMaterial.uniforms.distanceResolution.value = [this.render_width, this.render_height];
			this.radiancecascadesMaterial.uniforms.cascadeResolution.value = [this.radiance_width, this.radiance_height];
			this.radiancecascadesMaterial.uniforms.cascadeCount.value = this.radiance_cascades;
			this.radiancecascadesMaterial.uniforms.probeSpacing.value = this.radiance_linear;
			this.radiancecascadesMaterial.uniforms.interval.value = this.radiance_interval;
			this.radiancecascadesMaterial.uniforms.fixEdges.value = this.state.settings.fixEdges;

			let start = this.frameCount % 2 === 0 ? this.radiance_cascades - 1 : Math.ceil((this.radiance_cascades - 1) / 2) - 1;
			let end = this.frameCount % 2 === 0 ? Math.ceil((this.radiance_cascades - 1) / 2) : 0;

			if (!this.state.settings.twoPassOptimization) {
				start = this.radiance_cascades - 1;
				end = 0;
			}

			for (let i = start; i >= end; i--) {
				this.radiancecascadesMaterial.uniforms.cascadeIndex.value = i;

				this.renderer.setRenderTarget(this.curCascade);
				this.renderer.clear();
				this.renderer.render(this.scene, this.camera);

				this.radiancecascadesMaterial.uniforms.previousCascadeTexture.value = this.curCascade.texture;
				[this.curCascade, this.prevCascade] = [this.prevCascade, this.curCascade];
			}
		} else {
			this.mesh.material = this.rayMaterial;
			this.rayMaterial.uniforms.sceneTexture.value = this.modelRT.texture;
			this.rayMaterial.uniforms.distanceTexture.value = this.prevJFA.texture;
			this.rayMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];
			this.rayMaterial.uniforms.frame.value += 1;
			this.rayMaterial.uniforms.radianceModifier.value = this.state.settings.radiance;
			this.rayMaterial.uniforms.fixEdges.value = this.state.settings.fixEdges;

			this.renderer.setRenderTarget(this.rayColorRT);
			this.renderer.clear();
			this.renderer.render(this.scene, this.camera);
		}

		//bilateral filter phase (to smooth out noise/artifacts)

		if (!this.state.settings.enableRC || !this.state.settings.twoPassOptimization || this.frameCount % 2 === 1) {
			this.mesh.material = this.bilateralMaterial;
			this.bilateralMaterial.uniforms.inputTexture.value = this.state.settings.enableRC ? this.prevCascade.texture : this.rayColorRT.texture;
			this.bilateralMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];

			this.renderer.setRenderTarget(this.bilateralRT);
			this.renderer.clear();
			this.renderer.render(this.scene, this.camera);
		}

		this.mesh.material = this.displayMaterial;
		this.displayMaterial.map = this.bilateralRT.texture;
		//why write more if three does it for you
		//https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderChunk/map_fragment.glsl.js

		//because of the error calculation there will be a mismatch main rendering and the RC and JFA resolutions. since the streching is little its not really visible

		this.renderer.setRenderTarget(null);
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
		} else if (this.state.settings.mode === "video") {
			this.mesh.material = this.resizerMaterial;
			this.resizerMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];
			this.resizerMaterial.uniforms.videoTexture.value = this.state.video.texture;
			this.resizerMaterial.uniforms.videoHeight.value = this.state.video.height;
			this.resizerMaterial.uniforms.videoWidth.value = this.state.video.width;
			this.resizerMaterial.uniforms.videoScale.value = this.state.video.scale;
			this.renderer.render(this.scene, this.camera);
			//
		} else if (this.state.settings.mode === "playable2" && this.playable2.isReady) {
			this.renderer.render(this.playable2.sceneOverlay, this.playable2.cameraOverlay);
		}

		this.frameCount = (this.frameCount + 1) % 2;

		this.stats.update();
	}
}
