class PicturesLoader {
    constructor() {
        this.chapterSelector = loadImage("./assets/pictures/bg_1.png");
        this.chapter1ThemePicture = loadImage("./assets/pictures/chapter_1_theme.png");
        this.chapter2ThemePicture = loadImage("./assets/pictures/chapter_2_theme.png");
        this.chapter3ThemePicture = loadImage("./assets/pictures/chapter_3_theme.png");
        this.chapter4ThemePicture = loadImage("./assets/pictures/chapter_4_theme.png");
        this.rock = loadImage("./assets/pictures/rock.png");
        this.transparent = loadImage("./assets/pictures/transparent.png");
        this.robotDog = loadImage("./assets/pictures/robot_dog_crop.gif");
        this.battery = loadImage("./assets/pictures/battery.png");
        this.enemyDog = loadImage("./assets/pictures/enemy_dog.png");
        this.drone = loadImage("./assets/pictures/drone.png");
        this.bullet = loadImage("./assets/pictures/bullet.png");
        this.gun = loadImage("./assets/pictures/gun.png");
        this.flame = loadImage("./assets/pictures/flame.gif");
        this.finalBoss = loadImage("./assets/pictures/final_boss.png");
        // chapter 1 pictures
        this.chapter1FarBg = loadImage("./assets/pictures/chapter_1_far_bg.jpg");
        this.chapter1Rd = loadImage("./assets/pictures/chapter_1_rd.png");
        this.chapter1Fg = loadImage("./assets/pictures/chapter_1_fg.png");
        // chapter 2 pictures
        this.chapter2FarBg = loadImage("./assets/pictures/chapter_2_far_bg.jpg");
        this.chapter2CloseBg = loadImage("./assets/pictures/chapter_2_close_bg.png");
        this.chapter2Rd = loadImage("./assets/pictures/chapter_2_rd.png");
        this.chapter2Fg = loadImage("./assets/pictures/chapter_2_fg.png");
        // chapter 3 pictures
        this.chapter3CloseBg = loadImage("./assets/pictures/chapter_3_close_bg.jpg");
        this.chapter3Rd = loadImage("./assets/pictures/chapter_3_rd.png");

        // instructions
        this.attackInstruction = loadImage("./assets/pictures/attack_instruction.png");
        this.moveInstruction = loadImage("./assets/pictures/move_instruction.png");
        this.pickUpInstruction = loadImage("./assets/pictures/pick_up_instruction.png");

        this.bgType = {
            CHAPTERSELECTOR: this.chapterSelector,
            CHAPTER1THEME: this.chapter1ThemePicture,
            CHAPTER2THEME: this.chapter2ThemePicture,
            CHAPTER3THEME: this.chapter3ThemePicture,
            CHAPTER4THEME: this.chapter4ThemePicture,

            ROCK: this.rock,
            TRANSPARENT: this.transparent,
            ROBOTDOG: this.robotDog,
            BATTERY: this.battery,
            ENEMYDOG: this.enemyDog,
            DRONE: this.drone,
            BULLET: this.bullet,
            GUN: this.gun,
            FLAME: this.flame,
            FINALBOSS: this.finalBoss,

            CHAPTER1FARBG: this.chapter1FarBg,
            CHAPTER1RD: this.chapter1Rd,
            CHAPTER1FG: this.chapter1Fg,
            CHAPTER2FARBG: this.chapter2FarBg,
            CHAPTER2CLOSEBG: this.chapter2CloseBg,
            CHAPTER2RD: this.chapter2Rd,
            CHAPTER2FG: this.chapter2Fg,
            CHAPTER3CLOSEBG: this.chapter3CloseBg,
            CHAPTER3RD: this.chapter3Rd,

            ATTACKINS: this.attackInstruction,
            MOVEINS: this.moveInstruction,
            PICKUPINS: this.pickUpInstruction,
          }
    }        
    getBgType() {
        return this.bgType;
    }
}
