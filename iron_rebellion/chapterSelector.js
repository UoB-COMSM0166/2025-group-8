class ChapterSelector {
    buttonGenerationState = 0;
    firstButtonX;
    secondButtonX;
    thirdButtonX;
    fourthButtonX;
    buttonList;
    firstPictureX;
    secondPictureX;
    thirdPictureX;
    fourthPictureX;
    constructor() {
        this.bgSetter = new BgSetter(window.bgType.CHAPTERSELECTOR, 0, 80, 0, 0, windowWidth, windowHeight);
        this.rows = 1;
        this.columns = 4;
        this.chapterCount = 4;
        this.buttonGap = 200;
        this.buttonWidth = windowWidth / 9;
        this.buttonHeight = 20;
        this.buttonY = windowHeight * (13.0/18);
        this.pictureWidth = windowWidth / 6;
        this.pictureHeight = this.pictureWidth;
        this.pictureY = this.buttonY - this.pictureHeight - 40;
        this.calculatePositions()
    }

    setup() {
        if (this.buttonGenerationState == 0) {
            this.buttonGenerationState = 1;
            this.placeButtons();
        }
        this.bgSetter.setup();
        this.placeThemePictures();
        this.placeTitle();
    }

    placeTitle() {
        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("Chapter Selection", windowWidth / 2, windowHeight / 4.0);
    }

    placeThemePictures() {
        stroke("white");
        strokeWeight(2);
        image(window.bgType.CHAPTER1THEME, this.firstPictureX, this.pictureY, this.pictureWidth, this.pictureHeight);
        image(window.bgType.CHAPTER2THEME, this.secondPictureX, this.pictureY, this.pictureWidth, this.pictureHeight);
        image(window.bgType.CHAPTER3THEME, this.thirdPictureX, this.pictureY, this.pictureWidth, this.pictureHeight);
        image(window.bgType.CHAPTER4THEME, this.fourthPictureX, this.pictureY, this.pictureWidth, this.pictureHeight);
        strokeWeight(0);
    }

    placeButtons() {
        let firstButton = createButton("Chapter 1<br>The Awakening of Iron Fang\n");
        firstButton.position(this.firstButtonX, this.buttonY);
        firstButton.mousePressed(() => {
            window.currentGameState = window.gameStates.CHAPTER1; 
            this.removeButtons()
            });
        let secondButton = createButton("Chapter 2<br>Betrayal and Rebellion");
        secondButton.position(this.secondButtonX, this.buttonY);
        secondButton.mousePressed(() => {
            window.currentGameState = window.gameStates.CHAPTER2;
            this.removeButtons()
            });
        let thirdButton = createButton("Chapter 3<br>Air and Ground Showdown");
        thirdButton.position(this.thirdButtonX, this.buttonY);
        thirdButton.mousePressed(() => {
            window.currentGameState = window.gameStates.CHAPTER3;
            this.removeButtons()
            });
        let fourthButton = createButton("Chapter 4<br>Uncovering the Truth");
        fourthButton.position(this.fourthButtonX, this.buttonY);
        fourthButton.mousePressed(() => {
            window.currentGameState = window.gameStates.CHAPTER4;
            this.removeButtons()
            });
        this.buttonList = [firstButton, secondButton, thirdButton, fourthButton];
    }

    calculatePositions() {
        // calculate the center X of the screen
        let centerX = windowWidth / 2;
        this.firstButtonX = centerX - (this.buttonGap * 1.5) - (this.buttonWidth * 2);
        this.secondButtonX = centerX - (this.buttonGap * 0.5) - this.buttonWidth;
        this.thirdButtonX = centerX + (this.buttonGap * 0.5);
        this.fourthButtonX = centerX + (this.buttonGap * 1.5) + this.buttonWidth;
        this.firstPictureX = this.firstButtonX + (this.buttonWidth / 2.0) - (this.pictureWidth / 2.0);
        this.secondPictureX = this.secondButtonX + (this.buttonWidth / 2.0) - (this.pictureWidth / 2.0);
        this.thirdPictureX = this.thirdButtonX + (this.buttonWidth / 2.0) - (this.pictureWidth / 2.0);
        this.fourthPictureX = this.fourthButtonX + (this.buttonWidth / 2.0) - (this.pictureWidth / 2.0);
    }

    removeButtons() {
        this.buttonList.forEach(button => button.remove());
    }
}
