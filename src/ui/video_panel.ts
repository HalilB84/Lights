export class VideoPanel {
    scale = document.getElementById("video-scale") as HTMLInputElement;
    scaleVal = document.getElementById("vs-value") as HTMLElement;

    scene = document.getElementById("scenes") as HTMLSelectElement;

    constructor() {
        ((this.scale.value = "0.5"), (this.scaleVal.textContent = this.scale.value));

        this.scale.addEventListener("input", () => {
            this.scaleVal.textContent = this.scale.value;
        });

        this.scene.value = "1";
    }

    exportState() {
        return {
            scale: +this.scaleVal.textContent,
            scene: +this.scene.value,
        };
    }
}
