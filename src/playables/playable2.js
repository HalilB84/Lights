import * as THREE from "three";
import Matter from "matter-js";

export default class Playable2 {
	constructor(width, height, widthOverlay, heightOverlay, scaleOverlay) {
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

		this.createScene();
	}

	resize(width, height, widthOverlay, heightOverlay) {
		this.width = width;
		this.height = height;

		this.widthOverlay = widthOverlay;
		this.heightOverlay = heightOverlay;

		this.camera = new THREE.OrthographicCamera(-width / 2, width / 2, height / 2, -height / 2, 0, 1);
		this.cameraOverlay = new THREE.OrthographicCamera(-widthOverlay / 2, widthOverlay / 2, heightOverlay / 2, -heightOverlay / 2, 0, 1);

		this.createScene();
	}

	createScene() {
		this.isReady = false;

		this.isReady = true;
	}

	update(delta, mouse) {
		if (!this.isReady) return;
	}
}
