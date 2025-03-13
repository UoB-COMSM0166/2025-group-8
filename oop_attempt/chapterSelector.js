class ChapterSelector {
    buttonGenerationState = 0;
    escapeButtonGenState = 0;
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
        this.bgSetter = new BgSetter(window.bgType.CHAPTERSELECTOR, 0, 0, 0, windowWidth, windowHeight);

        this.buttonGap = windowWidth * 0.99 / 100;
        this.buttonY = windowHeight * 1 /18;
        this.buttonHeight = windowHeight * 82.5 / 100;
        this.buttonWidth = windowWidth * 23.5 / 100;
        this.firstButtonX = windowWidth * 1.5 / 100;

        this.minorButtonHeight = windowHeight * 3 / 100;
        this.minorButtonWidth = windowWidth * 7 / 100;

        this.calculatePositions();

    }

    draw() {
        if (this.buttonGenerationState == 0) {
            this.buttonGenerationState = 1;
            this.placeButtons();
        }
        this.bgSetter.draw();
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

    placeEscape() {
        this.escapeButton = createButton("🏠︎ BACK");
        this.escapeButton.class("escape");
        this.escapeButton.position(windowWidth *90/100, 25);
        // escapeButton.size(this.minorButtonWidth, this.minorButtonHeight);
        this.escapeButton.mousePressed(() => {
            this.escapeButton.remove();
            window.currentGameState = window.gameStates.CHAPTERSELECTOR;
            window.mainRoleMove = false;
        });

    }

    placeButtons() {
        // let firstButton = createButton("Chapter 1<br>The Awakening of Iron Fang\n");
        let firstButton = createButton("");

        firstButton.position(this.firstButtonX, this.buttonY);
        firstButton.size(this.buttonWidth, this.buttonHeight);
        firstButton.mousePressed(() => {
            this.removeButtons();
            this.placeEscape();
            window.currentGameState = window.gameStates.CHAPTER1; 
            });
        // let secondButton = createButton("Chapter 2<br>Betrayal and Rebellion");
        let secondButton = createButton("");
        secondButton.position(this.secondButtonX, this.buttonY);
        secondButton.size(this.buttonWidth, this.buttonHeight);
        secondButton.mousePressed(() => {
            this.removeButtons();
            this.placeEscape();
            window.currentGameState = window.gameStates.CHAPTER2;
            });
        // let thirdButton = createButton("Chapter 3<br>Air and Ground Showdown");
        let thirdButton = createButton("");
        thirdButton.position(this.thirdButtonX, this.buttonY);
        thirdButton.size(this.buttonWidth, this.buttonHeight);
        thirdButton.mousePressed(() => {
            this.removeButtons();
            this.placeEscape();
            window.currentGameState = window.gameStates.CHAPTER3;
            });
        // let fourthButton = createButton("Chapter 4<br>Uncovering the Truth");
        let fourthButton = createButton("");
        fourthButton.position(this.fourthButtonX, this.buttonY);
        fourthButton.size(this.buttonWidth, this.buttonHeight);
        fourthButton.mousePressed(() => {
            this.removeButtons();
            this.placeEscape();
            window.currentGameState = window.gameStates.CHAPTER4;
            });
        let developersButton = createButton("Developers");
        developersButton.position(this.developersButtonX, this.developersButtonY);
        developersButton.size(this.minorButtonWidth, this.minorButtonHeight);
        developersButton.class("minor");
        developersButton.mousePressed(() => {
            alert("Game Name: Iron Rebellion\n" +
                "Development Team: Group 8\n" + 
                "Members: Zewen Liang, Yunhao Zhou, Yingyu Zhang, Zhi Zhao, Kaijie Xu")
            });
        
        let helpButton = createButton("Help");
        helpButton.position(this.helpButtonX, this.helpButtonY);
        helpButton.size(this.minorButtonWidth, this.minorButtonHeight);
        helpButton.class("minor");
        helpButton.mousePressed(() => {
            alert("Move: A(Left) D(Right)\n" +
                "Shoot: W/S/A/D + J\n" +
                "Win the four chapters, and defeat the boss!")
            });

        let docsButton = createButton("Document");
        docsButton.position(this.docsButtonX, this.docsButtonY);
        docsButton.size(this.minorButtonWidth, this.minorButtonHeight);
        docsButton.class("minor");
        docsButton.mousePressed(() => {
            window.open("https://github.com/UoB-COMSM0166/2025-group-8/blob/main/README.md", "_blank"); 
            });

        this.buttonList = [firstButton, secondButton, thirdButton, fourthButton
            ,developersButton, helpButton, docsButton];
    }

    calculatePositions() {
        
        this.secondButtonX = this.firstButtonX + this.buttonGap + this.buttonWidth;
        this.thirdButtonX = this.secondButtonX + this.buttonGap + this.buttonWidth;
        this.fourthButtonX = this.thirdButtonX + this.buttonGap + this.buttonWidth;
        this.developersButtonX = windowWidth * 17 / 100;
        this.developersButtonY = windowHeight * 92.7 / 100;
        this.helpButtonX = windowWidth * 78.5 / 100;
        this.helpButtonY = windowHeight * 92.7 / 100;
        this.docsButtonX = windowWidth * 90.5 / 100;
        this.docsButtonY = windowHeight * 92.7 / 100;
    }

    removeButtons() {
        this.buttonList.forEach(button => button.remove());
        this.buttonGenerationState = 0;
    }
}
