class Chapter4Story {
  constructor() {
    this.configReader = new ConfigReader(window.story1Config);
    this.hud = new Hud();
    this.robotDog = new RobotDog();
    this.storyBgWidth = 5391/1714.0*windowWidth;
    this.roadY = windowHeight-(613 / 4400.0 * windowWidth);
    this.roadHeight = 613 / 4400.0 * windowWidth;
    this.storyBgSetter = new BgSetter(window.bgType.CHAPTER3STORYBACKGROUND, 2, 255, 0, 0, this.storyBgWidth, windowHeight);
    this.roadBgSetter = new BgSetter(window.bgType.CHAPTER3STORYROAD, 4, 255, 0, this.roadY, windowWidth, this.roadHeight);
    this.enemyDogs = [];
    this.enemyDogsGenerate();
    this.platforms = [];
    this.platformsGenerate();
    this.batteries = [];
    this.batteriesGenerate();
    
  }

  setup() {
    this.storyBgSetter.setup();
    this.hud.setup();    
    this.robotDog.setup();
    this.enemyDogsSetup();
    this.platformsSetup();
    this.collisionHandle();
    this.batteriesSetup();
    this.test();
    this.roadBgSetter.setup();
    this.storyBgSetter.test();
  }

  enemyDogsGenerate() {
    this.enemyDogs = this.configReader.generateEnemyDogs();
  }

  enemyDogsSetup() {
    for (let i = this.enemyDogs.length - 1; i >= 0; i--) {
      let enemyDog = this.enemyDogs[i];
      enemyDog.setup();
      if (enemyDog.isDiscarded) {
        // 使用 splice 方法删除特定的 enemyDog 对象
        this.enemyDogs.splice(i, 1);
      }
    }
  }
  
  batteriesGenerate() {
    this.batteries = this.configReader.generateBatteries();
  }

  batteriesSetup() {
    for (let i = this.batteries.length - 1; i >= 0; i--) {
      let battery = this.batteries[i];
      battery.setup();
      if (battery.x < (0-battery.width-200)) {
        if (battery.isDiscarded) {
          // 使用 splice 方法删除特定的 enemyDog 对象
          this.batteries.splice(i, 1);
        }
      }
    }
  }

  test() {
    // text("enemyDogs: " + this.enemyDogs.length, windowWidth - 200, 260);
    // text("platform 1: " + this.collisionCheck(this.robotDog, this.platforms[0]), windowWidth - 200, 280);
    // text("batteries: " + this.batteries.length, windowWidth - 200, 300);
    text("bottomPlatform x: " + this.bottomPlatform.x, windowWidth - 400, 360);
    text("bottomPlatform y: " + this.bottomPlatform.y, windowWidth - 400, 380);
    text("bottomPlatform discarded: " + this.bottomPlatform.isDiscarded, windowWidth - 400, 400);
    text("bottomPlatform display: " + this.bottomPlatform.isDisplay, windowWidth - 400, 420);
  }

  platformsGenerate() {
    // this.platforms.push(new Platform(windowWidth - 300, 450, 200, 30, window.bgType.ROCK));
    this.bottomPlatform = new Platform(0, this.roadY + 0.82 * this.roadHeight, 10000, 0.3 * this.roadHeight, window.bgType.TRANSPARENT);
    this.platforms = this.configReader.generatePlatforms();
    this.platforms.push(this.bottomPlatform);
    // this.platforms.push(new Platform(windowWidth - 500, 400, 40, 30));
    // this.platforms.push(new Platform(0, windowHeight - 50, 10000, 120, window.bgType.CHAPTER3STORYROAD));
  }

  platformsSetup() {
    for (let i = this.platforms.length - 1; i >= 0; i--) {
      let platform = this.platforms[i];
      platform.setup();
      if (platform.isDiscarded) {
        // 使用 splice 方法删除特定的 enemyDog 对象
        this.platforms.splice(i, 1);
      }
    }
  }

  // New version about collisions(Zhi Zhao)
  collisionHandle() {
    // Handle collisions between robotDog and enemyDogs
    for (let i = this.enemyDogs.length - 1; i >= 0; i--) {
      let enemyDog = this.enemyDogs[i];
      if (this.collisionCheck(this.robotDog, enemyDog)) {
        this.hud.lives -= 1;
        this.enemyDogs.splice(i, 1);
      }
    }

    // Handle collisions between robotDog and platforms
    this.robotDog.onGround = false;
    for (let platform of this.platforms) {
      if (!this.collisionCheck(this.robotDog, platform)) continue;

      let prevX = this.robotDog.x - this.robotDog.velocityX;
      let prevY = this.robotDog.y - this.robotDog.velocityY;
      let wasAbove = prevY + this.robotDog.height / 2 <= platform.y - platform.height / 2;
      let wasBelow = prevY - this.robotDog.height / 2 >= platform.y + platform.height / 2;
      let wasLeft = prevX + this.robotDog.width / 2 <= platform.x - platform.width / 2;
      let wasRight = prevX - this.robotDog.width / 2 >= platform.x + platform.width / 2;

      if (wasAbove && this.robotDog.velocityY > 0) {
        this.robotDog.y = platform.y - platform.height / 2 - this.robotDog.height / 2;
        this.robotDog.velocityY = 0;
        this.robotDog.onGround = true;
      } else if (wasBelow && this.robotDog.velocityY < 0) {
        this.robotDog.y = platform.y + platform.height / 2 + this.robotDog.height / 2;
        this.robotDog.velocityY = 0;
      }

      if (wasLeft && this.robotDog.velocityX > 0) {
        this.robotDog.x = platform.x - platform.width / 2 - this.robotDog.width / 2;
        this.robotDog.velocityX = 0;
      } else if (wasRight && this.robotDog.velocityX < 0) {
        this.robotDog.x = platform.x + platform.width / 2 + this.robotDog.width / 2;
        this.robotDog.velocityX = 0;
      }
    }

    // Handle collisions between enemyDogs and platforms
    for (let enemyDog of this.enemyDogs) {
      enemyDog.onGround = false;
      for (let platform of this.platforms) {
        if (this.collisionCheck(enemyDog, platform) && enemyDog.velocityY >= 0) {
          enemyDog.onGround = true;
          enemyDog.velocityY = 0;
          enemyDog.y = platform.y - platform.height / 2 - enemyDog.height / 2;
          break;
        }
      }
    }

    // Handle collisions between batteries and platforms
    for (let battery of this.batteries) {
      battery.onGround = false;
      for (let platform of this.platforms) {
        if (this.collisionCheck(battery, platform)) {
          battery.onGround = true;
          break;
        }
      }
    }

    // Handle collisions between robotDog and batteries
    for (let i = this.batteries.length - 1; i >= 0; i--) {
      let battery = this.batteries[i];
      if (this.collisionCheck(this.robotDog, battery)) {
        this.hud.lives += 1;
        this.batteries.splice(i, 1);
      }
    }
  }

  collisionCheck(a, b) {
    return !(
      a.x + a.width / 2 <= b.x - b.width / 2 ||
      a.x - a.width / 2 >= b.x + b.width / 2 ||
      a.y + a.height / 2 <= b.y - b.height / 2 ||
      a.y - a.height / 2 >= b.y + b.height / 2
    );
  }
}