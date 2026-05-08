import * as THREE from "three";
import Matter from "matter-js";
import { Playable } from "./playable";
import { sample_video } from "./pShaders/sample";

//inspired by https://akari.lusion.co/#spheres (i promise I didnt look at their code so no copying)

//https://brm.io/matter-js/docs/classes/Engine.html
export class Balls extends Playable {
    circles: { body: Matter.Body; size: number }[];
    //mesh: THREE.InstancedMesh<THREE.CircleGeometry, THREE.MeshBasicMaterial>;
    mesh: THREE.InstancedMesh<THREE.CircleGeometry, THREE.ShaderMaterial | THREE.MeshBasicMaterial>;
    mat: THREE.ShaderMaterial | THREE.MeshBasicMaterial;

    walls: Matter.Body[];
    engine: Matter.Engine;

    p = {
        count: 500,
        speed: 1,
        variation: 5,
        force: 1,
        forceRadius: 70,
        mat: 10,
    };

    palettes: number[][][] = [
        [
            [0.0, 1.0, 1.0],
            [1.0, 0.0, 1.0],
            [0.541, 0.169, 0.886],
            [1.0, 0.702, 0.0],
        ],
        [
            [0.169, 0.675, 0.71],
            [1.0, 0.494, 0.235],
            [0.435, 0.157, 0.722],
            [1.0, 0.839, 0.416],
        ],
        [
            [1.0, 0.0, 0.498],
            [0.0, 1.0, 1.0],
            [0.188, 0.0, 0.6],
            [1.0, 0.8, 0.0],
        ],
    ];
    paletteIndex = 0;

    constructor(width: number, height: number) {
        super(width, height);

        this.circles = [];
        this.walls = [];
        this.createScene();
    }

    reset() {
        this.dispose();
        this.scene.clear();

        this.circles = [];
        this.walls = [];

        this.createScene();
    }

    createScene() {
        this.engine = Matter.Engine.create({
            gravity: { x: 0, y: 0, scale: 0 },
        });

        const geom = new THREE.CircleGeometry(1, 12);

        if (this.p.mat === 10) {
            this.mat = sample_video();
            this.mat.uniforms.resolution.value = [this.width, this.height];
        } else {
            this.mat = new THREE.MeshBasicMaterial();
        }

        this.mesh = new THREE.InstancedMesh(geom, this.mat, this.p.count);

        const pos = new THREE.Object3D();
        const color = new THREE.Color();

        for (let i = 0; i < this.mesh.count; i++) {
            const centerX = ((Math.random() * 2 - 1) * this.width) / 2;
            const centerY = ((Math.random() * 2 - 1) * this.height) / 2;
            const size = Math.max(Math.ceil(Math.random() * this.p.variation), 1);

            pos.scale.set(size, size, 1);
            pos.updateMatrix();
            this.mesh.setMatrixAt(i, pos.matrix);

            if (this.p.mat < 10) {
                color.setRGB(this.palettes[this.p.mat][i % 4][0], this.palettes[this.p.mat][i % 4][1], this.palettes[this.p.mat][i % 4][2]);
                this.mesh.setColorAt(i, color);
            }

            const body = Matter.Bodies.circle(centerX, centerY, size, {
                restitution: 1.0,
                frictionAir: 0.005,
            });
            Matter.Composite.add(this.engine.world, body);

            this.circles.push({ body, size });
        }

        this.scene.add(this.mesh);
        this.volScene = this.scene;

        const thickness = 100;
        const options = { isStatic: true, restitution: 0.8 };

        this.walls.push(Matter.Bodies.rectangle(0, this.height / 2 + thickness / 2, this.width + thickness, thickness, options));
        this.walls.push(Matter.Bodies.rectangle(0, -this.height / 2 - thickness / 2, this.width + thickness, thickness, options));
        this.walls.push(Matter.Bodies.rectangle(-this.width / 2 - thickness / 2, 0, thickness, this.height + thickness, options));
        this.walls.push(Matter.Bodies.rectangle(this.width / 2 + thickness / 2, 0, thickness, this.height + thickness, options));

        Matter.Composite.add(this.engine.world, this.walls);
    }

    update(delta: number, mouse: { x: number; y: number }, videoTexture: THREE.VideoTexture | null, s: { count: number; speed: number; variation: number; force: number; forceRadius: number; mat: number }) {
        if (this.p.count !== s.count || this.p.variation !== s.variation || this.p.mat !== s.mat) {
            this.p = { ...s };
            this.reset();
            return;
        }

        this.p = { ...s };

        let pos = new THREE.Object3D();

        Matter.Engine.update(this.engine, Math.min(delta, (1 / 60) * 1000));

        for (let i = 0; i < this.circles.length; i++) {
            let { body, size } = this.circles[i];

            //bound check rq because bodies can escape the walls
            if (body.position.x < -this.width / 2 || body.position.x > this.width / 2 || body.position.y < -this.height / 2 || body.position.y > this.height / 2) {
                Matter.Body.setPosition(body, { x: 0, y: 0 });
            }

            pos.position.set(body.position.x, body.position.y, 0);
            pos.scale.set(size, size, 1);
            pos.updateMatrix();

            this.mesh.setMatrixAt(i, pos.matrix);

            if (body.speed < s.speed) {
                if (body.speed === 0) Matter.Body.setVelocity(body, { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 });
                Matter.Body.setSpeed(body, s.speed);
            }
        }

        this.mesh.instanceMatrix.needsUpdate = true;
        this.changeSpeed(mouse);

        if (this.mat instanceof THREE.ShaderMaterial) {
            this.mat.uniforms.videoTexture.value = videoTexture;
            this.mat.uniforms.init.value = videoTexture ? false : true;
        }
    }

    changeSpeed(mouse?: { x: number; y: number }) {
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

            if (distance < this.p.forceRadius) {
                Matter.Body.setVelocity(body, {
                    x: body.velocity.x + this.p.force * Math.cos(angle),
                    y: body.velocity.y + this.p.force * Math.sin(angle),
                });
            }
        }
    }

    volumetrics(_toggle: boolean): void {}

    dispose() {
        this.mesh.geometry.dispose();
        this.mesh.material.dispose();
    }
}
