import * as THREE from "three";
import { Playable } from "./playable";

export class Video extends Playable {
    mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
    volMesh: THREE.InstancedMesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;

    variant = 1; //this way of adding modes wont scale well but idk anything else? maybe i should stack them?

    constructor(width: number, height: number) {
        super(width, height);
        this.createScene();
    }

    reset() {
        this.dispose();
        this.scene.clear();
        this.volScene.clear();

        this.createScene();
    }

    createScene() {
        this.scene.clear();

        const geom = new THREE.PlaneGeometry(1, 1);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.mesh = new THREE.Mesh(geom, mat);

        if (this.variant === 2) {
            this.ring();
        }

        this.scene.add(this.mesh);
    }

    update(texture: THREE.VideoTexture | null, width: number, height: number, s: { scale: number; scene: number }) {
        if (s.scene !== this.variant) {
            this.variant = s.scene;
            this.reset();
            return;
        }

        if (!this.mesh.material.map && texture) {
            this.mesh.material.needsUpdate = true;
        }

        this.mesh.material.map = texture;

        if (width === 0 || height === 0) {
            width = this.width;
            height = this.height;
        }

        const scale = Math.min(this.width / width, this.height / height) * s.scale;
        const actualWidth = width * scale;
        const actualHeight = height * scale;

        this.mesh.scale.set(actualWidth, actualHeight, 1);

        if (this.variant === 2) {
            this.ringUpdate(actualWidth, actualHeight, s.scale);
        }
    }

    volumetrics(toggle: boolean): void {
        if (toggle) {
            this.volScene.add(this.mesh);
        } else {
            this.scene.add(this.mesh);
        }
    }

    dispose() {
        this.mesh.material.dispose();
        this.mesh.geometry.dispose();
        this.volMesh?.geometry.dispose();
        this.volMesh?.material.dispose();
    }

    ring() {
        const volGeom = new THREE.CircleGeometry(1, 12);
        const volMat = new THREE.MeshBasicMaterial({
            blending: THREE.NoBlending,
            opacity: 0.45,
            color: new THREE.Color().setRGB(0, 0, 0),
        });

        this.volMesh = new THREE.InstancedMesh(volGeom, volMat, 20);
        this.scene.add(this.volMesh);
    }

    ringUpdate(actualWidth: number, actualHeight: number, s: number) {
        if (this.variant === 2) {
            const pos = new THREE.Object3D();

            for (let i = 0; i < this.volMesh.count; i++) {
                const ang = (i / this.volMesh.count) * Math.PI * 2 + performance.now() * 0.0005;
                const rad = (Math.hypot(actualWidth, actualHeight) / 2) * 1.1;

                const cScale = (Math.min(this.width, this.height) / 20) * s;

                pos.position.set(Math.cos(ang) * rad, Math.sin(ang) * rad, 0);
                pos.scale.set(cScale, cScale, 1);
                pos.updateMatrix();

                this.volMesh.setMatrixAt(i, pos.matrix);
            }

            this.volMesh.instanceMatrix.needsUpdate = true;
        }
    }
}
