import * as THREE from "three";
import { Text } from "troika-three-text";
import { Playable } from "./playable";

export class TextTroika extends Playable {
	textscale: number;
	currentText: string;

	mesh: any;
	meshOverlay: any;

	constructor(width: number, height: number, textscale: number, scaleOverlay: number) {
		super(width, height, scaleOverlay);

		this.textscale = textscale;
		//this.currentText = "àéîõüçñ ¿¡€ßæœΩ πφψД ЖЙלוֹ界 こんにちは안녕하세";
		this.currentText = "The show is starting!"

		this.mesh = new Text();
		this.meshOverlay = new Text();

		this.mesh.material = this.createMaterial();
		this.meshOverlay.material = this.createMaterial();

		this.meshOverlay.fontSize = this.mesh.fontSize = 70;
		this.meshOverlay.textAlign = this.mesh.textAlign = "center";
		this.meshOverlay.anchorX = this.mesh.anchorX = "center";
		this.meshOverlay.anchorY = this.mesh.anchorY = "middle";
		this.meshOverlay.overflowWrap = this.mesh.overflowWrap = "break-word";

		this.scene.add(this.mesh);
		this.sceneOverlay.add(this.meshOverlay);

		this.createScene();
	}

	reset() {
		this.createScene();
	}

	createScene() {
		this.isReady = false;

		this.mesh.text = this.meshOverlay.text = this.currentText;		
		this.mesh.maxWidth = this.meshOverlay.maxWidth = this.width / this.textscale;

		this.mesh.scale.setScalar(this.textscale);
		this.meshOverlay.scale.setScalar(this.textscale * this.scaleOverlay);

		this.mesh.sync();
		this.meshOverlay.sync();

		this.isReady = true; //sync is async so not right

		//console.log(this.meshOverlay.geometry);
	}

	createMaterial() {
		return new THREE.ShaderMaterial({
			uniforms: {
				time: { value: null },
			},
			vertexShader: ` 
			varying vec2 vUv;
			varying float vIndex;
			uniform float time;
			
			void main() { 
				vUv = uv;
				vIndex = aTroikaGlyphBounds.x;
				vec4 mvPosition = vec4(position, 1.0);

				float frequency1 = 0.035;
				float amplitude1 = 20.0;
				float frequency2 = 0.025;
				float amplitude2 = 20.0;

				float offset = sin(aTroikaGlyphBounds.x * 0.005 + time * 1.5) * amplitude2;
				mvPosition.x += offset;

				mvPosition = modelViewMatrix * mvPosition;
				gl_Position = projectionMatrix * mvPosition;

				//gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`,
			fragmentShader: `
			precision highp float;
			varying vec2 vUv;
			varying float vIndex;
			uniform float time;
			
			//https://iquilezles.org/articles/palettes/
			vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
				return a + b*cos(6.28318*(c*t+d));
			}
			
			void main() {
				vec2 p = vUv * 2.0;

				for(int i = 1; i < 10; i++) {
					p.x += 0.4 / float(i) * sin(float(i) * 3.0 * p.y + time * 1.0 + vIndex);
					p.y += 0.4 / float(i) * cos(float(i) * 3.0 * p.x + time * 1.0 + vIndex);
				}

				float r = cos(p.x + p.y + 1.0 + time) * 0.5 + 0.5;
				
				//0.8, 0.5, 0.4		0.2, 0.4, 0.2	2.0, 1.0, 1.0	0.00, 0.25, 0.25
				//0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 1.0, 1.0	0.30, 0.20, 0.20
				//0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 0.7, 0.4	0.00, 0.15, 0.20
				//0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 1.0, 1.0	0.00, 0.10, 0.20	

				vec3 c0 = vec3(0.8, 0.5, 0.4);
				vec3 c1 = vec3(0.2, 0.4, 0.2);
				vec3 c2 = vec3(2.0, 1.0, 1.0);
				vec3 c3 = vec3(0.00, 0.25, 0.25);

				vec3 paletteColor = palette(r, c0, c1, c2, c3);
				gl_FragColor = vec4(paletteColor, 1.0);
			}`,
		});
	}

	update(text?: string) {
		if(!this.isReady) return;
		if (text) this.currentText = text;

		this.createScene()
	}

	dispose(): void {
		//not needed?
	}
}
