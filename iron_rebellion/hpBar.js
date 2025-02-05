class HpBar {
    constructor() {
        this.roleImage = window.bgType.BATTERY;
        // this.hp = 80;
        this.x = 20;
        this.y = 20;
        // this.totalLength = 200;
        this.textSize = 20;
        this.lives = 3;
        this.lifeIconSize = 50;
    }

    placeHpBar() {
        noStroke();
        textAlign(LEFT);
        textSize(this.textSize);
        fill(255);
        // text("Lives:", this.x, this.y + this.lifeIconSize / 2);
        // fill("green");
        // rect(this.x + 40, this.y, (this.hp / 100.0) * this.totalLength, 20);
        // fill("pink");
        // rect(this.x + 40 + (this.hp / 100.0) * this.totalLength, this.y, (1 - (this.hp / 100.0)) * this.totalLength, 20);
        for (let i = 0; i < this.lives; i++) {
            image(this.roleImage, this.x + 20 + i * this.lifeIconSize, this.y, this.lifeIconSize, this.lifeIconSize);
        }
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