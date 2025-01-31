class PicturesLoader {
    constructor() {
        this.chapterSelector = loadImage("./assets/pictures/bg_1.png");
        this.chapter1ThemePicture = loadImage("./assets/pictures/chapter_1_theme.png");
        this.chapter2ThemePicture = loadImage("./assets/pictures/chapter_2_theme.png");
        this.chapter3ThemePicture = loadImage("./assets/pictures/chapter_3_theme.png");
        this.chapter4ThemePicture = loadImage("./assets/pictures/chapter_4_theme.png");
        this.bgType = {
            CHAPTERSELECTOR: this.chapterSelector,
            CHAPTER1THEME: this.chapter1ThemePicture,
            CHAPTER2THEME: this.chapter2ThemePicture,
            CHAPTER3THEME: this.chapter3ThemePicture,
            CHAPTER4THEME: this.chapter4ThemePicture,
          }
    }        
    getBgType() {
        return this.bgType;
    }
}
