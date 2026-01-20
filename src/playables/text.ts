import * as THREE from "three";
import { MSDFTextGeometry, uniforms } from "three-msdf-text-utils";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { Playable } from "./playable";

export class Text extends Playable {
	textscale: number;
	currentText: string;

	atlas: THREE.Texture;
	font: any;
	allowed: string;

	mesh: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;
	meshOverlay: THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>;

	constructor(width: number, height: number, textscale: number, scaleOverlay: number) {
		super(width, height, scaleOverlay);

		this.textscale = textscale;
		this.currentText = "The show is starting!";

		this.load();
	}

	async load() {
		const loader = new THREE.TextureLoader();
		const fontLoader = new FontLoader();

		this.atlas = await loader.loadAsync("/fonts/roboto-regular.png");
		this.font = (await fontLoader.loadAsync("/fonts/roboto-regular.fnt")).data;
		this.allowed = this.font.chars.map((c: any) => c.char).join("");
		//console.log(this.font);
		//console.log(this.allowed);

		this.createScene();
	}

	reset() {
		this.dispose();
		this.createScene();
	}

	createScene() {
		if (!this.font || !this.atlas) return;

		this.isReady = false;

		this.scene.clear();
		this.sceneOverlay.clear();

		//uses px size from the bitmap so thats what determines size
		const geometry = new MSDFTextGeometry({
			text: this.currentText
				.split("")
				.map((c) => (this.allowed.includes(c) ? c : "?"))
				.join(""),
			font: this.font,
			align: "center",
			width: this.width / this.textscale,
		});

		const material = new THREE.ShaderMaterial({
			side: THREE.DoubleSide,
			defines: {
				IS_SMALL: false,
			},
			uniforms: {
				...uniforms.common,
				...uniforms.rendering,
				...uniforms.strokes,
				time: { value: null },
			},
			vertexShader: `
                attribute vec2 layoutUv;
                attribute float lineIndex;
                attribute float lineLettersTotal;
                attribute float lineLetterIndex;
                attribute float lineWordsTotal;
                attribute float lineWordIndex;
                attribute float wordIndex;
                attribute float letterIndex;

                uniform float time;

                varying vec2 vUv;
                varying vec2 vLayoutUv;
                varying vec3 vViewPosition;
                varying vec3 vNormal;
                varying float vLineIndex;
                varying float vLineLettersTotal;
                varying float vLineLetterIndex;
                varying float vLineWordsTotal;
                varying float vLineWordIndex;
                varying float vWordIndex;
                varying float vLetterIndex;

                void main() {
                    vec4 mvPosition = vec4(position, 1.0);

                    float frequency1 = 0.035;
                    float amplitude1 = 20.0;
                    float frequency2 = 0.025;
                    float amplitude2 = 20.0;
       
                    float offset = sin(letterIndex * 0.3 + time * 1.5) * amplitude2;
                    mvPosition.x += offset;

                    mvPosition = modelViewMatrix * mvPosition;
                    gl_Position = projectionMatrix * mvPosition;

                    vUv = uv; //this uv mapping is not from 0 to 1, it is whatever it got from the atlas position. https://github.com/leochocolat/three-msdf-text-utils/blob/fc4ddac6be415f14e71861ce310bbae4fff33896/src/MSDFTextGeometry/vertices.js#L32
                    vLayoutUv = layoutUv;
                    vViewPosition = -mvPosition.xyz;
                    vNormal = normal;
                    vLineIndex = lineIndex;
                    vLineLettersTotal = lineLettersTotal;
                    vLineLetterIndex = lineLetterIndex;
                    vLineWordsTotal = lineWordsTotal;
                    vLineWordIndex = lineWordIndex;
                    vWordIndex = wordIndex;
                    vLetterIndex = letterIndex;
                }
            `,
			fragmentShader: `
                precision highp float;
                
                varying vec2 vUv;
                varying float vLetterIndex;
                
                uniform float uOpacity;
                uniform vec3 uColor;
                uniform sampler2D uMap;
                uniform float time;

                //https://iquilezles.org/articles/palettes/
                vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
                    return a + b*cos(6.28318*(c*t+d));
                }

                float median(float r, float g, float b) {
                    return max(min(r, g), min(max(r, g), b));
                }

                void main() { 
                    vec3 sample1 = texture2D(uMap, vUv).rgb;
                    float sigDist = median(sample1.r, sample1.g, sample1.b) - 0.5;
                    float alpha = clamp(sigDist/fwidth(sigDist) + 0.5, 0.0, 1.0);

                    float speed = 1.35;
                    float scale = 10.0;

                    vec2 p = vUv * scale;

                    for(int i = 1; i < 10; i++) {
                        p.x += 0.45 / float(i) * sin(float(i) * 3.0 * p.y + vLetterIndex + time * speed );
                        p.y += 0.45 / float(i) * cos(float(i) * 3.0 * p.x + vLetterIndex + time * speed );
                    }

                    float r = cos(p.x + p.y + 1.0) * 0.5 + 0.5;
                    float g = sin(p.x + p.y + 1.0) * 0.5 + 0.5;
                    float b = (sin(p.x + p.y) + cos(p.x + p.y)) * 0.5 + 0.5;

                    //0.8, 0.5, 0.4		0.2, 0.4, 0.2	2.0, 1.0, 1.0	0.00, 0.25, 0.25
                    //0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 1.0, 1.0	0.30, 0.20, 0.20
                    //0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 0.7, 0.4	0.00, 0.15, 0.20
                    //0.5, 0.5, 0.5		0.5, 0.5, 0.5	1.0, 1.0, 1.0	0.00, 0.10, 0.20	

                    vec3 c0 = vec3(0.8, 0.5, 0.4);
                    vec3 c1 = vec3(0.2, 0.4, 0.2);
                    vec3 c2 = vec3(2.0, 1.0, 1.0);
                    vec3 c3 = vec3(0.00, 0.25, 0.25);

                    vec3 paletteColor = palette(r, c0, c1, c2, c3);

                    gl_FragColor = vec4(paletteColor, alpha * uOpacity);
                    if (gl_FragColor.a < 0.00001){ //I initially thought that gl_FragColor.a != 1.0 would suffice since there would be no blending issues but It does look blocky, I mean its fine it works right now with the black body color. 
                        discard;
                    }

                }
            `,
		});

		material.uniforms.uMap.value = this.atlas;

		this.mesh = new THREE.Mesh(geometry, material);
		geometry.computeBoundingBox();
		const bbox = geometry.boundingBox;

		const centerX = (bbox.min.x + bbox.max.x) / 2;
		const centerY = (bbox.min.y + bbox.max.y) / 2;

		this.mesh.scale.set(this.textscale, -this.textscale, 0);
		this.mesh.position.set(-centerX * this.textscale, centerY * this.textscale, 0);
		this.scene.add(this.mesh);

		this.meshOverlay = new THREE.Mesh(geometry, material);
		this.meshOverlay.scale.set(this.scaleOverlay * this.textscale, -this.scaleOverlay * this.textscale, 0);
		this.meshOverlay.position.set(-centerX * this.scaleOverlay * this.textscale, centerY * this.scaleOverlay * this.textscale, 0);

		this.sceneOverlay.add(this.meshOverlay);

		this.isReady = true;
	}

	update(text?: string) {
		if (text) this.currentText = text;
		this.dispose();
		this.createScene();
	}

	dispose(): void {
		this.mesh?.geometry.dispose();
		this.mesh?.material.dispose();
	}
}
