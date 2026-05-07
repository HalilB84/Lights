import * as THREE from "three";
import { Text } from "troika-three-text";
import { Playable } from "./playable";

export class TextTroika extends Playable {
    scale: number;
    currentText: string;

    mesh: any;
    constructor(width: number, height: number) {
        super(width, height);

        this.scale = 1;

        this.currentText = "Hello Light!"; //this.currentText = "àéîõüçñ ¿¡€ßæœΩ πφψД ЖЙלוֹ界 こんにちは안녕하세";

        this.createScene();
    }

    reset() {
        this.update(this.currentText, null);
        this.mesh.fontSize = this.width / 12;
        this.mesh.material.uniforms.width.value = this.width;
    }

    createScene() {
        this.mesh = new Text();

        this.mesh.material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: null },
                width: { value: null },
            },
            vertexShader: `
            varying vec2 vUv;
            varying float vIndex;
            uniform float time;
            uniform float width;

            void main() {
                vUv = uv;
                vIndex = aTroikaGlyphBounds.x;

                float norm = (aTroikaGlyphBounds.x + width / 2.0) / width;

                float offset = 0.0; //sin(norm * 3.5 + time * 1.7) * width * 0.03;

                vec4 mvPosition = modelMatrix * vec4(position, 1.0);
                mvPosition.x += offset;

                gl_Position = projectionMatrix * viewMatrix * mvPosition;
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

                //0.8, 0.5, 0.4        0.2, 0.4, 0.2    2.0, 1.0, 1.0    0.00, 0.25, 0.25
                //0.5, 0.5, 0.5        0.5, 0.5, 0.5    1.0, 1.0, 1.0    0.30, 0.20, 0.20
                //0.5, 0.5, 0.5        0.5, 0.5, 0.5    1.0, 0.7, 0.4    0.00, 0.15, 0.20
                //0.5, 0.5, 0.5        0.5, 0.5, 0.5    1.0, 1.0, 1.0    0.00, 0.10, 0.20

                vec3 c0 = vec3(0.5, 0.5, 0.5);
                vec3 c1 = vec3(0.5, 0.5, 0.5);
                vec3 c2 = vec3(1.0, 1.0, 1.0);
                vec3 c3 = vec3(0.00, 0.10, 0.20);

                vec3 paletteColor = palette(r, c0, c1, c2, c3);
                gl_FragColor = vec4(paletteColor, 1.0);
            }`,
        });

        this.mesh.material.uniforms.width.value = this.width;

        this.mesh.fontSize = this.width / 12;
        this.mesh.textAlign = "center";
        this.mesh.anchorX = "center";
        this.mesh.anchorY = "middle";
        this.mesh.overflowWrap = "break-word";
        this.mesh.material.defines.IS_DEPTH_MATERIAL = "";

        //console.log(this.mesh.material);

        this.scene.add(this.mesh);
        this.volScene = this.scene;

        this.update(this.currentText, null);
    }

    update(text: string | null, s: { scale: number } | null) {
        this.scale = s?.scale ?? this.scale;

        if (text) {
            this.currentText = text;
            this.mesh.text = this.currentText;
            this.mesh.sync();
        }

        this.mesh.maxWidth = this.width / this.scale;

        this.mesh.scale.set(this.scale, this.scale, 1);

        this.mesh.material.uniforms.time.value = performance.now() * 0.001;
    }

    volumetrics(_toggle: boolean): void {}

    dispose(): void {
        this.mesh.material.dispose();
        this.mesh.dispose();
    }
}
