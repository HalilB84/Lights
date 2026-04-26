//THIS IS JUST A TESTING CONCEPT, PLAYABLE 2 IS NOT THIS. THIS IS NOT FINAL

import * as THREE from "three";
import { Playable } from "./playable";

export class Holes extends Playable {
    circles: { mesh: THREE.Mesh }[];
    videoTexture: THREE.Texture | null;

    mesh: THREE.InstancedMesh;
    volMesh: THREE.InstancedMesh;

    material: THREE.ShaderMaterial;
    volMaterial: THREE.MeshBasicMaterial;

    constructor(width: number, height: number) {
        super(width, height);

        this.circles = [];
        this.videoTexture = null;
        this.createScene();
    }

    reset() {
        this.dispose();

        this.circles = [];
        this.createScene();
    }

    createScene() {
        this.scene.clear();
        this.volScene.clear();

        const numCircles = 10;

        const geometry = new THREE.CircleGeometry(10, 16);

        this.material = new THREE.ShaderMaterial({
            uniforms: {
                resolution: { value: null },
                videoTexture: { value: null },
                init: { value: null },
                time: { value: null },
            },
            glslVersion: THREE.GLSL3,
            vertexShader: `
                out vec3 vWorldPosition;

                void main() {
                    vWorldPosition = (instanceMatrix * vec4(position, 1.0)).rgb;
                    gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                precision highp float;
                in vec3 vWorldPosition;
                uniform vec2 resolution;
                uniform sampler2D videoTexture;
                uniform bool init;
                uniform float time;

                out vec4 fragColor;

                //the video gets streched a lot but who cares
                void main() {
                    vec2 uv = (vWorldPosition.xy + (resolution / 2.0)) / resolution;
                    if(init) {
                        fragColor = vec4(1.0);
                    }
                    else {
                        fragColor = texture(videoTexture, uv);
                    }
                }
            `,
        });

        this.material.uniforms.resolution.value = [this.width, this.height];
        this.volMaterial = new THREE.MeshBasicMaterial({ opacity: 0.4, transparent: true, color: new THREE.Color().setRGB(0, 0, 0) });

        const count = (numCircles - 2) * (numCircles - 4);

        this.mesh = new THREE.InstancedMesh(geometry, this.material, count);
        this.volMesh = new THREE.InstancedMesh(geometry, this.volMaterial, numCircles * numCircles - count);

        let pos = new THREE.Object3D();
        let num1 = 0;
        let num2 = 0;

        for (let i = 0; i < numCircles; i++) {
            for (let j = 0; j < numCircles; j++) {
                const centerX = (this.width / numCircles) * (j + 0.5) - this.width / 2;
                const centerY = (this.height / numCircles) * (i + 0.5) - this.height / 2;

                pos.position.set(centerX, centerY, 0);
                pos.updateMatrix();

                if (i <= 1 || j <= 0 || i >= numCircles - 2 || j >= numCircles - 1) {
                    this.volMesh.setMatrixAt(num2, pos.matrix);
                    num2 += 1;
                } else {
                    this.mesh.setMatrixAt(num1, pos.matrix);
                    num1 += 1;
                }
            }
        }

        this.scene.add(this.mesh);
        this.scene.add(this.volMesh);
    }

    update(videoTexture: THREE.VideoTexture | null) {
        this.material.uniforms.videoTexture.value = videoTexture;
        this.material.uniforms.init.value = videoTexture ? false : true;
    }

    volumetrics(toggle: boolean) {
        if (toggle) {
            this.volScene.add(this.mesh);
        } else {
            this.scene.add(this.mesh);
        }
    }

    dispose() {
        this.mesh.geometry.dispose();
        this.volMesh.geometry.dispose();
        this.material?.dispose();
        this.volMaterial?.dispose();
    }
}
