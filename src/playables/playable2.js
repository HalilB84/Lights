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

		this.circles = [];

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

		this.circles = [];

		this.createScene();
	}

	createScene() {
		this.isReady = false;

		this.scene.clear();
		this.sceneOverlay.clear();

		const numCircles = 10;

		for (let i = 0; i < numCircles; i++) {
			for (let j = 0; j < numCircles; j++) {
				const geometry = new THREE.CircleGeometry(10, 32);
				const material = new THREE.MeshBasicMaterial();
				const mesh = new THREE.Mesh(geometry, material);
				mesh.material.color.setHSL(0, 0, 0);

				const centerX = (this.width / numCircles) * (i + 0.5) - this.width / 2;
				const centerY = (this.height / numCircles) * (j + 0.5) - this.height / 2;

				mesh.position.set(centerX, centerY, 0);
				this.scene.add(mesh);

				const meshOverlay = new THREE.Mesh(geometry, material);
				meshOverlay.position.set(centerX * this.scaleOverlay, centerY * this.scaleOverlay, 0);
				meshOverlay.scale.set(this.scaleOverlay, this.scaleOverlay, 1);
				this.sceneOverlay.add(meshOverlay);

				this.circles.push({ mesh, meshOverlay});
			}
		}

		this.isReady = true;
	}

	update(delta, mouse) {
		if (!this.isReady) return;

		for (let i = 0; i < this.circles.length; i++) {

			if(Math.pow(this.circles[i].mesh.position.x - mouse.x, 2) + Math.pow(this.circles[i].mesh.position.y - mouse.y, 2) < 10000) {
				this.circles[i].mesh.material.color.setHSL(1, 1, 0.5);
			} else {
				this.circles[i].mesh.material.color.setHSL(0, 0, 0);
			}

		}
	}
}
