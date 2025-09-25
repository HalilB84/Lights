import * as THREE from 'three';

export default class UI {
    constructor() {
        this.uploadedVideo = null;
        this.videoTexture = null;
        this.useVideoTexture = false;
        this.videoAspect = 1.0;
        this.videoScale = 1.0;

        this.input = document.getElementById('video-upload');
        this.playPause = document.getElementById('play-pause');
        this.volume = document.getElementById("video-volume");
        this.scale = document.getElementById("video-scale");

        this.input.addEventListener('change', e => this.handleVideo(e));
        this.playPause.addEventListener('click', () => this.handlePlayPause());
        this.volume.addEventListener('input', () => this.handleVolume());
        this.scale.addEventListener('input', () => this.handleScale());
    }


    handleVideo(e) {

      if(this.uploadedVideo) {
        this.uploadedVideo.pause();
        this.uploadedVideo = null;
        this.videoTexture = null;
        this.useVideoTexture = false;
      }


      const file = e.target.files[0];
      const video = document.createElement('video');
      const url = URL.createObjectURL(file);
      
      video.src = url;

      video.onloadeddata = () => {
        console.log("Video loaded");

        this.uploadedVideo = video;
        this.videoTexture = new THREE.VideoTexture(video);
        this.videoTexture.minFilter = THREE.LinearFilter;
        this.videoTexture.magFilter = THREE.LinearFilter;
        this.videoTexture.format = THREE.RGBAFormat;
        this.videoAspect = video.videoWidth / video.videoHeight;
        this.useVideoTexture = true;
        this.uploadedVideo.volume = this.volume.value;
        this.videoScale = this.scale.value;


        //get the html for the scale range and adjust its max value based on the maximum about the video can grow becaues hitting the boundary of the screen
        const scaleRange = document.getElementById("video-scale");
        scaleRange.max = Math.max(video.videoWidth, video.videoHeight) / Math.min(video.videoWidth, video.videoHeight);
        scaleRange.value = 1;
      }
    }

    handlePlayPause() {
      if (!this.uploadedVideo) return;
      if(this.uploadedVideo.paused) {
        this.uploadedVideo.play();
      } else {
        this.uploadedVideo.pause();
      }
    }

    handleVolume() {
      if (!this.uploadedVideo) return;
      this.uploadedVideo.volume = this.volume.value;
    }

    handleScale() {
      if (!this.uploadedVideo) return;
      this.videoScale = this.scale.value;
    }

}

