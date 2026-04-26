import { Visualization } from "./visualization.ts";
import { UI } from "./ui.ts";
import * as THREE from "three";
import Stats from "stats-gl";
import { Visualization as nw } from "./new.ts";
import type { Playable } from "./playables/playable.ts";
import { Video } from "./playables/video.js";
import { Balls } from "./playables/balls.js";
import { TextTroika } from "./playables/text.js";
import { LRC } from "./utils/lrcplayer.js";
import { Holes } from "./playables/holes.js";

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
    //visualization: Visualization;
    visualization: nw;
    stats: Stats;
    lrcPlayer: LRC;
    active: Playable;

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
        //this.visualization = new Visualization(this);
        this.visualization = new nw(this);
        this.lrcPlayer = new LRC();
        this.active = new TextTroika(this.visualization.fixWidth, this.visualization.fixHeight, this.settings.textScale);
    }

    changeMode() {
        //first del the cur mode
        this.active?.dispose();

        if(this.settings.mode === "video") {
            this.active = new Video(this.visualization.fixWidth, this.visualization.fixHeight);
        } else if(this.settings.mode === "lyrics") {
            this.active = new TextTroika(this.visualization.fixWidth, this.visualization.fixHeight, this.settings.textScale);
        } else if(this.settings.mode === "playable1") {
            this.active = new Balls(this.visualization.fixWidth, this.visualization.fixHeight);
        } else if(this.settings.mode === "playable2") {
            this.active = new Holes(this.visualization.fixWidth, this.visualization.fixHeight);
        }
    }


    update() {
         if(this.settings.mode === "video") {
            this.active.update(this.video.scale, this.video.texture, this.video.width, this.video.height);;
        } else if(this.settings.mode === "lyrics") {
            this.active.update(null, this.settings.textScale);
        } else if(this.settings.mode === "playable1") {
            this.active.update((1 / 60) * 1000, { x: this.visualization.mouse.x - this.visualization.fixWidth / 2, y: this.visualization.mouse.y - this.visualization.fixHeight / 2 });
        } else if(this.settings.mode === "playable2") {
            this.active.update(this.video.texture!);
        }
    }

    setTextScale(value: number) {
        this.settings.textScale = value;
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

        if(this.active instanceof(TextTroika)) {
            this.active.update("Loading lyrics...", this.settings.textScale);
        }

        this.audio.loading = true;

        this.lrcPlayer.getLRCLIB(trackName, artistName).then(() => {
            this.audioUpdateFunction = () => {
                const [lyric, changed] = this.lrcPlayer.update(audio.currentTime);

                if (changed === "init" || changed === "changed") {
                    if(this.active instanceof(TextTroika)) {
                        this.active.update(lyric, this.settings.textScale);
                    }
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
        if (!audio || !this.lrcPlayer.isReady) return;
        if (forcePause) audio.pause();
        else if (audio.paused) audio.play();
        else audio.pause();
    }

    changeFilter() {
        this.visualization.changeFilter();
    }
}

new State();
