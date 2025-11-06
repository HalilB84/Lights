export default class UI {
    constructor(bus) {
        this.bus = bus;

        this.videoInput = document.getElementById('video-upload');
        this.audioInput = document.getElementById('audio-upload');
        this.modeToggle = document.getElementById('mode-toggle');

        this.playPause = document.getElementById('play-pause');
        this.volume = document.getElementById('video-volume');
        this.scale = document.getElementById('video-scale');

        this.showProgram = document.getElementById('show-program');
        this.showJFA = document.getElementById('show-jfa');
        this.radianceModifier = document.getElementById('radiance-modifier');
        this.textScale = document.getElementById('text-scale');

        //firefox shananigans
        this.modeToggle.checked = false;
        this.showProgram.checked = true;
        this.showJFA.checked = false;

        this.videoInput.addEventListener('change', e => this.handleVideo(e));
        this.audioInput.addEventListener('change', e => this.handleAudio(e));

        this.playPause.addEventListener('click', () => {
            if(this.modeToggle.checked) {
                this.bus.emit('video:toggle', false);
            } else {
                this.bus.emit('audio:toggle', false);
            }
        });
        
        this.modeToggle.addEventListener('change', () => { 
            if(this.modeToggle.checked) {
                this.bus.emit('audio:toggle', true);
            } else {
                this.bus.emit('video:toggle', true);
            }
          
            this.bus.emit('mode:changed', this.modeToggle.checked);

            const radiance = document.getElementById('radiance-modifier');
            if(this.modeToggle.checked) {
                radiance.value = 2;
            }
            else {
                radiance.value = 1;
            }

            this.bus.emit('settings:showProgram', this.showProgram.checked = !this.modeToggle.checked);
            this.bus.emit('settings:radiance', radiance.value);
        });
          
        this.volume.addEventListener('input', () => 
            this.bus.emit('media:volume', this.volume.value)
        );
        
        this.scale.addEventListener('input', () => 
            this.bus.emit('video:scale', this.scale.value)
        );

        this.radianceModifier.addEventListener('input', () => 
            this.bus.emit('settings:radiance', this.radianceModifier.value)
        );

        this.showProgram.addEventListener('change', () => 
            this.bus.emit('settings:showProgram', this.showProgram.checked)
        );

        this.showJFA.addEventListener('change', () => 
            this.bus.emit('settings:showJFA', this.showJFA.checked)
        );

        this.textScale.addEventListener('input', () => 
            this.bus.emit('settings:textScale', this.textScale.value)
        );
    }

    handleVideo(e) {
        const file = e.target.files[0];
        const video = document.createElement('video');
        const url = URL.createObjectURL(file);
      
        video.src = url;

        video.onloadeddata = () => {
            console.log('Video loaded');
        
            this.bus.emit('video:loaded', video);
            this.bus.emit('media:volume', this.volume.value);
            this.bus.emit('video:scale', 0.5);

            this.modeToggle.checked = true;
            this.modeToggle.dispatchEvent(new Event('change'));
            this.bus.emit('video:toggle', false);

        };
    }

    handleAudio(e) {
        const file = e.target.files[0];
        const audio = new Audio();
        const url = URL.createObjectURL(file);
        const trackName = file.name.split('-')[0];
        const artistName = file.name.split('-')[1].replace(/\.[^.]+$/, '');

        audio.src = url;

        audio.onloadeddata = () => {
            console.log('Audio loaded');
            this.bus.emit('audio:loaded', audio, trackName, artistName);
            this.bus.emit('media:volume', this.volume.value);

            this.modeToggle.checked = false;
            this.modeToggle.dispatchEvent(new Event('change'));
        };
    }
}
