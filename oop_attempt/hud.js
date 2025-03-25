class Hud {
    constructor(roadLength, target) {
        this.roleImage = window.bgType.BATTERY;
        this.roadLength = roadLength;
        this.x = 20;
        this.y = 20;
        this.textSize = 20;
        this.lives = 3;
        this.lifeIconSize = 50;
        this.relativelyMoveDistance = 0;
        this.relativeSpeed = target.speed;
        this.target = target;
    }

    draw() {   
        this.livesDisplay();
        this.progressBar();
        this.relativelyMoveRecord();
    }

    livesDisplay() {
        for (let i = 0; i < this.target.lives; i++) {
            image(this.roleImage, this.x + 20 + i * this.lifeIconSize, this.y, this.lifeIconSize, this.lifeIconSize);
        }
    }

    removeLife() {
        this.lives--;   
    }

    progressBar() {
        textSize(25);
        strokeWeight(2);
        fill(255);
        let walkedDistance = this.relativelyMoveDistance;
        let walkedPercentage = (walkedDistance / (this.roadLength - windowWidth)) * 100;
        if (walkedPercentage >= 100) {
            window.isStoryEnded = true;
        }
        text(Math.round(walkedPercentage) + "%", windowWidth - this.x - 5* this.lifeIconSize, this.y + this.lifeIconSize / 2.0);
    }

    relativelyMoveRecord() {
        if ((keyIsDown(68) || keyIsDown(100)) && window.mainRoleMove == false) {
          this.relativelyMoveDistance += this.relativeSpeed;
        }
    }
}