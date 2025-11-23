import * as THREE from "three";
import Stats from "stats-gl";
import seed from "./shaders/seed.js";
import jfa from "./shaders/jfa.js";
import ray from "./shaders/ray.js";
import resizer from "./shaders/resizer.js";
import bilateral from "./shaders/bilateral.js";
import UI from "./ui.js";
import LRC from "./lrcPlayer.js";
import Text from "./text.js";
import EventBus from "./events.js";
import radiancecascades from "./shaders/radiancecascades.js";

//realistically we dont even need three.js for a 2d scene but since it reduces boilerplate and provides a lot of useful functionality, we ball//we will use three.js for the sake of learning

class Main {
	constructor() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.autoClear = false;
		this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
		// TODO: figure out what pixelratio actually is and how it works
		this.renderer.setPixelRatio(window.devicePixelRatio); //not sure if this is fully working
		document.body.appendChild(this.renderer.domElement);

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
			minimal: false,
			mode: 0,
		});

		document.body.appendChild(this.stats.dom);
		this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

		this.JFAscale = this.isMobile ? 4 : 2;
		this.jfaWidth = Math.floor(window.innerWidth / this.JFAscale);
		this.jfaHeight = Math.floor(window.innerHeight / this.JFAscale);

		this.raymarchScale = this.isMobile ? 4 : 2;
		this.raymarchWidth = Math.floor(window.innerWidth / this.raymarchScale);
		this.raymarchHeight = Math.floor(window.innerHeight / this.raymarchScale);

		this.bus = new EventBus();
		this.ui = new UI(this.bus);
		this.lrcPlayer = new LRC();

		this.state();
		this.initialize();
		this.shaders();

		this.mouse = { x: null, y: null };
		this.canvas = this.renderer.domElement;
		this.canvas.addEventListener("mousemove", (e) => {
			const rect = this.canvas.getBoundingClientRect();
			this.mouse.x = (e.clientX - rect.left) / this.JFAscale;
			this.mouse.y = (rect.height - (e.clientY - rect.top)) / this.JFAscale;
		});

		this.renderer.setAnimationLoop(this.animate.bind(this));
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		//this.textOverlay.createText(`wdw: ${window.innerWidth} × ${window.innerHeight}`);

		window.addEventListener("resize", () => {
			this.jfaWidth = Math.floor(window.innerWidth / this.JFAscale);
			this.jfaHeight = Math.floor(window.innerHeight / this.JFAscale);
			this.raymarchWidth = Math.floor(window.innerWidth / this.raymarchScale);
			this.raymarchHeight = Math.floor(window.innerHeight / this.raymarchScale);

			this.renderer.setSize(window.innerWidth, window.innerHeight);

			this.modelRT.setSize(this.jfaWidth, this.jfaHeight);
			this.seedRT.setSize(this.jfaWidth, this.jfaHeight);
			this.jfaA.setSize(this.jfaWidth, this.jfaHeight);
			this.jfaB.setSize(this.jfaWidth, this.jfaHeight);
			this.rayColorRT.setSize(this.raymarchWidth, this.raymarchHeight);
			this.bilateralRT.setSize(this.raymarchWidth, this.raymarchHeight);

			//TODO: Resize radiance cascades although there is a very cool looking bug when you don't. Look into it
			this.rcCalculations();
			this.cascadeA.setSize(this.radiance_width, this.radiance_height);
			this.cascadeB.setSize(this.radiance_width, this.radiance_height);

			this.text.resize(this.jfaWidth, this.jfaHeight);
			this.textOverlay.resize(window.innerWidth, window.innerHeight);
		});
	}

	state() {
		//state management. the default state should be matching with html needs workaround
		this.state = {
			modeIsVideo: false,
			video: {
				element: null,
				texture: null,
				heigth: null,
				width: null,
				scale: null,
				volume: null,
			},
			audio: {
				element: null,
				volume: null,
			},
			settings: {
				showProgram: true,
				radiance: 1.0,
				textScale: this.isMobile ? 0.5 : 1,
				enableRC: false,
			},
		};

		this.bus.on("mode:changed", (isVideo) => {
			this.state.modeIsVideo = isVideo;
		});

		this.bus.on("settings:showProgram", (value) => {
			this.state.settings.showProgram = value;
		});
		
		this.bus.on("settings:radiance", (value) => {
			this.state.settings.radiance = value;
		});
		
		this.bus.on("settings:textScale", (value) => {
			this.state.settings.textScale = value;
			this.text.scale = this.state.settings.textScale;
			this.textOverlay.scale = this.state.settings.textScale * this.JFAscale;
			this.text.createText();
			this.textOverlay.createText();
		});

		this.bus.on("settings:enableRC", (value) => {
			this.state.settings.enableRC = value;
		});

		this.bus.on("video:loaded", (video) => {
			if (this.state.video.element) this.state.video.element.pause();
			this.state.video.element = video;
			this.state.video.element.volume = this.state.video.volume;
			this.state.video.texture = new THREE.VideoTexture(video);
			this.state.video.texture.minFilter = THREE.LinearFilter;
			this.state.video.texture.magFilter = THREE.LinearFilter;
			this.state.video.texture.format = THREE.RGBAFormat;
			this.state.video.height = video.videoHeight;
			this.state.video.width = video.videoWidth;

			this.bus.emit("video:toggle", false);
		});

		this.bus.on("video:toggle", (forcePause) => {
			const video = this.state.video.element;
			if (!video) return;
			if (forcePause) video.pause();
			else if (video.paused) video.play();
			else video.pause();
		});

		this.bus.on("media:volume", (vol) => {
			if (this.state.video.element) this.state.video.element.volume = vol;
			if (this.state.audio.element) this.state.audio.element.volume = vol;
		});

		this.bus.on("video:scale", (value) => {
			this.state.video.scale = value;
		});

		this.bus.on("audio:loaded", (audio, trackName, artistName) => {
			if (this.state.audio.element) this.state.audio.element.pause();
			this.state.audio.element = audio;

			this.lrcPlayer.getLRCLIB(trackName, artistName).then(() => {
				this.bus.emit("audio:toggle", false);
			});

			this.state.audio.element.addEventListener("timeupdate", () => {
				const [lyric, changed] = this.lrcPlayer.update(this.state.audio.element.currentTime * 1000);

				if (changed) {
					this.text.createText(lyric);
					this.textOverlay.createText(lyric);
				}
			});
		});

		this.bus.on("audio:toggle", (forcePause) => {
			const audio = this.state.audio.element;
			if (!audio || !this.lrcPlayer.isReady) return;
			if (forcePause) audio.pause();
			else if (audio.paused) audio.play();
			else audio.pause();
		});
	}

	initialize() {
		this.text = new Text(this.jfaWidth, this.jfaHeight, this.state.settings.textScale, false);
		this.textOverlay = new Text(window.innerWidth, window.innerHeight, this.state.settings.textScale * this.JFAscale, true);

		let rtConfig = {
			minFilter: THREE.NearestFilter,
			magFilter: THREE.NearestFilter,
			type: THREE.FloatType,
		};

		let cascadeRTConfig = {
			minFilter: THREE.LinearFilter,
			magFilter: THREE.LinearFilter,
			type: THREE.FloatType,
		};

		this.blueNoiseTexture = new THREE.TextureLoader().load("LDR_LLL1_0.png");
		this.blueNoiseTexture.wrapS = THREE.RepeatWrapping;
		this.blueNoiseTexture.wrapT = THREE.RepeatWrapping;
		this.blueNoiseTexture.minFilter = THREE.NearestFilter;
		this.blueNoiseTexture.magFilter = THREE.NearestFilter;

		this.modelRT = new THREE.WebGLRenderTarget(this.jfaWidth, this.jfaHeight, rtConfig);

		this.seedRT = this.modelRT.clone();

		this.jfaA = this.modelRT.clone();
		this.jfaB = this.modelRT.clone();

		this.rayColorRT = new THREE.WebGLRenderTarget(this.raymarchWidth, this.raymarchHeight, rtConfig);

		this.bilateralRT = this.rayColorRT.clone();

		this.rcCalculations();

		this.cascadeA = new THREE.WebGLRenderTarget(this.radiance_width, this.radiance_height, cascadeRTConfig);
		this.cascadeB = this.cascadeA.clone();
	}

	rcCalculations() {
		//RC
		//Calculations taken from Create_0.gml and needs explaining and im probably doing something wrong because it requires one more cascade?
		const diagonal = Math.sqrt(this.jfaWidth * this.jfaWidth + this.jfaHeight * this.jfaHeight);
		this.radiance_cascades = Math.ceil(Math.log(diagonal) / Math.log(4)) + 1;

		const errorRate = Math.pow(2.0, this.radiance_cascades - 1);
		const errorX = Math.ceil(this.jfaWidth / errorRate);
		const errorY = Math.ceil(this.jfaHeight / errorRate);
		this.render_width = errorX * errorRate;
		this.render_height = errorY * errorRate;

		this.radiance_linear = 1; //spacing between probes/quality control however anything other than 1 either looks bad or tanks performance
		this.radiance_interval = 1; //TODO: figure out why in the original code its set to 2?
		this.radiance_width = Math.floor(this.render_width / this.radiance_linear);
		this.radiance_height = Math.floor(this.render_height / this.radiance_linear);
	}

	shaders() {
		this.resizerMaterial = resizer();

		this.seedMaterial = seed();

		this.jfaMaterial = jfa();

		this.rayMaterial = ray();
		this.rayMaterial.uniforms.blueNoise.value = this.blueNoiseTexture;
		this.rayMaterial.uniforms.rayCount.value = 32;
		this.rayMaterial.uniforms.frame.value = 0;

		this.displayMaterial = new THREE.MeshBasicMaterial();

		this.bilateralMaterial = bilateral();
		this.bilateralMaterial.uniforms.sigmaSpatial.value = 2.0;
		this.bilateralMaterial.uniforms.sigmaRange.value = 0.3;
		this.bilateralMaterial.uniforms.radius.value = 2;

		this.radiancecascadesMaterial = radiancecascades();

		this.geometry = new THREE.PlaneGeometry(2, 2);
		this.mesh = new THREE.Mesh(this.geometry, this.seedMaterial);
		this.scene.add(this.mesh);
	}

	animate() {
		this.stats.begin();

		let nextTexture = null; //I legitimately hate this, what even is proper code structure anyways?

		if (this.state.modeIsVideo) {
			this.mesh.material = this.resizerMaterial;
			this.resizerMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];
			this.resizerMaterial.uniforms.videoTexture.value = this.state.video.texture;
			this.resizerMaterial.uniforms.videoHeight.value = this.state.video.height;
			this.resizerMaterial.uniforms.videoWidth.value = this.state.video.width;
			this.resizerMaterial.uniforms.videoScale.value = this.state.video.scale;

			this.renderer.setRenderTarget(this.modelRT);
			this.renderer.clear(); //this is incase the user changes the scale
			this.renderer.render(this.scene, this.camera);

			nextTexture = this.modelRT.texture;
		} else {
			nextTexture = this.text.render(this.renderer);
		}

		//seed phase
		this.mesh.material = this.seedMaterial;
		this.seedMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];
		this.seedMaterial.uniforms.inputTexture.value = nextTexture;
		this.renderer.setRenderTarget(this.seedRT);
		this.renderer.render(this.scene, this.camera);

		// jfa + distance phase
		let curT = this.seedRT.texture;
		let curJFA = this.jfaA;
		let nextJFA = this.jfaB;
		const passes = Math.ceil(Math.log2(Math.max(this.jfaWidth, this.jfaHeight)));
		this.mesh.material = this.jfaMaterial;
		this.jfaMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];

		for (let i = 0; i < passes; i++) {
			//ping pong so webgl doesnt yell at me for reading and writing to the same texture
			this.jfaMaterial.uniforms.inputTexture.value = curT;
			this.jfaMaterial.uniforms.offset.value = Math.pow(2, passes - i - 1);
			this.jfaMaterial.uniforms.isLast.value = i === passes - 1;

			this.renderer.setRenderTarget(curJFA);
			this.renderer.render(this.scene, this.camera);

			curT = curJFA.texture;
			[curJFA, nextJFA] = [nextJFA, curJFA];
		}

		let curCascade = this.cascadeA;
		let prevCascade = this.cascadeB;

		//Naive Ray Marching / RC phase
		if (this.state.settings.enableRC) {
			this.mesh.material = this.radiancecascadesMaterial;
			this.radiancecascadesMaterial.uniforms.sceneTexture.value = nextTexture;
			this.radiancecascadesMaterial.uniforms.distanceTexture.value = curT;
			this.radiancecascadesMaterial.uniforms.radianceModifier.value = this.state.settings.radiance;
			this.radiancecascadesMaterial.uniforms.resolution.value = [this.render_width, this.render_height];
			this.radiancecascadesMaterial.uniforms.cascadeExtent.value = [this.radiance_width, this.radiance_height];
			this.radiancecascadesMaterial.uniforms.cascadeCount.value = this.radiance_cascades;
			this.radiancecascadesMaterial.uniforms.cascadeLinear.value = this.radiance_linear;
			this.radiancecascadesMaterial.uniforms.cascadeInterval.value = this.radiance_interval;

			for (let i = this.radiance_cascades - 1; i >= 0; i--) {
				this.radiancecascadesMaterial.uniforms.cascadeIndex.value = i;

				this.renderer.setRenderTarget(curCascade);
				this.renderer.clear();
				this.renderer.render(this.scene, this.camera);

				this.radiancecascadesMaterial.uniforms.previousCascadeTexture.value = curCascade.texture;
				[curCascade, prevCascade] = [prevCascade, curCascade];
			}
		} else {
			this.mesh.material = this.rayMaterial;
			this.rayMaterial.uniforms.sceneTexture.value = nextTexture;
			this.rayMaterial.uniforms.distanceTexture.value = curT;
			this.rayMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];
			this.rayMaterial.uniforms.frame.value += 1;
			this.rayMaterial.uniforms.radianceModifier.value = this.state.settings.radiance;
			this.rayMaterial.uniforms.showProgram.value = this.state.settings.showProgram;
			this.renderer.setRenderTarget(this.rayColorRT);
			this.renderer.render(this.scene, this.camera);
		}

		//because of the error calculation there will be a mismatch between the resolutions. since the streching is little its not really visible

		//bilateral filter phase (to smooth out noise/artifacts)
		this.mesh.material = this.bilateralMaterial;
		this.bilateralMaterial.uniforms.inputTexture.value = this.state.settings.enableRC ? prevCascade.texture : this.rayColorRT.texture;
		this.bilateralMaterial.uniforms.resolution.value = [this.raymarchWidth, this.raymarchHeight];
		this.renderer.setRenderTarget(this.bilateralRT);
		this.renderer.render(this.scene, this.camera);

		this.displayMaterial.map = this.bilateralRT.texture;
		this.mesh.material = this.displayMaterial;
		this.renderer.setRenderTarget(null);
		this.renderer.render(this.scene, this.camera);

		//overlay phase (to display text/video on full res)
		if (!this.state.modeIsVideo) {
			this.textOverlay.renderDirect(this.renderer);
		} else if (this.state.video.texture) {
			this.mesh.material = this.resizerMaterial;
			this.resizerMaterial.uniforms.resolution.value = [this.jfaWidth, this.jfaHeight];
			this.resizerMaterial.uniforms.videoTexture.value = this.state.video.texture;
			this.resizerMaterial.uniforms.videoHeight.value = this.state.video.height;
			this.resizerMaterial.uniforms.videoWidth.value = this.state.video.width;
			this.resizerMaterial.uniforms.videoScale.value = this.state.video.scale;
			this.renderer.setRenderTarget(null);
			this.renderer.render(this.scene, this.camera);
		}

		this.stats.end();
		this.stats.update();
	}
}

new Main();
