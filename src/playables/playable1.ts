import * as THREE from "three";
import Matter from "matter-js";
import { Playable } from "./playable";

//inspired by https://akari.lusion.co/#spheres (i promise I didnt look at their code so no copying)
//i have no idea how they have achieve those color palletes but it looks crazy good. 
//the colors are extracted from screenshoots using gemini. I hope this is not violating copyright

//https://brm.io/matter-js/docs/classes/Engine.html
export class Playable1 extends Playable {
	circles: { body: Matter.Body; mesh: THREE.Mesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>; meshOverlay: THREE.Mesh }[];

	walls: Matter.Body[];
	engine: Matter.Engine;

	constructor(width: number, height: number, scaleOverlay: number) {
		super(width, height, scaleOverlay);

		this.circles = [];
		this.walls = [];
		this.createScene();

		document.querySelector("canvas")?.addEventListener("click", () => {//no
			this.applyForce(1, 0.03);
		});
	}
	reset() {
		this.dispose();

		this.circles = [];
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

		//size are in pixels because camera size maps to texture size and prettier is kiilling this
		const geometries = [new THREE.CircleGeometry(10, 32), new THREE.CircleGeometry(17, 32), new THREE.CircleGeometry(21, 32), new THREE.CircleGeometry(25, 32)];

		//const materials = [new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.067, 1.0, 0.74) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.0, 1.0, 0.63) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.333, 0.15, 0.49) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.0, 0.0, 0.05) })];
		//const materials = [new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.167, 0.35, 0.87) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.025, 0.70, 0.45) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.425, 0.28, 0.58) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.0, 0.0, 0.10) })];
		//const materials = [new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.1, 1.0, 0.5) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.5, 0.70, 0.81) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.0, 1.0, 0.5) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.667, 0.60, 0.05) })];
		//const materials = [new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.144, 0.75, 0.79) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.0, 1.0, 0.68) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.506, 0.25, 0.50) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.311, 0.60, 0.82) })];
		const materials = [new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.022, 1.0, 0.5) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.5, 1.0, 0.25) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.544, 1.0, 0.33) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.625, 0.60, 0.02) })];


		for (let i = 0; i < 55; i++) {
			const geom = geometries[Math.floor(Math.random() * geometries.length)];
			const mat = materials[Math.floor(Math.random() * materials.length)];

			const mesh = new THREE.Mesh(geom, mat);
			this.scene.add(mesh);

			const meshOverlay = new THREE.Mesh(geom, mat);
			this.sceneOverlay.add(meshOverlay);

			const centerX = 0; //-this.width / 2 + (this.width / 20) * i;
			const centerY = 0; //-this.height / 2 + (this.height / 20) * i;

			const body = Matter.Bodies.circle(centerX, centerY, geom.parameters.radius, { restitution: 0.8, frictionAir: 0.015 });
			Matter.Composite.add(this.engine.world, body);

			this.circles.push({ body, mesh, meshOverlay });
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

	update(delta: number, mouse: { x: number; y: number }) {
		if (!this.isReady) return;

		Matter.Engine.update(this.engine, Math.min(delta, (1 / 60) * 1000));

		for (let i = 0; i < this.circles.length; i++) {
			let { body, mesh, meshOverlay } = this.circles[i];

			//bound check rq because bodies can escape the walls
			if (body.position.x < -this.width / 2 || body.position.x > this.width / 2 || body.position.y < -this.height / 2 || body.position.y > this.height / 2) {
				Matter.Body.setPosition(body, { x: 0, y: 0 });
			}

			mesh.position.set(body.position.x, body.position.y, 0);
			mesh.rotation.set(0, 0, body.angle);

			meshOverlay.position.set(body.position.x * this.scaleOverlay, body.position.y * this.scaleOverlay, 0);
			meshOverlay.scale.set(this.scaleOverlay, this.scaleOverlay, 1);
			meshOverlay.rotation.set(0, 0, body.angle);

			//this.rectangles[i].color = (this.rectangles[i].color + delta * 0.0004) % 1;
			//console.log(this.rectangles[i].color);
			//mesh.material.color.setHSL(1, 1, this.circles[i].color);
		}

		this.applyForce(70, 0.010, mouse);
	}

	applyForce(threshold: number, force: number, mouse?: { x: number; y: number }) {
		for (let i = 0; i < this.circles.length; i++) {
			let { body } = this.circles[i];

			let angle;
			let distance;

			if (mouse) {
				const dx = body.position.x - mouse.x;
				const dy = body.position.y - mouse.y;
				angle = Math.atan2(dy, dx);
				distance = Math.hypot(dx, dy);
			} else {
				distance = 0;
				angle = Math.random() * Math.PI * 2;
			}

			if (distance < threshold) {
				Matter.Body.applyForce(body, body.position, {
					x: force * body.mass * Math.cos(angle),
					y: force * body.mass * Math.sin(angle),
				});
			}
		}
	}

	dispose(): void {
		for (const cir of this.circles) {
			cir.mesh.geometry.dispose();
			cir.mesh.material.dispose();
		}
	}
}
