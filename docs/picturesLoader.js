class PicturesLoader {
    constructor() {
        this.chapterSelector = loadImage("./assets/pictures/bg_1.png");
        this.chapter1ThemePicture = loadImage("./assets/pictures/chapter_1_theme.png");
        this.chapter2ThemePicture = loadImage("./assets/pictures/chapter_2_theme.png");
        this.chapter3ThemePicture = loadImage("./assets/pictures/chapter_3_theme.png");
        this.chapter4ThemePicture = loadImage("./assets/pictures/chapter_4_theme.png");
        this.chapter3StoryBackground = loadImage("./assets/pictures/chapter_3_story_background.jpg");
        this.chapter3StoryRoad = loadImage("./assets/pictures/road_3.png");
        this.rock = loadImage("./assets/pictures/rock.png");
        this.transparent = loadImage("./assets/pictures/transparent.png");
        this.robotDog = loadImage("./assets/pictures/robot_dog-min.gif");
        this.battery = loadImage("./assets/pictures/battery.png");
        this.enemyDog = loadImage("./assets/pictures/enemy_dog.png");
        this.drone = loadImage("./assets/pictures/drone.png");
        this.bullet = loadImage("./assets/pictures/bullet.png");
        this.bgType = {
            CHAPTERSELECTOR: this.chapterSelector,
            CHAPTER1THEME: this.chapter1ThemePicture,
            CHAPTER2THEME: this.chapter2ThemePicture,
            CHAPTER3THEME: this.chapter3ThemePicture,
            CHAPTER4THEME: this.chapter4ThemePicture,
            CHAPTER3STORYBACKGROUND: this.chapter3StoryBackground,
            CHAPTER3STORYROAD: this.chapter3StoryRoad,
            ROCK: this.rock,
            TRANSPARENT: this.transparent,
            ROBOTDOG: this.robotDog,
            BATTERY: this.battery,
            ENEMYDOG: this.enemyDog,
            DRONE: this.drone,
            BULLET: this.bullet,
          }
    }        
    getBgType() {
        return this.bgType;
    }
}
