export default class UI {
	constructor(state) {
		this.state = state;

		this.hideSettings = document.getElementById("hide-settings");
		this.settings = document.getElementById("settings");

		this.videoInput = document.getElementById("video-upload");
		this.videoName = document.getElementById("video-name");
		this.audioInput = document.getElementById("audio-upload");
		this.audioName = document.getElementById("audio-name");
		this.mode = document.getElementById("mode");

		this.playPause = document.getElementById("play-pause");
		this.volume = document.getElementById("video-volume");
		this.scale = document.getElementById("video-scale");

		this.fixEdges = document.getElementById("fix-edges");
		this.radianceModifier = document.getElementById("radiance-modifier");
		this.textScale = document.getElementById("text-scale");
		this.enableRC = document.getElementById("enable-rc");
		this.twoPassOptimization = document.getElementById("2-pass-optimization");

		//firefox shananigans

		this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

		this.state.mode = this.mode.value = "lyrics";
		this.state.isMobile = this.isMobile;

		this.state.video.scale = this.scale.value = 0.55;
		this.state.video.volume = this.state.audio.volume = this.volume.value = 0.5;

		this.state.settings.textScale = this.textScale.value = 1;
		this.state.settings.radiance = this.radianceModifier.value = 1;
		this.state.settings.fixEdges = this.fixEdges.checked = true;
		this.state.settings.enableRC = this.enableRC.checked = this.isMobile ? true : true;
		//special case
		this.state.settings.twoPassOptimization = this.twoPassOptimization.checked = true;
		document.getElementById("row-2").style.display = this.enableRC.checked ? "block" : "none";

		//complex state changes call a function in state to handle them
		//otherwise state values are updated inline, maybe change this later

		//pure ui should be somewhere else
		this.hideSettings.addEventListener("click", () => {
			const hidden = this.settings.classList.toggle("hidden");
			this.hideSettings.textContent = hidden ? "Show Settings" : "Hide Settings";
		});

		this.videoInput.addEventListener("change", (e) => this.handleVideo(e));
		this.audioInput.addEventListener("change", (e) => this.handleAudio(e));

		this.playPause.addEventListener("click", () => {
			if (this.mode.value === "video") {
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

			this.state.modeIsVideo = this.mode.value === "video";
			this.state.mode = this.mode.value;

			if (this.mode.value === "video") {
				this.radianceModifier.value = 2;
			} else {
				this.radianceModifier.value = 1;
			}

			this.state.settings.fixEdges = this.fixEdges.checked = this.mode.value !== "video";
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
			document.getElementById("row-2").style.display = this.enableRC.checked ? "block" : "none";
		});

		this.twoPassOptimization.addEventListener("change", () => {
			this.state.settings.twoPassOptimization = this.twoPassOptimization.checked;
		});
	}

	handleVideo(e) {
		const file = e.target.files[0];
		const video = document.createElement("video");
		const url = URL.createObjectURL(file);

		video.src = url;
		this.videoName.textContent = file.name;
		video.onloadeddata = () => {
			console.log("Video loaded");
			this.state.loadVideo(video);

			this.mode.value = "video";
			this.mode.dispatchEvent(new Event("change"));
		};
	}

	handleAudio(e) {
		const file = e.target.files[0];
		const audio = document.createElement("audio");
		const url = URL.createObjectURL(file);
		const trackName = file.name.split("-")[0];
		const artistName = file.name.split("-")[1].replace(/\.[^.]+$/, "");

		audio.src = url;
		this.audioName.textContent = file.name;
		
		audio.onloadeddata = () => {
			console.log("Audio loaded");
			this.state.loadAudio(audio, trackName, artistName);

			this.mode.value = "lyrics";
			this.mode.dispatchEvent(new Event("change"));
		};
	}
}
