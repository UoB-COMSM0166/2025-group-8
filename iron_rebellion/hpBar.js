class HpBar {
    constructor() {
        this.hp = 100;
        this.x = 20;
        this.y = 20;
    }

    placeHpBar() {
        textAlign(LEFT);
        textSize(16);
        fill(255);
        text("HP:", this.x, this.y);
        fill(0, 255, 0);
        rect(this.x + 20, this.y, this.hp, 20);
    }

    updateHp(increment) {
        this.hp += increment;
    }
}