// Hud (Heads-Up Display) class shows player lives, progress bar, and movement tracking
class Hud {
    constructor(roadLength, target) {
        // Icon to represent lives (default is battery)
        this.roleImage = window.bgType.BATTERY;

        // Total road length for progress tracking
        this.roadLength = roadLength;

        // Position and size values based on screen height
        this.x = windowHeight / 50;
        this.y = windowHeight * 5 / 100;
        this.textSize = windowHeight / 20;
        this.lives = 3;
        this.lifeIconSize = windowHeight / 15;

        // Movement tracking variables
        this.relativelyMoveDistance = 0;
        this.relativeSpeed = target.speed;

        // Reference to the player or main character
        this.target = target;
    }

    // Main function to render HUD elements
    draw() {
        this.livesDisplay();
        this.progressBar();
        this.relativelyMoveRecord();
    }

    // Display remaining lives as icons
    livesDisplay() {
        for (let i = 0; i < this.target.lives; i++) {
            image(this.roleImage, this.x + i * this.lifeIconSize, this.y, this.lifeIconSize, this.lifeIconSize);
        }

        // If no lives left, reset and return to chapter selection
        if (this.target.lives == 0) {
            window.currentGameState = window.gameStates.CHAPTERSELECTOR;

            // Re-initialize the current chapter's story
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
                    window.chapter4Story = new Chapter4Story();
                    break;
            }

            // Reset player lives to 3
            this.target.lives = 3;
        }
    }

    // Display a progress bar as percentage of distance walked
    progressBar() {
        textSize(25);
        strokeWeight(2);
        fill(255);

        // Calculate percentage of the level completed
        let walkedDistance = this.relativelyMoveDistance;
        let walkedPercentage = (walkedDistance / (this.roadLength - windowWidth)) * 100;

        // If progress reaches 100%, mark story as ended
        if (walkedPercentage >= 100) {
            window.isStoryEnded = true;
        }

        // Display the percentage on screen
        text(Math.round(walkedPercentage) + "%", windowWidth * 80 / 100, windowHeight * 10 / 100);
    }

    // Track how far the player has moved relatively
    relativelyMoveRecord() {
        // When 'D' or right arrow key is held down and player isn't already moving
        if ((keyIsDown(68) || keyIsDown(100)) && window.mainRoleMove == false) {
            this.relativelyMoveDistance += this.relativeSpeed;
        }
    }
}
