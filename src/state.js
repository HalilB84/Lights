import Vizualization from "./vizualization.js";
import UI from "./ui.js";
import * as THREE from "three";

//Current architecture (I am not even sure this is how you are supposed to do it)

//State is the single truth source of data
//UI never deals with anything other than the state
//If a class needs access to data, access it through the state

//The methods of state are only responsible for updating its own state values and not for doing anything else (which is not even the case right now)

class State {
	constructor() {
		this.modeIsVideo = null;
		this.mode = null;
		this.isMobile = null;

		this.video = {
			element: null,
			texture: null,
			height: null,
			width: null,
			scale: null,
			volume: null,
		};

		this.audio = {
			element: null,
			volume: null,
		};

		this.settings = {
			fixEdges: null,
			radiance: null,
			textScale: null,
			enableRC: null,
			twoPassOptimization: null,
		};

		this.ui = new UI(this);
		this.vizualization = new Vizualization(this);
	}

	setTextScale(value) {
		this.settings.textScale = value;
		this.vizualization.text.scale = this.settings.textScale;
		this.vizualization.text.scaleOverlay = this.settings.textScale * this.vizualization.JFAscale;
		this.vizualization.text.createScene();
	}

	loadVideo(video) {
		//im not sure if this is even needed https://stackoverflow.com/questions/3258587/how-to-properly-unload-destroy-a-video-element
		if (this.video.element) {
			this.video.element.pause();
			this.video.element.removeAttribute("src");
			this.video.element.load();
		}

		this.video.element = video;
		this.video.element.volume = this.video.volume;
		this.video.texture = new THREE.VideoTexture(video);
		this.video.texture.minFilter = THREE.LinearFilter;
		this.video.texture.magFilter = THREE.LinearFilter;
		this.video.texture.format = THREE.RGBAFormat;
		this.video.height = video.videoHeight;
		this.video.width = video.videoWidth;

		this.toggleVideo(false);
	}

	toggleVideo(forcePause) {
		const video = this.video.element;
		if (!video) return;
		if (forcePause) video.pause();
		else if (video.paused) video.play();
		else video.pause();
	}

	setMediaVolume(vol) {
		this.video.volume = vol;
		this.audio.volume = vol;
		if (this.video.element) this.video.element.volume = vol;
		if (this.audio.element) this.audio.element.volume = vol;
	}

	loadAudio(audio, trackName, artistName) {
		if (this.audio.element) {
			this.audio.element.pause();
			this.audio.element.removeEventListener("timeupdate", this.audioUpdateFunction);
		}

		this.audio.element = audio;
		this.audio.element.volume = this.audio.volume;

		this.vizualization.text.createScene("Loading lyrics...");

		this.vizualization.lrcPlayer.getLRCLIB(trackName, artistName).then(() => {
			this.toggleAudio(false);

			this.audioUpdateFunction = () => {
				const [lyric, changed] = this.vizualization.lrcPlayer.update(this.audio.element.currentTime);

				if (changed == "init" || changed == "changed") {
					this.vizualization.text.createScene(lyric);
				}
			};

			this.audio.element.addEventListener("timeupdate", this.audioUpdateFunction);
		});
	}

	toggleAudio(forcePause) {
		const audio = this.audio.element;
		if (!audio || !this.vizualization.lrcPlayer.isReady) return;
		if (forcePause) audio.pause();
		else if (audio.paused) audio.play();
		else audio.pause();
	}
}

new State();
