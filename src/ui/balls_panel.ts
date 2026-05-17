export class BallsPanel {
    ballCount = document.getElementById("bc") as HTMLInputElement;

    speed = document.getElementById("speed") as HTMLInputElement;
    speedVal = document.getElementById("speed-value") as HTMLElement;

    variation = document.getElementById("size-variation") as HTMLInputElement;
    variationVal = document.getElementById("size-variation-value") as HTMLElement;

    force = document.getElementById("force") as HTMLInputElement;
    forceVal = document.getElementById("force-value") as HTMLElement;

    forceRadius = document.getElementById("force-radius") as HTMLInputElement;
    forceRadiusVal = document.getElementById("force-radius-value") as HTMLElement;

    matSel = document.getElementById("mat") as HTMLSelectElement;

    constructor() {
        this.ballCount.value = "100";

        ((this.speed.value = "1"), (this.speedVal.textContent = this.speed.value));
        this.speed.addEventListener("input", () => {
            this.speedVal.textContent = this.speed.value;
        });

        ((this.variation.value = "6"), (this.variationVal.textContent = this.variation.value));
        this.variation.addEventListener("change", () => {
            this.variationVal.textContent = this.variation.value;
        });

        ((this.force.value = "1"), (this.forceVal.textContent = this.force.value));
        this.force.addEventListener("input", () => {
            this.forceVal.textContent = this.force.value;
        });

        ((this.forceRadius.value = "70"), (this.forceRadiusVal.textContent = this.forceRadius.value));
        this.forceRadius.addEventListener("input", () => {
            this.forceRadiusVal.textContent = this.forceRadius.value;
        });

        this.matSel.value = "10";
    }

    exportState() {
        return {
            count: Math.max(1, Math.min(10000, +this.ballCount.value)),
            speed: +this.speedVal.textContent,
            variation: +this.variationVal.textContent,
            force: +this.forceVal.textContent,
            forceRadius: +this.forceRadiusVal.textContent,
            mat: +this.matSel.value,
        };
    }
}
