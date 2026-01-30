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

	palettes: number[][][] = [
		[
			[0.067, 1.0, 0.74],
			[0.0, 1.0, 0.63],
			[0.333, 0.15, 0.49],
			[0.0, 0.0, 0.05],
		],
		[
			[0.167, 0.35, 0.87],
			[0.025, 0.7, 0.45],
			[0.425, 0.28, 0.58],
			[0.0, 0.0, 0.1],
		],
		[
			[0.1, 1.0, 0.5],
			[0.5, 0.7, 0.81],
			[0.0, 1.0, 0.5],
			[0.667, 0.6, 0.05],
		],
		[
			[0.144, 0.75, 0.79],
			[0.0, 1.0, 0.68],
			[0.506, 0.25, 0.5],
			[0.311, 0.6, 0.82],
		],
		[
			[0.022, 1.0, 0.5],
			[0.5, 1.0, 0.25],
			[0.544, 1.0, 0.33],
			[0.625, 0.6, 0.02],
		],
	];
	paletteIndex = 0;

	constructor(width: number, height: number, scaleOverlay: number) {
		super(width, height, scaleOverlay);

		this.circles = [];
		this.walls = [];
		this.createScene();

		document.querySelector("canvas")?.addEventListener("click", () => {
			this.changeColors();
		});
	}
	reset() {
		this.dispose();

		this.circles = [];
		this.walls = [];

		this.createScene();
	}

	createScene() {
		this.engine = Matter.Engine.create({
			gravity: { x: 0, y: 0, scale: 0 },
		});

		this.scene.clear();
		this.sceneOverlay.clear();

		//size are in pixels because camera size maps to texture size and prettier is kiilling this
		const geometries = [new THREE.CircleGeometry(10, 32), new THREE.CircleGeometry(17, 32), new THREE.CircleGeometry(21, 32), new THREE.CircleGeometry(25, 32)];

		const materials = [new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(this.palettes[this.paletteIndex][0][0], this.palettes[this.paletteIndex][0][1], this.palettes[this.paletteIndex][0][2]) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(this.palettes[this.paletteIndex][1][0], this.palettes[this.paletteIndex][1][1], this.palettes[this.paletteIndex][1][2]) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(this.palettes[this.paletteIndex][2][0], this.palettes[this.paletteIndex][2][1], this.palettes[this.paletteIndex][2][2]) }), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(this.palettes[this.paletteIndex][3][0], this.palettes[this.paletteIndex][3][1], this.palettes[this.paletteIndex][3][2]) })];

		for (let i = 0; i < 65; i++) {
			const geom = geometries[Math.floor(Math.random() * geometries.length)];
			const mat = materials[Math.floor(i % materials.length)];

			const mesh = new THREE.Mesh(geom, mat);
			this.scene.add(mesh);

			const meshOverlay = new THREE.Mesh(geom, mat);
			this.sceneOverlay.add(meshOverlay);

			const centerX = 0; //-this.width / 2 + (this.width / 20) * i;
			const centerY = 0; //-this.height / 2 + (this.height / 20) * i;

			const body = Matter.Bodies.circle(centerX, centerY, geom.parameters.radius, { restitution: 1.0, frictionAir: 0.025 });
			Matter.Composite.add(this.engine.world, body);

			this.circles.push({ body, mesh, meshOverlay });
		}

		const thickness = 10;
		const options = { isStatic: true, restitution: 0.8 };

		this.walls.push(Matter.Bodies.rectangle(0, this.height / 2 + thickness / 2, this.width + thickness, thickness, options));
		this.walls.push(Matter.Bodies.rectangle(0, -this.height / 2 - thickness / 2, this.width + thickness, thickness, options));
		this.walls.push(Matter.Bodies.rectangle(-this.width / 2 - thickness / 2, 0, thickness, this.height + thickness, options));
		this.walls.push(Matter.Bodies.rectangle(this.width / 2 + thickness / 2, 0, thickness, this.height + thickness, options));

		Matter.Composite.add(this.engine.world, this.walls);
	}

	update(delta: number, mouse: { x: number; y: number }) {
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

			if (body.speed < 0.5 && body.speed != 0) {
				Matter.Body.setSpeed(body, 0.5);
			}

			//mesh.material.color.setHSL(this.palettes[this.paletteIndex][i % 4][0], this.palettes[this.paletteIndex][i % 4][1], beat);
		}

		this.changeSpeed(70, 1, mouse);
	}

	changeColors() {
		this.paletteIndex = (this.paletteIndex + 1) % this.palettes.length;
		for (let i = 0; i < 4; i++) {
			this.circles[i].mesh.material.color.setHSL(this.palettes[this.paletteIndex][i][0], this.palettes[this.paletteIndex][i][1], this.palettes[this.paletteIndex][i][2]);
		}
	}

	changeSpeed(threshold: number, force: number, mouse?: { x: number; y: number }) {
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
				Matter.Body.setVelocity(body, {
					x: body.velocity.x + force * Math.cos(angle),
					y: body.velocity.y + force * Math.sin(angle),
				});
			}
		}
	}

	dispose() {
		for (const cir of this.circles) {
			cir.mesh.geometry.dispose();
			cir.mesh.material.dispose();
		}
	}
}
