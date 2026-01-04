import * as THREE from "three";

export default abstract class PlayableBase {
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

	constructor(width: number, height: number, widthOverlay: number, heightOverlay: number, scaleOverlay: number) {
		this.scene = new THREE.Scene();
		this.camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0, 1);

		this.sceneOverlay = new THREE.Scene();
		this.cameraOverlay = new THREE.OrthographicCamera(-widthOverlay / 2, widthOverlay / 2, heightOverlay / 2, -heightOverlay / 2, 0, 1);

		this.width = width;
		this.height = height;
		this.widthOverlay = widthOverlay;
		this.heightOverlay = heightOverlay;
		this.scaleOverlay = scaleOverlay;
		this.isReady = false;
	}

	resize(width: number, height: number, widthOverlay: number, heightOverlay: number) {
		this.width = width;
		this.height = height;

		this.widthOverlay = widthOverlay;
		this.heightOverlay = heightOverlay;

		this.camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0, 1);
		this.cameraOverlay = new THREE.OrthographicCamera(-widthOverlay / 2, widthOverlay / 2, heightOverlay / 2, -heightOverlay / 2, 0, 1);

		this.reset();
	}

	abstract reset(): void;
	abstract createScene(): void;
	abstract update(...args: any[]): void;
}
