import * as THREE from 'three';
import Stats from 'stats-gl';
import paint from './shaders/paint.js';
import seed from './shaders/seed.js';
import jfa from './shaders/jfa.js';
import distance from './shaders/distance.js';
import ray from './shaders/ray.js';
import upscale from './shaders/upscale.js';
import resizer from './shaders/resizer.js';
import bilateral from './shaders/bilateral.js';
import UI from './ui.js';
import LRC from './lrcPlayer.js';
import Text from './text.js';
import EventBus from './events.js';

//realistically we dont even need three.js for a 2d scene but since it reduces boilerplate and provides a lot of useful functionality, we ball//we will use three.js for the sake of learning

class Main {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.autoClear = false;
    //this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(this.renderer.domElement);

    this.stats = new Stats({ // wait I just realized I don't know how three js handles webgl
      trackGPU: true,
      trackHz: false,
      trackCPT: false,
      logsPerSecond: 4,
      graphsPerSecond: 30,
      samplesLog: 40, 
      samplesGraph: 10, 
      precision: 2, 
      horizontal: true,
      minimal: false, 
      mode: 0
  });
  
    document.body.appendChild(this.stats.dom);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); 

    this.JFAscale = isMobile ? 4 : 2;
    this.jfaWidth = Math.floor(window.innerWidth / this.JFAscale);
    this.jfaHeight = Math.floor(window.innerHeight / this.JFAscale);


    this.raymarchScale = isMobile ? 4 : 2;
    this.raymarchWidth = Math.floor(window.innerWidth / this.raymarchScale);
    this.raymarchHeight = Math.floor(window.innerHeight / this.raymarchScale);

    this.mouse = {x: null, y: null};

    this.canvas = this.renderer.domElement;

    this.bus = new EventBus();
    this.ui = new UI(this.bus);
    //uhh bunch of things that need fix here 
    this.text = new Text(this.jfaWidth, this.jfaHeight, isMobile ? 0.5 : 1.0, false);
    this.textOverlay = new Text(window.innerWidth, window.innerHeight, isMobile ? 0.5 * this.JFAscale : this.JFAscale, true); 
    this.lrcPlayer = new LRC();

    //state management? yessir
    this.state = {
      modeIsVideo: false,
      video: {
        element: null,
        texture: null,
        aspect: null,
        scale: null,
        volume: null,
      },
      audio: {
        element: null,
        volume: null,
      },
      settings: {
        showProgram: true,
        showJFA: false,
        radiance: 1.0,
        textScale: null,
      },
    };

    this.bus.on('mode:changed', (isVideo) => { 
      this.state.modeIsVideo = isVideo; 
    });

    this.bus.on('settings:showProgram', (value) => { this.state.settings.showProgram = value; });
    this.bus.on('settings:showJFA', (value) => { this.state.settings.showJFA = value; });
    this.bus.on('settings:radiance', (value) => { this.state.settings.radiance = value; });
    this.bus.on('settings:textScale', (value) => { this.state.settings.textScale = value;
      this.text.scale = this.state.settings.textScale;
      this.textOverlay.scale = this.state.settings.textScale * this.JFAscale;
      this.text.createText();
      this.textOverlay.createText();
    });

    this.bus.on('video:loaded', (video) => {
      if (this.state.video.element) this.state.video.element.pause();
      this.state.video.element = video;
      this.state.video.element.volume = this.state.video.volume;
      this.state.video.texture = new THREE.VideoTexture(video);
      this.state.video.texture.minFilter = THREE.LinearFilter;
      this.state.video.texture.magFilter = THREE.LinearFilter;
      this.state.video.texture.format = THREE.RGBAFormat;
      this.state.video.aspect = video.videoWidth / video.videoHeight;
    });

    this.bus.on('video:toggle', () => {
      const video = this.state.video.element; 
      if (!video) return;
      if (video.paused) video.play(); else video.pause();
    });

    this.bus.on('video:pause', () => {
      const video = this.state.video.element;
      if (video && !video.paused) video.pause();
    });

    this.bus.on('audio:pause', () => {
      const audio = this.state.audio.element;
      if (audio && !audio.paused) audio.pause();
    });

    this.bus.on('media:volume', (vol) => {
      if (this.state.video.element) this.state.video.element.volume = vol;
      if (this.state.audio.element) this.state.audio.element.volume = vol;
    });

    this.bus.on('video:scale', (value) => { this.state.video.scale = value; });

    this.bus.on('audio:loaded', (audio, trackName, artistName) => {
      if (this.state.audio.element) this.state.audio.element.pause();
      this.state.audio.element = audio;

      //console.log(trackName, artistName);
      this.lrcPlayer.getLRCLIB(trackName, artistName);


      this.state.audio.element.addEventListener('timeupdate', () => {
        const lyric = this.lrcPlayer.update(this.state.audio.element.currentTime * 1000);


        this.text.createText(lyric);
        this.textOverlay.createText(lyric);
        
      });
    });

    this.bus.on('audio:toggle', () => {
      const audio = this.state.audio.element; 
      if (!audio || !this.lrcPlayer.isReady) return;
      if (audio.paused) audio.play(); else audio.pause();
    });


    this.initialize();
    this.shaders();

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = (e.clientX - rect.left) / this.JFAscale;
      this.mouse.y = (rect.height - (e.clientY - rect.top)) / this.JFAscale;
    });

    window.addEventListener('resize', () => { });

    this.renderer.setAnimationLoop(this.animate.bind(this));
    this.renderer.setSize(window.innerWidth, window.innerHeight); 
    
  }


  initialize() {
    
    this.blueNoiseTexture = new THREE.TextureLoader().load('LDR_LLL1_0.png');
    this.blueNoiseTexture.wrapS = THREE.RepeatWrapping;
    this.blueNoiseTexture.wrapT = THREE.RepeatWrapping;
    this.blueNoiseTexture.minFilter = THREE.NearestFilter;
    this.blueNoiseTexture.magFilter = THREE.NearestFilter;
    
    // All render targets are used to render a texture to a texture offscreen
    this.rtA = new THREE.WebGLRenderTarget(this.jfaWidth, this.jfaHeight, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
    });
    
    this.rtB = this.rtA.clone(); //ping pong element so webgl doesnt yell at me for reading and writing to the same texture
        
    this.seedRT = this.rtA.clone();
    
    this.jfaA = this.rtA.clone();
    this.jfaB = this.rtB.clone();
    
    this.currentRT = this.rtA;
    this.previousRT = this.rtB;
    
    this.rayColorRT = new THREE.WebGLRenderTarget(this.raymarchWidth, this.raymarchHeight, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
    });

    this.bilateralRT = this.rayColorRT.clone();
  }

