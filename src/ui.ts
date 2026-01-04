import type State from "./state.js";

//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
export default class UI {
	state: State;

	hideSettings = document.getElementById("hide-settings") as HTMLInputElement;
	settings = document.getElementById("settings") as HTMLInputElement;

	videoInput = document.getElementById("video-upload") as HTMLInputElement;
	videoName = document.getElementById("video-name") as HTMLElement;
	audioInput = document.getElementById("audio-upload") as HTMLInputElement;
	audioName = document.getElementById("audio-name") as HTMLElement;
	mode = document.getElementById("mode") as HTMLInputElement;

	playPause = document.getElementById("play-pause") as HTMLInputElement;
	volume = document.getElementById("video-volume") as HTMLInputElement;
	scale = document.getElementById("video-scale") as HTMLInputElement;

	fixEdges = document.getElementById("fix-edges") as HTMLInputElement;
	radianceModifier = document.getElementById("radiance-modifier") as HTMLInputElement;
	textScale = document.getElementById("text-scale") as HTMLInputElement;
	enableRC = document.getElementById("enable-rc") as HTMLInputElement;
	twoPassOptimization = document.getElementById("2-pass-optimization") as HTMLInputElement;

	constructor(state: State) {
		this.state = state;

		this.state.settings.mode = this.mode.value = "lyrics";
		this.state.settings.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

		((this.state.video.scale = 0.55), (this.scale.value = "0.55"));
		((this.state.video.volume = this.state.audio.volume = 0.5), (this.volume.value = "0.5"));

		((this.state.settings.textScale = 1), (this.textScale.value = "1"));
		((this.state.settings.radiance = 1), (this.radianceModifier.value = "1"));
		this.state.settings.fixEdges = this.fixEdges.checked = true;
		this.state.settings.enableRC = this.enableRC.checked = this.state.settings.isMobile ? true : true;

		//special case
		this.state.settings.twoPassOptimization = this.twoPassOptimization.checked = true;
		document.getElementById("row-2")!.style.display = this.enableRC.checked ? "flex" : "none";

		//complex state changes call a function in state to handle them
		//otherwise state values are updated inline, maybe change this later

		//pure ui should be somewhere else
		this.hideSettings.addEventListener("click", () => {
			const hidden = this.settings.classList.toggle("hidden");
			this.hideSettings.textContent = hidden ? "Show Settings" : "Hide Settings";
		});

		this.videoInput.addEventListener("change", () => this.handleVideo());
		this.audioInput.addEventListener("change", () => this.handleAudio());

		this.playPause.addEventListener("click", () => {
			if (this.mode.value === "playable2" || this.mode.value === "video") {
				this.state.toggleVideo(false);
			} else if (this.mode.value === "lyrics") {
				this.state.toggleAudio(false);
			}
		});

		this.mode.addEventListener("change", () => {
			if (this.mode.value !== "lyrics") {
				this.state.toggleAudio(true);
			}

			if (this.mode.value !== "video") {
				this.state.toggleVideo(true);
			}

			this.state.settings.mode = this.mode.value;

			if (this.mode.value === "video") {
				this.radianceModifier.value = "2";
			} else {
				this.radianceModifier.value = "1";
			}

			this.state.settings.fixEdges = this.fixEdges.checked = this.mode.value !== "video";
			this.fixEdges.dispatchEvent(new Event("change"));
			this.radianceModifier.dispatchEvent(new Event("input"));
		});

		this.volume.addEventListener("input", () => {
			this.state.setMediaVolume(+this.volume.value);
		});

		this.scale.addEventListener("input", () => {
			this.state.video.scale = +this.scale.value;
		});

		this.radianceModifier.addEventListener("input", () => {
			this.state.settings.radiance = +this.radianceModifier.value;
		});

		this.fixEdges.addEventListener("change", () => {
			this.state.settings.fixEdges = this.fixEdges.checked;
		});

		this.textScale.addEventListener("input", () => {
			this.state.setTextScale(+this.textScale.value);
		});

		this.enableRC.addEventListener("change", () => {
			this.state.settings.enableRC = this.enableRC.checked;
			document.getElementById("row-2")!.style.display = this.enableRC.checked ? "flex" : "none";
		});

		this.twoPassOptimization.addEventListener("change", () => {
			this.state.settings.twoPassOptimization = this.twoPassOptimization.checked;
		});
	}

	//create element does NOT put the element in the Dom it only exists in memory
	handleVideo() {
		const file = this.videoInput.files![0];
		const video = document.createElement("video");
		const url = URL.createObjectURL(file);

		video.src = url;
		this.videoName.textContent = file.name;

		video.oncanplay = () => {
			console.log("Video loaded");
			this.state.loadVideo(video);

			this.mode.value = "video";
			this.mode.dispatchEvent(new Event("change"));
		};
	}

	handleAudio() {
		if (this.state.audio.loading) {
			console.log("cant upload while waiting response!");
			return;
		}

		const file = this.audioInput.files![0];
		const audio = document.createElement("audio");
		const url = URL.createObjectURL(file);

		const name = file.name.split("-");
		const trackName = name[0].trim();
		const artistName = name[1].trim().replace(/\.[^/.]+$/, "");

		audio.src = url;
		this.audioName.textContent = file.name;

		audio.oncanplay = () => {
			console.log("Audio loaded");
			this.state.loadAudio(audio, trackName, artistName);

			this.mode.value = "lyrics";
			this.mode.dispatchEvent(new Event("change"));
		};
	}
}
