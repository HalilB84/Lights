import { Visualization } from "./visualization.ts";
import { UI } from "./ui.ts";
import * as THREE from "three";
import Stats from "stats-gl";

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
		textScale: number;
		radiance: number;
		fixEdges: boolean;
		showFps: boolean;
		enableRC: boolean;
		twoPassOptimization: boolean;
		bilinearFix: boolean;
		srgbFix: boolean;
	};

	video: {
		element: HTMLVideoElement | null;
		texture: THREE.VideoTexture | null;
		height: number;
		width: number;
		scale: number;
		volume: number;
	};

	audio: {
		element: HTMLAudioElement | null;
		volume: number;
		loading: boolean;
	};

	ui: UI;
	visualization: Visualization;
	stats: Stats;
	audioUpdateFunction = () => {};

	constructor() {
		//values are actually initialized in ui.ts
		this.settings = {
			mode: "lyrics",
			isMobile: false,
			textScale: 0,
			radiance: 0,
			fixEdges: false,
			showFps: false,
			enableRC: false,
			twoPassOptimization: false,
			bilinearFix: false,
			srgbFix: false,
		};

		this.video = {
			element: null,
			texture: null,
			height: 0,
			width: 0,
			scale: 0,
			volume: 0,
		};

		this.audio = {
			element: null,
			volume: 0,
			loading: false,
		};

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

		this.ui = new UI(this);
		this.visualization = new Visualization(this);
	}

	setTextScale(value: number) {
		this.settings.textScale = value;
		this.visualization.text.textscale = this.settings.textScale;
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

		//I probably shouldve read: https://threejs.org/manual/#en/how-to-dispose-of-objects lesson here is that whenever dealing with GPU data always think about dispose()
		this.video.texture?.dispose();

		this.video.element = video;
		this.video.element.volume = this.video.volume;

		this.video.height = video.videoHeight;
		this.video.width = video.videoWidth;
		this.video.texture = new THREE.VideoTexture(video);

		this.toggleVideo(false);
		this.ui.mode.value = "video";
	    this.ui.mode.dispatchEvent(new Event("change"));
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
			this.audioUpdateFunction = () => {
				const [lyric, changed] = this.visualization.lrcPlayer.update(audio.currentTime);

				if (changed === "init" || changed === "changed") {
					this.visualization.text.update(lyric);
				}
			};

			audio.addEventListener("timeupdate", this.audioUpdateFunction);
			
			this.audio.loading = false;
			this.toggleAudio(false);

			this.ui.mode.value = "lyrics";
			this.ui.mode.dispatchEvent(new Event("change"));
		});
	}

	toggleAudio(forcePause: boolean) {
		const audio = this.audio.element;
		if (!audio || !this.visualization.lrcPlayer.isReady) return;
		if (forcePause) audio.pause();
		else if (audio.paused) audio.play();
		else audio.pause();
	}

	changeFilter() {
		this.visualization.changeFilter();
	}
}

new State();
