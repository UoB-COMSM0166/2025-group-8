class HpBar {
    constructor() {
        this.hp = 80;
        this.x = 20;
        this.y = 20;
        this.totalLength = 200;
        this.textSize = 16;
    }

    placeHpBar() {
        noStroke();
        textAlign(LEFT);
        textSize(this.textSize);
        fill(255);
        text("HP:", this.x, this.textSize + this.y);
        fill("green");
        rect(this.x + 40, this.y, (this.hp / 100.0) * this.totalLength, 20);
        fill("pink");
        rect(this.x + 40 + (this.hp / 100.0) * this.totalLength, this.y, (1 - (this.hp / 100.0)) * this.totalLength, 20);
    }

    updateHp(increment) {
        this.hp += increment;
        if (this.hp > 100) {
            this.hp = 100;
        }
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
}