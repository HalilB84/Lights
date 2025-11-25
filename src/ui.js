export default class UI {
	constructor(state) {
		this.state = state;

		this.videoInput = document.getElementById("video-upload");
		this.audioInput = document.getElementById("audio-upload");
		this.modeToggle = document.getElementById("mode-toggle");

		this.playPause = document.getElementById("play-pause");
		this.volume = document.getElementById("video-volume");
		this.scale = document.getElementById("video-scale");

		this.fixEdges = document.getElementById("fix-edges");
		this.radianceModifier = document.getElementById("radiance-modifier");
		this.textScale = document.getElementById("text-scale");
		this.enableRC = document.getElementById("enable-rc");

		//firefox shananigans

		this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

		this.state.modeIsVideo = this.modeToggle.checked = false;
		this.state.isMobile = this.isMobile;

		this.state.video.scale = this.scale.value = 0.5;
		this.state.video.volume = this.state.audio.volume = this.volume.value = 0.5;

		this.state.settings.textScale = this.textScale.value = this.isMobile ? 0.5 : 1;
		this.state.settings.radiance = this.radianceModifier.value = 1;
		this.state.settings.fixEdges = this.fixEdges.checked = true;
		this.state.settings.enableRC = this.enableRC.checked = false;

		//complex state changes call a function in state to handle them
		//otherwise state values are updated inline, maybe change this later

		this.videoInput.addEventListener("change", (e) => this.handleVideo(e));
		this.audioInput.addEventListener("change", (e) => this.handleAudio(e));

		this.playPause.addEventListener("click", () => {
			if (this.modeToggle.checked) {
				this.state.toggleVideo(false);
			} else {
				this.state.toggleAudio(false);
			}
		});

		this.modeToggle.addEventListener("change", () => {
			if (this.modeToggle.checked) {
				this.state.toggleAudio(true);
			} else {
				this.state.toggleVideo(true);
			}

			this.state.modeIsVideo = this.modeToggle.checked;

			if (this.modeToggle.checked) {
				this.radianceModifier.value = 2;
			} else {
				this.radianceModifier.value = 1;
			}

			this.state.settings.fixEdges = this.fixEdges.checked = !this.modeToggle.checked;
			this.state.settings.radiance = this.radianceModifier.value;
		});

		this.volume.addEventListener("input", () => {
			this.state.setMediaVolume(this.volume.value);
		});

		this.scale.addEventListener("input", () => {
			this.state.video.scale = this.scale.value;
		});

		this.radianceModifier.addEventListener("input", () => {
			this.state.settings.radiance = this.radianceModifier.value;
		});

		this.fixEdges.addEventListener("change", () => {
			this.state.settings.fixEdges = this.fixEdges.checked;
		});

		this.textScale.addEventListener("input", () => {
			this.state.setTextScale(this.textScale.value);
		});

		this.enableRC.addEventListener("change", () => {
			this.state.settings.enableRC = this.enableRC.checked;
		});
	}

	handleVideo(e) {
		const file = e.target.files[0];
		const video = document.createElement("video");
		const url = URL.createObjectURL(file);

		video.src = url;

		video.onloadeddata = () => {
			console.log("Video loaded");
			this.state.loadVideo(video);

			this.modeToggle.checked = true;
			this.modeToggle.dispatchEvent(new Event("change"));
		};
	}

	handleAudio(e) {
		const file = e.target.files[0];
		const audio = document.createElement("audio");
		const url = URL.createObjectURL(file);
		const trackName = file.name.split("-")[0];
		const artistName = file.name.split("-")[1].replace(/\.[^.]+$/, "");

		audio.src = url;

		audio.onloadeddata = () => {
			console.log("Audio loaded");
			this.state.loadAudio(audio, trackName, artistName);

			this.modeToggle.checked = false;
			this.modeToggle.dispatchEvent(new Event("change"));
		};
	}
}
