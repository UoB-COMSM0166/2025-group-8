class ChapterSelector {
    buttonGenerationState = 0;
    escapeButtonGenState = 0;
    chapterSelectionButtonList = [];
    escapeAndKeyboardButtonList = [];
    isKeyPressed = {'A': false, 'D': false, 'J': false, ' ': false};
    buttonGap = windowWidth * 0.99 / 100;
    buttonY = windowHeight * 1 / 18;
    buttonHeight = windowHeight * 82.5 / 100;
    buttonWidth = windowWidth * 23.5 / 100;
    minorButtonHeight = windowHeight * 3 / 100;
    minorButtonWidth = windowWidth * 7 / 100;

    constructor() {
        this.bgSetter = new BgSetter(window.bgType.CHAPTERSELECTOR, 0, 0, 0, windowWidth, windowHeight);
        this.calculatePositions();
    }

    draw() {
        if (this.buttonGenerationState == 0) {
            this.buttonGenerationState = 1;
            this.placeButtons();
        }
        this.bgSetter.draw();
    }

    displayImage(imageType, xPos) {
        image(imageType, xPos, this.pictureY, this.pictureWidth, this.pictureHeight);
    }

    placeEscapeAndKeyboard() {
        this.createEscapeButton();
        if (!navigator.userAgent.toString().includes("Windows") &&
            !navigator.userAgent.toString().includes("Linux")) {
            this.createKeyboardButton('A', 10, 70, 0, 0);
            this.createKeyboardButton('D', 10, 70, 1.5, 0);
            this.createKeyboardButton('J', 85, 65, 0, 0);
            this.createKeyboardButton(' ', 85, 65, -0.5, 1.5, 2);
        }
    }

    createEscapeButton() {
        let escapeButton = createButton("🏠︎ BACK");
        escapeButton.class("escape");
        escapeButton.position(windowWidth * 90 / 100, windowHeight * 5 / 100);
        escapeButton.mousePressed(() => {
            for (let button of this.escapeAndKeyboardButtonList) {
                button.remove();
            }
            window.currentGameState = window.gameStates.CHAPTERSELECTOR;
            window.mainRoleMove = false;
        });
        this.escapeAndKeyboardButtonList.push(escapeButton);
    }

    createKeyboardButton(keyChar, posX, posY, offsetX, offsetY, sizeMultiplier = 1) {
        let keyString;
        if (keyChar == ' ') {
            keyString = "Space";
        } else {
            keyString = keyChar;
        }
        let keyboardButtonSize = windowHeight / 15;
        let button = createButton(keyString);
        button.class("keyboard");
        button.position(windowWidth * posX / 100 + offsetX * keyboardButtonSize, windowHeight * posY / 100 + offsetY * keyboardButtonSize);
        button.size(keyboardButtonSize * sizeMultiplier, keyboardButtonSize);
        button.mousePressed(() => this.simulateKeyPress(keyChar));
        button.mouseReleased(() => this.simulateKeyRelease(keyChar));
        this.escapeAndKeyboardButtonList.push(button);
    }

    simulateKeyPress(keyChar) {
        let keyCode = this.getKeyCode(keyChar);
        if (!keyCode) return; // If invalid key, return

        this.triggerKeyEvent('keydown', keyChar, keyCode);
        this.isKeyPressed[keyChar] = true;
    }

    simulateKeyRelease(keyChar) {
        if (!this.isKeyPressed[keyChar]) return;

        let keyCode = this.getKeyCode(keyChar);
        if (!keyCode) return; // If invalid key, return

        this.triggerKeyEvent('keyup', keyChar, keyCode);
        this.isKeyPressed[keyChar] = false;
    }

    getKeyCode(keyChar) {
        const keyCodes = {
            'A': 65,
            'D': 68,
            'J': 74,
            ' ': 32
        };
        return keyCodes[keyChar];
    }

    triggerKeyEvent(eventType, keyChar, keyCode) {
        let keyEvent = new KeyboardEvent(eventType, {
            key: keyChar,
            code: `Key${keyChar}`,
            keyCode: keyCode,
            which: keyCode,
            bubbles: true
        });
        document.dispatchEvent(keyEvent);
    }

    placeButtons() {
        this.createChapterButton(1, this.firstButtonX);
        this.createChapterButton(2, this.secondButtonX);
        this.createChapterButton(3, this.thirdButtonX);
        this.createChapterButton(4, this.fourthButtonX);
        this.createMinorButton("Developers", this.developersButtonX, this.developersButtonY, () => this.showDevelopersInfo());
        this.createMinorButton("Help", this.helpButtonX, this.helpButtonY, () => this.showHelp());
        this.createMinorButton("Document", this.docsButtonX, this.docsButtonY, () => window.open("https://github.com/UoB-COMSM0166/2025-group-8/blob/main/README.md", "_blank"));
    }

    createChapterButton(chapterNumber, xPos) {
        let button = createButton("");
        button.position(xPos, this.buttonY);
        button.size(this.buttonWidth, this.buttonHeight);
        button.mousePressed(() => {
            this.removeButtons();
            this.placeEscapeAndKeyboard();
            window.currentGameState = window.gameStates[`CHAPTER${chapterNumber}`];
        });
        this.chapterSelectionButtonList.push(button);
    }

    createMinorButton(label, xPos, yPos, action) {
        let button = createButton(label);
        button.position(xPos, yPos);
        button.size(this.minorButtonWidth, this.minorButtonHeight);
        button.class("minor");
        button.mousePressed(action);
        this.chapterSelectionButtonList.push(button);
    }

    showDevelopersInfo() {
        alert(navigator.userAgent);
        // alert("Game Name: Iron Rebellion\n" +
        //     "Development Team: Group 8\n" +
        //     "Members: Zewen Liang, Yunhao Zhou, Yingyu Zhang, Zhi Zhao, Kaijie Xu");
    }

    showHelp() {
        alert("Move: A(Left) D(Right)\n" +
            "Shoot: W/S/A/D + J\n" +
            "Win the four chapters, and defeat the boss!");
    }

    calculatePositions() {
        this.firstButtonX = windowWidth * 1.5 / 100;
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
        if (this.chapterSelectionButtonList) {
            this.chapterSelectionButtonList.forEach(button => button.remove());
        }
        this.buttonGenerationState = 0;
    }
    
}
