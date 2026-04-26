import * as THREE from "three";
import { Playable } from "./playable";

export class Video extends Playable {
    mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;

    constructor(width: number, height: number) {
        super(width, height);
        this.createScene();
    }

    reset() {}

    createScene() {
        this.scene.clear();

        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial();
        this.mesh = new THREE.Mesh(geometry, material);

        this.scene.add(this.mesh);
        this.volScene = this.scene;
    }

    update(space: number, texture: THREE.VideoTexture | null, width: number, height: number) {
        if (texture && this.mesh.material.map === null) {
            this.mesh.material.needsUpdate = true;
        }

        this.mesh.material.map = texture;

        const scale = Math.min(this.width / width, this.height / height) * space;
        const actualWidth = width * scale;
        const actualHeight = height * scale;

        this.mesh.scale.set(actualWidth, actualHeight, 1);
    }

    volumetrics(_toggle: boolean): void {}

    dispose() {
        this.mesh.material.dispose();
        this.mesh.geometry.dispose();
    }
}
