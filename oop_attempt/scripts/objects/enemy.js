class Enemy extends Character {
    constructor(x, y) {
        super(x, y);
        this.health = 100;
    }

    checkDestroy() {
        if (this.health <= 0) {
            this.isDiscarded = true;
        }
    }

    aiMove() {
        
    }

    draw() {
        this.checkDestroy();
        if (this.isDisplay && !this.isDiscarded) {
            this.render();
            this.aiMove();
            this.applyGravity();
        }
        if (!this.isDiscarded) {
            this.relativelyMove();
            this.discardCheck();
            this.displayCheck();
        }
    }

}