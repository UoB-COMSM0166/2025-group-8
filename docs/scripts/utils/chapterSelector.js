class ChapterSelector {
    // Button generation states and storage
    buttonGenerationState = 0;
    escapeButtonGenState = 0;
    chapterSelectionButtonList = [];
    escapeAndKeyboardButtonList = [];

    // Track whether certain keys are pressed
    isKeyPressed = {'A': false, 'D': false, 'J': false, ' ': false};

    // Layout measurements based on screen size
    buttonGap = windowWidth * 0.99 / 100;
    buttonY = windowHeight * 1 / 18;
    buttonHeight = windowHeight * 82.5 / 100;
    buttonWidth = windowWidth * 23.5 / 100;
    minorButtonHeight = windowHeight * 3 / 100;
    minorButtonWidth = windowWidth * 7 / 100;

    constructor() {
        // Set background image for chapter selector screen
        this.bgSetter = new BgSetter(window.bgType.CHAPTERSELECTOR, 0, 0, 0, windowWidth, windowHeight);
        this.calculatePositions();
    }

    draw() {
        // Only generate buttons once
        if (this.buttonGenerationState == 0) {
            this.buttonGenerationState = 1;
            this.placeButtons();
        }
        this.bgSetter.draw();
    }

    displayImage(imageType, xPos) {
        image(imageType, xPos, this.pictureY, this.pictureWidth, this.pictureHeight);
    }

    // Place escape and virtual keyboard buttons (for mobile)
    placeEscapeAndKeyboard() {
        this.createEscapeButton();

        let userAgentString = navigator.userAgent.toLowerCase();
        // Show on-screen buttons for mobile devices
        if (userAgentString.includes("android") ||
            userAgentString.includes("iphone") || 
            userAgentString.includes("ipad")) {
            this.createKeyboardButton('A', 10, 70, 0, 0);
            this.createKeyboardButton('S', 10, 70, 2, 0);
            this.createKeyboardButton('D', 10, 70, 4, 0);
            this.createKeyboardButton('W', 10, 70, 2, -2);
            this.createKeyboardButton('J', 85, 70, 0, -2);
            this.createKeyboardButton(' ', 85, 70, -0.5, 0, 2);
        }
    }

    // Create "Back" button to return to home screen
    createEscapeButton() {
        let escapeButton = createButton("🏠︎ BACK");
        escapeButton.class("escape");
        escapeButton.position(windowWidth * 90 / 100, windowHeight * 5 / 100);
        escapeButton.mousePressed(() => this.escapeToHome());
        this.escapeAndKeyboardButtonList.push(escapeButton);
    }

    escapeToHome() {
        // Remove all UI buttons before navigating
        for (let button of this.escapeAndKeyboardButtonList) {
            button.remove();
        }
        window.currentGameState = window.gameStates.CHAPTERSELECTOR;
        window.mainRoleMove = false;
    }

    // Create virtual keyboard buttons for touch control
    createKeyboardButton(keyChar, posX, posY, offsetX, offsetY, sizeMultiplier = 1) {
        let keyString = (keyChar === ' ') ? "Space" : keyChar;
        let keyboardButtonSize = windowHeight / 10;
        let button = createButton(keyString);
        button.class("keyboard");
        button.position(
            windowWidth * posX / 100 + offsetX * keyboardButtonSize,
            windowHeight * posY / 100 + offsetY * keyboardButtonSize
        );
        button.size(keyboardButtonSize * sizeMultiplier, keyboardButtonSize);

        // Bind press/release events to simulate actual keyboard input
        button.mousePressed(() => this.simulateKeyPress(keyChar));
        button.mouseReleased(() => this.simulateKeyRelease(keyChar));
        button.touchStarted(() => this.simulateKeyPress(keyChar));
        button.touchEnded(() => this.simulateKeyRelease(keyChar));

        this.escapeAndKeyboardButtonList.push(button);
    }

    simulateKeyPress(keyChar) {
        let keyCode = this.getKeyCode(keyChar);
        if (!keyCode) return;
        this.triggerKeyEvent('keydown', keyChar, keyCode);
        this.isKeyPressed[keyChar] = true;
    }

    simulateKeyRelease(keyChar) {
        if (!this.isKeyPressed[keyChar]) return;
        let keyCode = this.getKeyCode(keyChar);
        if (!keyCode) return;
        this.triggerKeyEvent('keyup', keyChar, keyCode);
        this.isKeyPressed[keyChar] = false;
    }

    getKeyCode(keyChar) {
        const keyCodes = {
            'A': 65,
            'D': 68,
            'J': 74,
            ' ': 32,
            'W': 87,
            'S': 83 
        };
        return keyCodes[keyChar];
    }

    // Trigger a fake keyboard event (used by virtual buttons)
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

    // Create chapter and minor buttons
    placeButtons() {
        this.createChapterButton(1, this.firstButtonX);
        this.createChapterButton(2, this.secondButtonX);
        this.createChapterButton(3, this.thirdButtonX);
        this.createChapterButton(4, this.fourthButtonX);

        this.createMinorButton("Developers", this.developersButtonX, this.developersButtonY, () => this.showDevelopersInfo());
        this.createMinorButton("Help", this.helpButtonX, this.helpButtonY, () => this.showHelp());
        this.createMinorButton("Document", this.docsButtonX, this.docsButtonY, () => 
            window.open("https://github.com/UoB-COMSM0166/2025-group-8/blob/main/documentation/PlayerManual.md", "_blank"));
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
        alert("Game Name: Iron Rebellion\n" +
            "Development Team: Group 8\n" +
            "Members: Zewen Liang, Yunhao Zhou, Yingyu Zhang, Zhi Zhao, Kaijie Xu");
    }

    showHelp() {
        alert("Move: A(Left) D(Right)\n" +
            "Shoot: W/S/A/D + J\n" +
            "Jump: Space\n" +
            "Win the four chapters, and defeat the boss!");
    }

    // Calculate positions of buttons based on screen dimensions
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

    // Remove all chapter and minor buttons
    removeButtons() {
        if (this.chapterSelectionButtonList) {
            this.chapterSelectionButtonList.forEach(button => button.remove());
        }
        this.buttonGenerationState = 0;
    }
}
