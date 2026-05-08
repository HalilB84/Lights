export class BallsPanel {
    ballCount = document.getElementById("bc") as HTMLInputElement;
    bcVal = document.getElementById("bc-value") as HTMLInputElement;

    speed = document.getElementById("speed") as HTMLInputElement;
    speedVal = document.getElementById("speed-value") as HTMLInputElement;

    variation = document.getElementById("size-variation") as HTMLInputElement;
    variationVal = document.getElementById("size-variation-value") as HTMLInputElement;

    force = document.getElementById("force") as HTMLInputElement;
    forceVal = document.getElementById("force-value") as HTMLInputElement;

    forceRadius = document.getElementById("force-radius") as HTMLInputElement;
    forceRadiusVal = document.getElementById("force-radius-value") as HTMLInputElement;

    matSel = document.getElementById("mat") as HTMLInputElement;

    constructor() {
        ((this.ballCount.value = "500"), (this.bcVal.textContent = this.ballCount.value));
        this.ballCount.addEventListener("change", () => {
            this.bcVal.textContent = this.ballCount.value;
        });

        ((this.speed.value = "1"), (this.speedVal.textContent = this.speed.value));
        this.speed.addEventListener("input", () => {
            this.speedVal.textContent = this.speed.value;
        });

        ((this.variation.value = "5"), (this.variationVal.textContent = this.variation.value));
        this.variation.addEventListener("input", () => {
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
            count: +this.bcVal.textContent,
            speed: +this.speedVal.textContent,
            variation: +this.variationVal.textContent,
            force: +this.forceVal.textContent,
            forceRadius: +this.forceRadiusVal.textContent,
            mat: +this.matSel.value,
        };
    }
}
