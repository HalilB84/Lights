import * as THREE from "three";
import { Playable } from "./playable";

export class Video extends Playable {
    mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
    meshOverlay: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;

    constructor(width: number, height: number, scaleOverlay: number) {
        super(width, height, scaleOverlay);
        this.createScene();
    }

    reset() { }

    createScene() {
        this.scene.clear();
        this.sceneOverlay.clear();

        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial();
        this.mesh = new THREE.Mesh(geometry, material);
        this.meshOverlay = new THREE.Mesh(geometry, material);

        this.scene.add(this.mesh);
        this.sceneOverlay.add(this.meshOverlay);
    }

    update(space: number, texture: THREE.VideoTexture | null, width: number, height: number) {
        if(texture && this.mesh.material.map === null) { 
            this.meshOverlay.material.needsUpdate = this.mesh.material.needsUpdate = true;
        }

        this.meshOverlay.material.map = this.mesh.material.map = texture;
        
        const scale = Math.min(this.width / width, this.height / height) * space;
        const actualWidth = width * scale;
        const actualHeight = height * scale

        this.mesh.scale.set(actualWidth, actualHeight, 1);
        this.meshOverlay.scale.set(actualWidth * this.scaleOverlay, actualHeight * this.scaleOverlay, 1);

    }

    dispose() { }
}
