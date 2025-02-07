class Hud {
    constructor(roadLength) {
        this.roleImage = window.bgType.BATTERY;
        this.roadLength = roadLength;
        this.x = 20;
        this.y = 20;
        this.textSize = 20;
        this.lives = 3;
        this.lifeIconSize = 50;
        this.relativelyMoveDistance = 0;
        this.relativeSpeed = 4;
    }

    setup() {   
        this.livesDisplay();
        this.progressBar();
        this.relativelyMoveRecord();
    }

    livesDisplay() {
        for (let i = 0; i < this.lives; i++) {
            image(this.roleImage, this.x + 20 + i * this.lifeIconSize, this.y, this.lifeIconSize, this.lifeIconSize);
        }
    }

    addLife() {
        this.lives++;
    }

    removeLife() {
        this.lives--;   
    }

    progressBar() {
        textSize(16);
        fill(255);
        let walkedDistance = this.relativelyMoveDistance;
        let walkedPercentage = (walkedDistance / (this.roadLength - 0.5 * windowWidth)) * 100;
        text(Math.round(walkedPercentage) + "%", windowWidth - this.x - this.lifeIconSize, this.y + this.lifeIconSize / 2);
        // text("relative Distance: " + Math.round(this.relativelyMoveDistance) + "m", windowWidth - 200, this.y + this.lifeIconSize / 2)
    }

    relativelyMoveRecord() {
        if ((keyIsDown(68) || keyIsDown(100)) && window.mainRoleMove == false) {
          this.relativelyMoveDistance += this.relativeSpeed;
        }
    }
}