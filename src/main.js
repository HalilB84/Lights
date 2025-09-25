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


//realistically we dont even need three.js for a 2d scene but since it reduces boilerplate and provides a lot of useful functionality, we ball//we will use three.js for the sake of learning


class Main {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.renderer = new THREE.WebGLRenderer();
    document.body.appendChild(this.renderer.domElement);

    this.stats = new Stats({ // when webgl 2 switch is done update this for gpu data
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

    this.JFAscale = 2;
    this.jfaWidth = window.innerWidth / this.JFAscale;
    this.jfaHeight = window.innerHeight / this.JFAscale;

    this.raymarchScale = 2;
    this.raymarchWidth = window.innerWidth / this.raymarchScale;
    this.raymarchHeight = window.innerHeight / this.raymarchScale;

    this.mouse = {x: null, y: null};

    this.canvas = this.renderer.domElement;

    this.ui = new UI();

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
        
    this.seedRT = new THREE.WebGLRenderTarget(this.jfaWidth, this.jfaHeight, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
    });
    
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

    this.bilateralRT = new THREE.WebGLRenderTarget(this.raymarchWidth, this.raymarchHeight, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
    });    
  }

shaders() { //needs cleaning up
  this.paintMaterial = paint();
  this.paintMaterial.uniforms.prevTexture.value = null;
  this.paintMaterial.uniforms.mouse.value = this.mouse;
  this.paintMaterial.uniforms.resolution.value = new THREE.Vector2(this.jfaWidth, this.jfaHeight);
  
  this.seedMaterial = seed();
  this.seedMaterial.uniforms.inputTexture.value = null;
  
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
  this.bilateralMaterial.uniforms.sigmaRange.value = 0.1;
  this.bilateralMaterial.uniforms.radius.value = 2;

  this.geometry = new THREE.PlaneGeometry(2, 2);
  this.mesh = new THREE.Mesh(this.geometry, this.paintMaterial);
  this.scene.add(this.mesh);
  
}

animate() {
  this.stats.begin();


  this.mesh.material = this.resizerMaterial;
  this.resizerMaterial.uniforms.sourceTex.value = this.ui.videoTexture;
  this.resizerMaterial.uniforms.sourceAspect.value = this.ui.videoAspect;
  this.resizerMaterial.uniforms.sourceScale.value = this.ui.videoScale;
   

  this.renderer.setRenderTarget(this.previousRT);
  this.renderer.clear();
  this.renderer.render(this.scene, this.camera);

  // paint phase
  this.mesh.material = this.paintMaterial;
  this.paintMaterial.uniforms.prevTexture.value = this.previousRT.texture;
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

  //swap for next frame
  [this.currentRT, this.previousRT] = [this.previousRT, this.currentRT]; //tbd
  
  this.stats.end();
  this.stats.update();
}

}

new Main();