shaders() { //needs cleaning up
  this.paintMaterial = paint();
  this.paintMaterial.uniforms.prevTexture.value = null;
  this.paintMaterial.uniforms.mouse.value = this.mouse;
  this.paintMaterial.uniforms.resolution.value = new THREE.Vector2(this.jfaWidth, this.jfaHeight);
  
  this.seedMaterial = seed();
  this.seedMaterial.uniforms.inputTexture.value = null;
  this.seedMaterial.uniforms.resolution.value = new THREE.Vector2(this.jfaWidth, this.jfaHeight);
  
  this.jfaMaterial = jfa();
  this.jfaMaterial.uniforms.inputTexture.value = null;
  this.jfaMaterial.uniforms.offset.value = null;
  this.jfaMaterial.uniforms.resolution.value = new THREE.Vector2(this.jfaWidth, this.jfaHeight);
  
  this.distanceMaterial = distance();
  this.distanceMaterial.uniforms.inputTexture.value = null;
  this.distanceMaterial.uniforms.resolution.value = new THREE.Vector2(this.jfaWidth, this.jfaHeight);
  
  this.rayMaterial = ray();
  this.rayMaterial.uniforms.iTexture.value = null;
  this.rayMaterial.uniforms.distanceTexture.value = null;
  this.rayMaterial.uniforms.blueNoise.value = this.blueNoiseTexture;
  this.rayMaterial.uniforms.rayCount.value = 32;
  this.rayMaterial.uniforms.resolution.value = new THREE.Vector2(this.jfaWidth, this.jfaHeight);
  this.rayMaterial.uniforms.frame.value = 0;
  
  this.upscaleMaterial = upscale();
  this.upscaleMaterial.uniforms.source.value = null;
  
  this.resizerMaterial = resizer();
  this.resizerMaterial.uniforms.sourceTex.value = null;
  this.resizerMaterial.uniforms.resolution.value = new THREE.Vector2(this.jfaWidth, this.jfaHeight);
  this.resizerMaterial.uniforms.sourceAspect.value = 1.0;
  this.resizerMaterial.uniforms.sourceScale.value = 1.0;
  this.resizerMaterial.uniforms.centerX.value = 0.5; 
  
  this.bilateralMaterial = bilateral();
  this.bilateralMaterial.uniforms.inputTexture.value = null;
  this.bilateralMaterial.uniforms.resolution.value = new THREE.Vector2(this.raymarchWidth, this.raymarchHeight);
  this.bilateralMaterial.uniforms.sigmaSpatial.value = 2.0;
  this.bilateralMaterial.uniforms.sigmaRange.value = 0.3;
  this.bilateralMaterial.uniforms.radius.value = 2;

  this.geometry = new THREE.PlaneGeometry(2, 2);
  this.mesh = new THREE.Mesh(this.geometry, this.paintMaterial);
  this.scene.add(this.mesh);
  
}

