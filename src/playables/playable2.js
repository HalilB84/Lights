//THIS IS JUST A TESTING CONCEPT, PLAYABLE 2 IS NOT THIS. THIS IS NOT FINAL

import * as THREE from "three";

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
		this.videoTexture = null;

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

		this.material = this.createShaderMaterial();
		this.material.uniforms.resolution.value = [this.width, this.height];

		this.materialOverlay = this.createShaderMaterial();
		this.materialOverlay.uniforms.resolution.value = [this.widthOverlay, this.heightOverlay];

		for (let i = 0; i < numCircles; i++) {
			for (let j = 0; j < numCircles; j++) {
				const geometry = new THREE.CircleGeometry(10, 32);

				const mesh = new THREE.Mesh(geometry, this.material);

				const centerX = (this.width / numCircles) * (j + 0.5) - this.width / 2;
				const centerY = (this.height / numCircles) * (i + 0.5) - this.height / 2;

				mesh.position.set(centerX, centerY, 0);
				this.scene.add(mesh);

				const meshOverlay = new THREE.Mesh(geometry, this.materialOverlay);
				meshOverlay.position.set(centerX * this.scaleOverlay, centerY * this.scaleOverlay, 0);
				meshOverlay.scale.set(this.scaleOverlay, this.scaleOverlay, 1);
				this.sceneOverlay.add(meshOverlay);

				this.circles.push({ mesh, meshOverlay });
			}
		}

		this.isReady = true;
	}

	createShaderMaterial() {
		return new THREE.ShaderMaterial({
			uniforms: {
				resolution: { value: null },
				videoTexture: { value: null },
				time: { value: 0.0 },
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
	}

	update(videoTexture) {
		if (!this.isReady) return;

		this.material.uniforms.videoTexture.value = videoTexture;
		this.materialOverlay.uniforms.videoTexture.value = videoTexture;
	}
}


/*
//this.material.uniforms.time.value = performance.now() / 1000;
//this.materialOverlay.uniforms.time.value = performance.now() / 1000;

float speed = 1.0;
float scale = 1.5;

vec2 p = uv * scale;

for(int i = 1; i < 10; i++) {
	p.x += 0.45 / float(i) * sin(float(i) * 3.0 * p.y + time * speed );
	p.y += 0.45 / float(i) * cos(float(i) * 3.0 * p.x + time * speed );
}

vec3 color = vec3(0.03, 0.008, 0.0);

fragColor = vec4(color / max(abs(sin(time + p.y - p.x)), 0.03), 1.0); 
*/ 