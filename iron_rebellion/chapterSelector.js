class ChapterSelector {
    firstButtonX;
    secondButtonX;
    thirdButtonX;
    fourthButtonX;
    constructor() {
        this.rows = 1;
        this.columns = 4;
        this.chapterCount = 4;
        this.buttonGap = 200;
        this.buttonWidth = windowWidth / 10;
        this.buttonHeight = 20;
        this.buttonY = windowHeight * (2.0/3);
        this.calculatePositions()
        this.setup();
    }

    setup() {
        // this.placeThemePictures();
        this.placeButtons();
    }

    placeThemePictures() {
 
    }

    placeButtons() {
        let firstButton = createButton("Chapter 1<br>The Awakening of Iron Fang\n");
        firstButton.position(this.firstButtonX, this.buttonY);
        // firstButton.mousePressed(() => { window.currentBg = window.bgType.CHAPTER1THEME;
        //     });
        let secondButton = createButton("Chapter 2<br>Betrayal and Rebellion");
        secondButton.position(this.secondButtonX, this.buttonY);
        let thirdButton = createButton("Chapter 3<br>Air and Ground Showdown");
        thirdButton.position(this.thirdButtonX, this.buttonY);
        let fourthButton = createButton("Chapter 4<br>Uncovering the Truth");
        fourthButton.position(this.fourthButtonX, this.buttonY);
    }

    calculatePositions() {
        // calculate the center X of the screen
        let centerX = windowWidth / 2;
        this.firstButtonX = centerX - (this.buttonGap * 1.5) - (this.buttonWidth * 2);
        this.secondButtonX = centerX - (this.buttonGap * 0.5) - this.buttonWidth;
        this.thirdButtonX = centerX + (this.buttonGap * 0.5);
        this.fourthButtonX = centerX + (this.buttonGap * 1.5) + this.buttonWidth;
    }
}
