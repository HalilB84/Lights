import type { State } from "../state.js";
import { BallsPanel } from "./ballsPanel.js";
import { VideoPanel } from "./videoPanel.js";
import { LyricsPanel } from "./lyricsPanel.js";

//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
export class UI {
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
    volumeValue = document.getElementById("vv-value") as HTMLElement;

    radianceModifier = document.getElementById("radiance-modifier") as HTMLInputElement;
    radianceModifierValue = document.getElementById("rm-value") as HTMLElement;

    showFps = document.getElementById("show-fps") as HTMLInputElement;

    probeCount = document.getElementById("probe-count") as HTMLInputElement;
    pcValue = document.getElementById("pc-value") as HTMLElement;

    ballsPanel = new BallsPanel();
    videoPanel = new VideoPanel();
    lyricsPanel = new LyricsPanel();

    constructor(state: State) {
        this.state = state;

        const sett = this.state.settings;
        const svideo = this.state.video;
        const saudio = this.state.audio;

        sett.mode = this.mode.value = "lyrics";
        sett.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        document.getElementById(sett.mode + "-panel")!.style.display = "flex";

        ((svideo.volume = saudio.volume = 0.5), (this.volume.value = "0.5"));
        ((sett.radiance = 1), (this.radianceModifier.value = "1"));
        ((sett.probeCount = sett.isMobile ? 800 : 1024), (this.probeCount.value = sett.isMobile ? "800" : "1024"));

        this.volumeValue.textContent = this.volume.value;
        this.radianceModifierValue.textContent = this.radianceModifier.value;
        this.pcValue.textContent = this.probeCount.value;

        sett.showFps = this.showFps.checked = true;

        //complex state changes call a function in state to handle them
        //otherwise state values are updated inline, maybe change this later

        //pure ui should be somewhere else
        this.hideSettings.addEventListener("click", () => {
            const hidden = this.settings.classList.toggle("hidden");
            this.hideSettings.textContent = hidden ? "Show Settings" : "Hide Settings";
        });

        this.videoInput.addEventListener("change", () => this.handleVideo());
        this.audioInput.addEventListener("change", () => this.handleAudio());

        //if mode has the media tag
        this.playPause.addEventListener("click", () => {
            if (this.mode.value === "holes" || this.mode.value === "video" || this.mode.value === "balls") {
                this.state.toggleVideo(false);
            } else if (this.mode.value === "lyrics") {
                this.state.toggleAudio(false);
            }
        });

        this.mode.addEventListener("change", () => {
            if (this.mode.value === sett.mode) return;

            document.getElementById(sett.mode + "-panel")!.style.display = "none";
            document.getElementById(this.mode.value + "-panel")!.style.display = "flex";

            sett.mode = this.mode.value;

            if (this.mode.value !== "lyrics") {
                this.state.toggleAudio(true);
            }

            if (this.mode.value !== "video") {
                this.state.toggleVideo(true);
            }

            if (this.mode.value === "video") {
                this.radianceModifier.value = "2";
            } else {
                this.radianceModifier.value = "1";
            }

            //sett.fixEdges = this.fixEdges.checked = this.mode.value !== "video";
            //this.fixEdges.dispatchEvent(new Event("change"));
            this.radianceModifier.dispatchEvent(new Event("input"));
            this.state.changeMode();
        });

        this.volume.addEventListener("input", () => {
            this.state.setMediaVolume(+this.volume.value);
            this.volumeValue.textContent = this.volume.value;
        });

        this.radianceModifier.addEventListener("input", () => {
            sett.radiance = +this.radianceModifier.value;
            this.radianceModifierValue.textContent = this.radianceModifier.value;
        });

        this.showFps.addEventListener("change", () => {
            sett.showFps = this.showFps.checked;
            this.state.stats.dom.style.display = this.showFps.checked ? "flex" : "none";
        });

        this.probeCount.addEventListener("change", () => {
            sett.probeCount = +this.probeCount.value;
            this.pcValue.textContent = this.probeCount.value;
            this.state.change();
        });
    }

    //create element does NOT put the element in the Dom it only exists in memory
    handleVideo() {
        const file = this.videoInput.files![0];
        const video = document.createElement("video");
        const url = URL.createObjectURL(file);

        video.src = url;
        this.videoName.textContent = file.name;

        video.addEventListener(
            "canplay",
            () => {
                this.state.loadVideo(video);
            },
            { once: true },
        );
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

        audio.addEventListener(
            "canplay",
            () => {
                this.mode.value = "lyrics";
                this.mode.dispatchEvent(new Event("change"));
                this.state.loadAudio(audio, trackName, artistName);
            },
            { once: true },
        );
    }
}
