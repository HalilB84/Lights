//THIS IS JUST A TESTING CONCEPT, PLAYABLE 2 IS NOT THIS. THIS IS NOT FINAL

import * as THREE from "three";
import { Playable } from "./playable";

export class Holes extends Playable {
    circles: { mesh: THREE.Mesh}[];
    videoTexture: THREE.Texture | null;

    material: THREE.ShaderMaterial;

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

        const numCircles = 10;

        const geometry = new THREE.CircleGeometry(10, 16);

        this.material = new THREE.ShaderMaterial({
            uniforms: {
                resolution: { value: null },
                videoTexture: { value: null },
                time: { value: null },
            },
            glslVersion: THREE.GLSL3,
            vertexShader: `
                out vec3 vWorldPosition;

                void main() {
                    vWorldPosition = (modelMatrix * vec4(position, 1.0)).rgb;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                precision highp float;
                in vec3 vWorldPosition;
                uniform vec2 resolution;
                uniform sampler2D videoTexture;
                uniform float time;

                out vec4 fragColor;

                //the video gets streched a lot but who cares
                void main() {
                    vec2 uv = (vWorldPosition.xy + (resolution / 2.0)) / resolution;
                    fragColor = texture(videoTexture, uv);
                }
            `,
        });

        this.material.uniforms.resolution.value = [this.width, this.height];
        const test = new THREE.MeshBasicMaterial({ opacity: 0.4, transparent: true, color: new THREE.Color().setRGB(0, 0, 0) });



        for (let i = 0; i < numCircles; i++) {
            for (let j = 0; j < numCircles; j++) {
                let mesh;

                if (i <= 1 || j <= 0 || i >= numCircles - 2 || j >= numCircles - 1) {
                    mesh = new THREE.Mesh(geometry, test);
                } else {
                    mesh = new THREE.Mesh(geometry, this.material);
                }

                const centerX = (this.width / numCircles) * (j + 0.5) - this.width / 2;
                const centerY = (this.height / numCircles) * (i + 0.5) - this.height / 2;

                mesh.position.set(centerX, centerY, 0);
                this.scene.add(mesh);



                this.circles.push({ mesh });
            }
        }
    }

    update(videoTexture: THREE.VideoTexture) {
        this.material.uniforms.videoTexture.value = videoTexture;
    }

    dispose() {
        this.circles[0]?.mesh.geometry.dispose();
        this.material?.dispose();
    }
}
