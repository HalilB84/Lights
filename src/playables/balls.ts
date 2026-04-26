import * as THREE from "three";
import Matter from "matter-js";
import { Playable } from "./playable";

//inspired by https://akari.lusion.co/#spheres (i promise I didnt look at their code so no copying)
//i have no idea how they have achieve those color palletes but it looks crazy good.
//the colors are extracted from screenshoots using gemini. I hope this is not violating copyright

//https://brm.io/matter-js/docs/classes/Engine.html
export class Balls extends Playable {
    circles: { body: Matter.Body; size: number }[];
    mesh: THREE.InstancedMesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;

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

    constructor(width: number, height: number) {
        super(width, height);

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


        //const materials  = [new THREE.MeshBasicMaterial({color: new THREE.Color().setRGB(1.0, 0.5, 0, THREE.SRGBColorSpace)})];

        const geom = new THREE.CircleGeometry(1, 12);
        const mat = new THREE.MeshBasicMaterial();

        this.mesh = new THREE.InstancedMesh(geom, mat, 100);

        const pos = new THREE.Object3D();
        const color = new THREE.Color();

        for (let i = 0; i < this.mesh.count; i++) {

            const centerX = 0; //-this.width / 2 + (this.width / 20) * i;
            const centerY = 0; //-this.height / 2 + (this.height / 20) * i;
            const size = Math.ceil(Math.random() * 12) + 2;

            pos.scale.set(size, size, 1);
            pos.updateMatrix();
            this.mesh.setMatrixAt(i, pos.matrix);
            color.setHSL(this.palettes[this.paletteIndex][i % 4][0], this.palettes[this.paletteIndex][i % 4][1], this.palettes[this.paletteIndex][i % 4][2]);
            this.mesh.setColorAt(i, color);


            const body = Matter.Bodies.circle(centerX, centerY, pos.scale.x, { restitution: 1.0, frictionAir: 0.025 });
            Matter.Composite.add(this.engine.world, body);


            this.circles.push({ body, size });
        }

        this.scene.add(this.mesh);

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
            let { body } = this.circles[i];

            //bound check rq because bodies can escape the walls
            if (body.position.x < -this.width / 2 || body.position.x > this.width / 2 || body.position.y < -this.height / 2 || body.position.y > this.height / 2) {
                Matter.Body.setPosition(body, { x: 0, y: 0 });
            }

            const pos = new THREE.Object3D();

            pos.position.set(body.position.x, body.position.y, 0);
            pos.scale.set(this.circles[i].size, this.circles[i].size, 1);
            pos.updateMatrix();

            this.mesh.setMatrixAt(i, pos.matrix);

            if (body.speed < 0.5) {
                Matter.Body.setSpeed(body, 0.5);
            }
        }

        this.mesh.instanceMatrix.needsUpdate = true;
        this.changeSpeed(100, 1, mouse);
    }

    changeColors() {
        this.paletteIndex = (this.paletteIndex + 1) % this.palettes.length;
        for (let i = 0; i < this.circles.length; i++) {
            const color = new THREE.Color();
            color.setHSL(this.palettes[this.paletteIndex][i % 4][0], this.palettes[this.paletteIndex][i % 4][1], this.palettes[this.paletteIndex][i % 4][2]);

            this.mesh.setColorAt(i, color);
        }

        this.mesh.instanceColor!.needsUpdate = true;
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
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
    }
}