animate() {
  this.stats.begin();

  let nextTexture = null; //I legitimately hate this, what even is proper code structure anyways? 

  if(this.state.modeIsVideo) { //Video
    this.mesh.material = this.resizerMaterial;
    this.resizerMaterial.uniforms.sourceTex.value = this.state.video.texture;
    this.resizerMaterial.uniforms.sourceAspect.value = this.state.video.aspect;
    this.resizerMaterial.uniforms.sourceScale.value = this.state.video.scale;

    this.renderer.setRenderTarget(this.previousRT);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);

    nextTexture = this.previousRT.texture;
  } 
  else { //Audio (lyrics)
      nextTexture = this.text.render(this.renderer);
  }

  // paint phase
  this.mesh.material = this.paintMaterial;
  this.paintMaterial.uniforms.prevTexture.value = nextTexture;
  this.renderer.setRenderTarget(this.currentRT);
  this.renderer.clear(); 
  this.renderer.render(this.scene, this.camera);

  //seed phase there has to be a better way to do this
  this.mesh.material = this.seedMaterial;
  this.seedMaterial.uniforms.inputTexture.value = this.currentRT.texture;
  this.renderer.setRenderTarget(this.seedRT);
  this.renderer.clear();
  this.renderer.render(this.scene, this.camera);

  // jfa phase
  let curT = this.seedRT.texture;
  let curJFA = this.jfaA;
  let nextJFA = this.jfaB;
  const passes = Math.ceil(Math.log2(Math.max(this.jfaWidth, this.jfaHeight)));
  this.mesh.material = this.jfaMaterial;

  for(let i = 0; i < passes; i++) {
    this.jfaMaterial.uniforms.inputTexture.value = curT;
    this.jfaMaterial.uniforms.offset.value = Math.pow(2, passes - i - 1);

    this.renderer.setRenderTarget(curJFA);
    this.renderer.render(this.scene, this.camera);

    curT = curJFA.texture;
    [curJFA, nextJFA] = [nextJFA, curJFA]; 
  }


  if (this.state.settings.showJFA) {
    this.mesh.material = this.upscaleMaterial;
    this.upscaleMaterial.uniforms.source.value = curJFA.texture;
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.scene, this.camera);
    return;
  }
 
  //distance phase
  this.mesh.material = this.distanceMaterial;
  this.distanceMaterial.uniforms.inputTexture.value = curT;
  this.renderer.setRenderTarget(curJFA);
  this.renderer.render(this.scene, this.camera);

 
  
  // raymarch phase
  this.mesh.material = this.rayMaterial;
  this.rayMaterial.uniforms.iTexture.value = this.currentRT.texture; 
  this.rayMaterial.uniforms.distanceTexture.value = curJFA.texture; 
  this.rayMaterial.uniforms.frame.value += 1;
  this.rayMaterial.uniforms.radianceModifier.value = this.state.settings.radiance;
  this.rayMaterial.uniforms.showProgram.value = this.state.settings.showProgram;
  
  this.renderer.setRenderTarget(this.rayColorRT); 
  this.renderer.render(this.scene, this.camera);

  this.mesh.material = this.bilateralMaterial;
  this.bilateralMaterial.uniforms.resolution.value.set(this.raymarchWidth, this.raymarchHeight);
  this.bilateralMaterial.uniforms.inputTexture.value = this.rayColorRT.texture;
  this.renderer.setRenderTarget(this.bilateralRT);
  this.renderer.render(this.scene, this.camera);

  this.mesh.material = this.upscaleMaterial;
  this.upscaleMaterial.uniforms.source.value = this.bilateralRT.texture;
  this.renderer.setRenderTarget(null);
  this.renderer.render(this.scene, this.camera);

  if (!this.state.modeIsVideo) {
    this.textOverlay.renderDirect(this.renderer);
  }//TODO: video overlay

 
  //swap for next frame
  [this.currentRT, this.previousRT] = [this.previousRT, this.currentRT]; //tbd
  
  this.stats.end();
  this.stats.update();
}

}

new Main();