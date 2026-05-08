//import { RC } from "./rc_vis.ts";
import { UI } from "./ui/ui.ts";
import * as THREE from "three";
import Stats from "stats-gl";
import { HRC } from "./hrc_vis.ts";
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
//what? i swear this didnt work before

export class State {
    canvas: HTMLCanvasElement;
    dpr: number;

    settings = {
        radiance: 0,
        probeCount: 0,
    };

    video = {
        element: null as HTMLVideoElement | null,
        texture: null as THREE.VideoTexture | null,
        height: 0,
        width: 0,
        volume: 0,
    };

    audio = {
        element: null as HTMLAudioElement | null,
        volume: 0,
        loading: false,
    };

    ui: UI;
    hrc: HRC;
    lrcPlayer: LRC;
    active: Playable;

    mouse = { x: 9999, y: 9999 };
    audioUpdateFunction = () => {};
    stats = new Stats({
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

    lastTime = 0;

    constructor() {
        //values are actually initialized in ui.ts
        this.canvas = document.querySelector("canvas")!;
        this.dpr = window.devicePixelRatio;

        this.canvas.addEventListener("mousemove", (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = this.canvas.clientHeight - e.clientY;
        });

        //document.body.appendChild(this.stats.dom);

        this.ui = new UI(this);
        //this.rc = new RC(this);
        this.hrc = new HRC(this);
        this.lrcPlayer = new LRC();
        this.active = new TextTroika(this.hrc.fixWidth, this.hrc.fixHeight);
    }

    changeMode() {
        //first del the cur mode
        this.active?.dispose();

        const w = this.hrc.fixWidth;
        const h = this.hrc.fixHeight;

        if (this.ui.mode.value === "video") {
            this.active = new Video(w, h);
        } else if (this.ui.mode.value === "lyrics") {
            this.active = new TextTroika(w, h);
        } else if (this.ui.mode.value === "balls") {
            this.active = new Balls(w, h);
        } else if (this.ui.mode.value === "holes") {
            this.active = new Holes(w, h);
        }
    }

    update() {
        const curTime = performance.now();
        const delta = curTime - this.lastTime;
        this.lastTime = curTime;

        if (this.active instanceof Video) {
            this.active.update(this.video.texture, this.video.width, this.video.height, this.ui.videoPanel.exportState());
            //
            //
        } else if (this.active instanceof TextTroika) {
            this.active.update(null, this.ui.lyricsPanel.exportState());
            //
            //
        } else if (this.active instanceof Balls) {
            this.active.update(
                delta,
                {
                    x: (this.mouse.x * this.dpr) / (this.hrc.width / this.hrc.fixWidth) - this.hrc.fixWidth / 2,
                    y: (this.mouse.y * this.dpr) / (this.hrc.height / this.hrc.fixHeight) - this.hrc.fixHeight / 2,
                },
                this.video.texture,
                this.ui.ballsPanel.exportState(),
            );
            //
            //
        } else if (this.active instanceof Holes) {
            this.active.update(this.video.texture);
            //
            //
        }
    }

    change() {
        this.hrc.resize();
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
        //this.video.texture.colorSpace = THREE.SRGBColorSpace;

        this.toggleVideo(false);

        if (this.ui.mode.value === "lyrics") this.ui.mode.value = "video"; //ik bla bla but need to add more modes before this
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

        if (this.active instanceof TextTroika) {
            this.active.update("Loading lyrics...", null);
        }

        this.audio.loading = true;

        this.lrcPlayer.getLRCLIB(trackName, artistName).then(() => {
            this.audioUpdateFunction = () => {
                const [lyric, changed] = this.lrcPlayer.update(audio.currentTime);

                if (changed === "init" || changed === "changed") {
                    if (this.active instanceof TextTroika) {
                        this.active.update(lyric, null);
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
}

new State();
