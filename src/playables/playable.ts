import * as THREE from "three";

export abstract class Playable {
	scene: THREE.Scene;
	camera: THREE.OrthographicCamera;
	sceneOverlay: THREE.Scene;
	cameraOverlay: THREE.OrthographicCamera;

	width: number;
	height: number;
	widthOverlay: number;
	heightOverlay: number;
	scaleOverlay: number;

	isReady: boolean;

	constructor(width: number, height: number, scaleOverlay: number) {
		this.width = width;
		this.height = height;

		this.widthOverlay = width * scaleOverlay;
		this.heightOverlay = height * scaleOverlay;
		this.scaleOverlay = scaleOverlay;

		this.isReady = false;

		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(-this.width / 2, this.width / 2, this.height / 2, -this.height / 2, 0, 1);

		this.sceneOverlay = new THREE.Scene();
		this.cameraOverlay = new THREE.OrthographicCamera(-this.widthOverlay / 2, this.widthOverlay / 2, this.heightOverlay / 2, -this.heightOverlay / 2, 0, 1);
	}

	resize(width: number, height: number, scaleOverlay: number) {
		this.width = width;
		this.height = height;

		this.widthOverlay = width * scaleOverlay;
		this.heightOverlay = height * scaleOverlay;
		this.scaleOverlay = scaleOverlay;

		this.camera = new THREE.OrthographicCamera(-this.width / 2, this.width / 2, this.height / 2, -this.height / 2, 0, 1);
		this.cameraOverlay = new THREE.OrthographicCamera(-this.widthOverlay / 2, this.widthOverlay / 2, this.heightOverlay / 2, -this.heightOverlay / 2, 0, 1);

		this.reset();
	}

	abstract reset(): void;
	abstract createScene(): void;
	abstract update(...args: any[]): void;
	abstract dispose(): void;
}
