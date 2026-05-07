export class VideoPanel {
    scale = document.getElementById("video-scale") as HTMLInputElement;
    scaleVal = document.getElementById("vs-value") as HTMLElement;

    constructor() {
        ((this.scale.value = "0.5"), (this.scaleVal.textContent = this.scale.value));

        this.scale.addEventListener("input", () => {
            this.scaleVal.textContent = this.scale.value;
        });
    }

    exportState() {
        return {
            scale: +this.scaleVal.textContent,
        };
    }
}
