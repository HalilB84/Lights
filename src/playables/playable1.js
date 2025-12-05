import * as THREE from "three";
import Matter from "matter-js";

export default class Playable1 {
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

		this.rectangles = [];
		this.walls = [];

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

		this.rectangles = [];
		this.walls = [];

		this.createScene();
	}

	createScene() {
		this.isReady = false;

		this.engine = Matter.Engine.create({
			gravity: { x: 0, y: 0, scale: 0 },
		});
		
		this.scene.clear();
		this.sceneOverlay.clear();

		const rectangleWidth = 100;
		const rectangleHeight = 5;

		for (let i = 0; i < 20; i++) {
			const geometry = new THREE.PlaneGeometry(rectangleWidth, rectangleHeight);
			const material = new THREE.MeshBasicMaterial();
			const mesh = new THREE.Mesh(geometry, material);
			this.scene.add(mesh);

			const meshOverlay = new THREE.Mesh(geometry, material);
			this.sceneOverlay.add(meshOverlay);

			const centerX = -this.width / 2 + (this.width / 20) * i;
			const centerY = -this.height / 2 + (this.height / 20) * i;

			const body = Matter.Bodies.rectangle(centerX, centerY, rectangleWidth, rectangleHeight, { restitution: 1.0 });
			Matter.Composite.add(this.engine.world, body);

			this.rectangles.push({ body, mesh, meshOverlay, color: Math.random() });
		}

		const thickness = 10;
		const options = { isStatic: true, restitution: 0.9 };

		this.walls.push(Matter.Bodies.rectangle(0, this.height / 2 + thickness / 2, this.width + thickness, thickness, options));
		this.walls.push(Matter.Bodies.rectangle(0, -this.height / 2 - thickness / 2, this.width + thickness, thickness, options));
		this.walls.push(Matter.Bodies.rectangle(-this.width / 2 - thickness / 2, 0, thickness, this.height + thickness, options));
		this.walls.push(Matter.Bodies.rectangle(this.width / 2 + thickness / 2, 0, thickness, this.height + thickness, options));

		Matter.Composite.add(this.engine.world, this.walls);

		this.isReady = true;
	}

	update(delta, mouse) {
		if (!this.isReady) return;

		Matter.Engine.update(this.engine, Math.min(delta, 1 / 30 * 1000));

		for (let i = 0; i < this.rectangles.length; i++) {
			let { body, mesh, meshOverlay} = this.rectangles[i];

			//bound check rq
			if (body.position.x < -this.width / 2 || body.position.x > this.width / 2 || body.position.y < -this.height / 2 || body.position.y > this.height / 2) {
				Matter.Body.setPosition(body, { x: 0, y: 0 });
			}

			mesh.position.set(body.position.x, body.position.y, 0);
			mesh.rotation.set(0, 0, body.angle);

			meshOverlay.position.set(body.position.x * this.scaleOverlay, body.position.y * this.scaleOverlay, 0);
			meshOverlay.scale.set(this.scaleOverlay, this.scaleOverlay);
			meshOverlay.rotation.set(0, 0, body.angle);

			this.rectangles[i].color = (this.rectangles[i].color + delta * 0.0004) % 1;
			mesh.material.color.setHSL(this.rectangles[i].color, 1.0, 0.6);

			const dx = body.position.x - mouse.x;
			const dy = body.position.y - mouse.y;
			const angle = Math.atan2(dy, dx);
			const distance = Math.hypot(dx, dy);

			if (distance < 50) {
				Matter.Body.applyForce(body, body.position, {
					x: 0.005 * Math.cos(angle),
					y: 0.005 * Math.sin(angle),
				});
			}
		}
	}
}
