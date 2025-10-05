export default class UI {
    constructor(bus) {
        this.bus = bus;

        this.videoInput = document.getElementById('video-upload');
        this.audioInput = document.getElementById('audio-upload');
        this.modeToggle = document.getElementById('mode-toggle');

        this.playPause = document.getElementById('play-pause');
        this.volume = document.getElementById("video-volume");
        this.scale = document.getElementById("video-scale");

        this.showProgram = document.getElementById("show-program");
        this.showJFA = document.getElementById("show-jfa");
        this.radianceModifier = document.getElementById("radiance-modifier");

        this.videoInput.addEventListener('change', e => this.handleVideo(e));
        this.audioInput.addEventListener('change', e => this.handleAudio(e));

        this.playPause.addEventListener('click', () => {
          if(this.modeToggle.checked) {
            this.bus.emit('video:toggle');
          } else {
            this.bus.emit('audio:toggle');
          }
        });
        
        this.modeToggle.addEventListener('change', () => { //TODO:seperation should be on different pages in a sense
          this.bus.emit('mode:changed', this.modeToggle.checked);

          const radiance = document.getElementById("radiance-modifier");
          if(this.modeToggle.checked) {
            radiance.value = 2;
          }
          else {
            radiance.value = 1;
          }

          this.bus.emit('settings:radiance', radiance.value);
          
        });
          
        this.volume.addEventListener('input', () => this.bus.emit('media:volume', (this.volume.value)));
        this.scale.addEventListener('input', () => this.bus.emit('video:scale', (this.scale.value)));

        this.radianceModifier.addEventListener('input', () => {
          this.bus.emit('settings:radiance', this.radianceModifier.value);
        });

        this.showProgram.addEventListener('change', () => {
          this.bus.emit('settings:showProgram', this.showProgram.checked);
        });

        this.showJFA.addEventListener('change', () => {
          this.bus.emit('settings:showJFA', this.showJFA.checked);
        });
        
    }


    handleVideo(e) {
      const file = e.target.files[0];
      const video = document.createElement('video');
      const url = URL.createObjectURL(file);
      
      video.src = url;

      video.onloadeddata = () => {
        console.log("Video loaded");
        
        this.bus.emit('video:loaded', video);
        this.bus.emit('media:volume', (this.volume.value));
        this.bus.emit('video:scale', 1);

        const scaleRange = document.getElementById("video-scale");
        scaleRange.max = Math.max(video.videoWidth, video.videoHeight) / Math.min(video.videoWidth, video.videoHeight);
        scaleRange.value = 1;
      }
    }

    handleAudio(e) {
      const file = e.target.files[0];
      const audio = new Audio();
      const url = URL.createObjectURL(file);
      const trackName = file.name.split('-')[0];
      const artistName = file.name.split('-')[1].replace(/\.[^.]+$/, '');

      console.log(trackName, artistName);


      //this.lrcPlayer.getLRCLIB(trackName, artistName);

      audio.src = url;

      
      audio.onloadeddata = () => {
        console.log("Audio loaded");
        this.bus.emit('audio:loaded', audio, trackName, artistName);
        this.bus.emit('media:volume', (this.volume.value));
      }
    }

}
