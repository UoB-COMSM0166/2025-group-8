class Hud {
    constructor(roadLength, target) {
        this.roleImage = window.bgType.BATTERY;
        this.roadLength = roadLength;
        this.x = windowHeight / 50;
        this.y = windowHeight * 5 / 100;
        this.textSize = windowHeight / 20;
        this.lives = 3;
        this.lifeIconSize = windowHeight / 15;
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
            image(this.roleImage, this.x + i * this.lifeIconSize, this.y, this.lifeIconSize, this.lifeIconSize);
        }
        if (this.target.lives == 0) {
            window.currentGameState = window.gameStates.CHAPTERSELECTOR;
            switch (window.currentGameState) {
                case window.gameStates.CHAPTER1:
                    window.chapter1Story = new Chapter1Story();
                    break;
                  case window.gameStates.CHAPTER2:
                    window.chapter2Story = new Chapter2Story();
                    break;
                  case window.gameStates.CHAPTER3:
                    window.chapter3Story = new Chapter3Story();
                    break;
                  case window.gameStates.CHAPTER4:
                    window.chapter4Story = new Chapter4Story();                    break;
                    break; 
            }
            this.target.lives = 3;
        } 
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
        text(Math.round(walkedPercentage) + "%", windowWidth * 80 / 100, windowHeight * 10 / 100);
    }

    relativelyMoveRecord() {
        if ((keyIsDown(68) || keyIsDown(100)) && window.mainRoleMove == false) {
          this.relativelyMoveDistance += this.relativeSpeed;
        }
    }
}