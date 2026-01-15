import { Visualization } from "./visualization.ts";
import { UI } from "./ui.ts";
import * as THREE from "three";

//Current architecture (I am not even sure this is how you are supposed to do it)

//State is the single truth source of data
//UI never deals with anything other than the state
//If a class needs access to data, access it through the state

//The methods of state are only responsible for updating its own state values and not for doing anything else (which is not even the case right now)
//type assertions here because of syntax issues? Js doesn't know about types and you initialize things with the : operator which can't we used to specify types (inside an object).

export class State {
	settings: {
		mode: string;
		isMobile: boolean;
		fixEdges: boolean;
		radiance: number;
		textScale: number;
		enableRC: boolean;
		twoPassOptimization: boolean;
		bilinearFix: boolean;
	};

	video: {
		element: HTMLVideoElement | null;
		texture: THREE.VideoTexture | null;
		height: number;
		width: number;
		scale: number;
		volume: number;
		loading: boolean;
	};

	audio: {
		element: HTMLAudioElement | null;
		volume: number;
		loading: boolean;
	};

	ui: UI;
	visualization: Visualization;
	audioUpdateFunction = () => {};

	constructor() {
		//values are actually initialized in ui.ts
		this.settings = {
			mode: "lyrics",
			isMobile: false,
			fixEdges: false,
			radiance: 0,
			textScale: 0,
			enableRC: false,
			twoPassOptimization: false,
			bilinearFix: false,
		};

		this.video = {
			element: null,
			texture: null,
			height: 0,
			width: 0,
			scale: 0,
			volume: 0,
			loading: false,
		};

		this.audio = {
			element: null,
			volume: 0,
			loading: false,
		};

		this.ui = new UI(this);
		this.visualization = new Visualization(this);
	}

	setTextScale(value: number) {
		this.settings.textScale = value;
		this.visualization.text.textscale = this.settings.textScale;
		this.visualization.text.update();
	}

	setMediaVolume(vol: number) {
		this.video.volume = vol;
		this.audio.volume = vol;
		if (this.video.element) this.video.element.volume = vol;
		if (this.audio.element) this.audio.element.volume = vol;
	}

	//https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images
	//https://stackoverflow.com/questions/49209756/do-i-always-need-to-call-url-revokeobjecturl-explicitly
	loadVideo(video: HTMLVideoElement) {
		if (this.video.element) {
			this.video.element.pause();
			URL.revokeObjectURL(this.video.element.src);
		}

		//I probably shouldve read: https://threejs.org/manual/#en/how-to-dispose-of-objects
		//lesson here is that whenever dealing with GPU data always think about dispose()
		this.video.loading = false;
		this.video.texture?.dispose();

		//console.log(this.visualization.renderer.info.memory.textures); //they were right!!!

		this.video.element = video;
		this.video.element.volume = this.video.volume;
		this.video.texture = new THREE.VideoTexture(video);
		this.video.height = video.videoHeight;
		this.video.width = video.videoWidth;

		this.video.loading = true;

		this.toggleVideo(false);
	}

	toggleVideo(forcePause: boolean) {
		const video = this.video.element;
		if (!video) return;
		if (forcePause) video.pause();
		else if (video.paused) video.play();
		else video.pause();
	}

	//from what I understand not removing event liseners to an element that is not used anymore is not a problem im modern browsers
	//however in this case not removing does cause a problem with the playback
	loadAudio(audio: HTMLAudioElement, trackName: string, artistName: string) {
		if (this.audio.element) {
			this.audio.element.pause();
			URL.revokeObjectURL(this.audio.element.src);
			this.audio.element.removeEventListener("timeupdate", this.audioUpdateFunction);
		}

		this.audio.element = audio;
		this.audio.element.volume = this.audio.volume;

		this.visualization.text.update("Loading lyrics...");
		this.audio.loading = true;

		this.visualization.lrcPlayer.getLRCLIB(trackName, artistName).then(() => {
			this.toggleAudio(false);

			this.audioUpdateFunction = () => {
				const [lyric, changed] = this.visualization.lrcPlayer.update(audio.currentTime);

				if (changed == "init" || changed == "changed") {
					this.visualization.text.update(lyric);
				}
			};

			audio.addEventListener("timeupdate", this.audioUpdateFunction);
			this.audio.loading = false;
		});
	}

	toggleAudio(forcePause: boolean) {
		const audio = this.audio.element;
		if (!audio || !this.visualization.lrcPlayer.isReady) return;
		if (forcePause) audio.pause();
		else if (audio.paused) audio.play();
		else audio.pause();
	}
}

new State();
