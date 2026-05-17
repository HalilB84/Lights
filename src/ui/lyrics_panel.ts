export class LyricsPanel {
    scale = document.getElementById("text-scale") as HTMLInputElement;
    scaleVal = document.getElementById("ts-value") as HTMLElement;

    constructor() {
        ((this.scale.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? "1.7" : "1"), (this.scaleVal.textContent = this.scale.value));

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
