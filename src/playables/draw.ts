import * as THREE from "three";
import { Playable } from "./playable";
import { accumulate } from "./pShaders/accum";

export class Draw extends Playable {
    meshDraw: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
    sceneDraw: THREE.Scene;

    mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
    meshOverlay: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
    ping: THREE.WebGLRenderTarget;
    pong: THREE.WebGLRenderTarget;

    constructor(width: number, height: number) {
        super(width, height);
        this.createScene();
    }

    reset() {
        this.scene.clear();
        this.volScene.clear();

        this.dispose();
        this.createScene();
    }

    createScene() {
        this.ping = new THREE.WebGLRenderTarget(this.width, this.height);
        this.pong = this.ping.clone();

        const geom = new THREE.PlaneGeometry(this.width, this.height);
        const mat = accumulate();

        this.meshDraw = new THREE.Mesh(geom, mat);
        this.meshDraw.material.uniforms.resolution.value = [this.width, this.height];

        this.sceneDraw = new THREE.Scene();
        this.sceneDraw.add(this.meshDraw);

        this.mesh = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({ map: this.pong.texture, blending: THREE.NoBlending }));
        this.meshOverlay = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({ map: this.pong.texture, blending: THREE.NoBlending, alphaTest: 0.99 }));

        this.scene.add(this.mesh);
        this.volScene.add(this.meshOverlay);
    }

    update(renderer: THREE.WebGLRenderer, input: boolean, ppos: { x: number; y: number }, mpos: { x: number; y: number }, val: { color: { r: number; g: number; b: number }; alpha: number; size: number; clear: boolean }) {
        if (val.clear) {
            renderer.setRenderTarget(this.pong);
            renderer.clear();
            renderer.setRenderTarget(this.ping);
            renderer.clear();
        }

        if (!input) return;

        this.meshDraw.material.uniforms.color.value = [val.color.r / 255, val.color.g / 255, val.color.b / 255];
        this.meshDraw.material.uniforms.alpha.value = val.alpha;
        this.meshDraw.material.uniforms.size.value = val.size;
        this.meshDraw.material.uniforms.m.value = [mpos.x, mpos.y];
        this.meshDraw.material.uniforms.pm.value = [ppos.x, ppos.y];
        this.meshDraw.material.uniforms.prev.value = this.pong.texture;

        renderer.setRenderTarget(this.ping);
        renderer.render(this.meshDraw, this.camera);

        this.mesh.material.map = this.ping.texture;
        this.meshOverlay.material.map = this.ping.texture;

        [this.ping, this.pong] = [this.pong, this.ping];
    }

    volumetrics(_toggle: boolean) {}

    dispose() {
        this.meshDraw.material.dispose();
        this.meshDraw.geometry.dispose();

        this.mesh.material.dispose();
        this.mesh.geometry.dispose();

        this.meshOverlay.material.dispose();
        this.meshOverlay.geometry.dispose();

        this.ping.dispose();
        this.pong.dispose();
    }
}
