class Chapter3Story {
  constructor() {
    this.configReader = new ConfigReader("./chapter3Config.json");
    this.hpBar = new HpBar();
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
    this.hpBar.placeHpBar();    
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
    // this.enemyDogs.push(new EnemyDog(windowWidth - 300, 100));
    // this.enemyDogs.push(new EnemyDog(windowWidth - 500, 100));
    // this.enemyDogs.push(new EnemyDog(2000, 100));
    this.enemyDogs = this.configReader.generateEnemyDogs();
    // this.configReader.generateEnemyDogs();
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
    // this.batteries.push(new Battery(windowWidth - 300, 100));
    // this.batteries.push(new Battery(windowWidth - 500, 100));
    this.batteries = this.configReader.generateBatteries();
  }

  batteriesSetup() {
    for (let battery of this.batteries) {
      battery.setup();
      if (battery.x < (0-battery.width-200)) {
        this.batteries.pop(battery);
      }
    }
  }

  test() {
    text("enemyDogs: " + this.enemyDogs.length, windowWidth - 200, 260);
    text("platform 1: " + this.collisionCheck(this.robotDog, this.platforms[0]), windowWidth - 200, 280);
    text("batteries: " + this.batteries.length, windowWidth - 200, 300)
  }

  platformsGenerate() {
    // this.platforms.push(new Platform(windowWidth - 300, 450, 200, 30, window.bgType.ROCK));
    this.platforms.push(new Platform(0, this.roadY + 0.82 * this.roadHeight, 10000, 0.3 * this.roadHeight, window.bgType.TRANSPARENT));
    // this.configReader.generatePlatforms();
    // this.platforms.push(new Platform(windowWidth - 500, 400, 40, 30));
    // this.platforms.push(new Platform(0, windowHeight - 50, 10000, 120, window.bgType.CHAPTER3STORYROAD));
  }

  platformsSetup() {
    for (let platform of this.platforms) {
      platform.setup();
    }
    // circle(0, this.roadY + 0.5 * this.roadHeight, 20);
  }

  collisionHandle() {
    // 处理robotDog和enemyDog的碰撞
    for (let i = this.enemyDogs.length - 1; i >= 0; i--) {
      let enemyDog = this.enemyDogs[i];
      if (this.collisionCheck(this.robotDog, enemyDog)) {
        this.hpBar.lives -= 1;
        // 使用 splice 方法删除特定的 enemyDog 对象
        this.enemyDogs.splice(i, 1);
      }
    }
    // 处理robotDog和platform的碰撞
    this.robotDog.onGround = false;
    for (let i = this.platforms.length - 1; i >= 0; i--) {
      let platform = this.platforms[i];
      if (this.collisionCheck(this.robotDog, platform) &&
        !(keyIsDown(87) || keyIsDown(119))) {
        this.robotDog.onGround = true;
      } else if (this.robotDog.velocityY > 0 && this.collisionCheck(this.robotDog, platform)) {
        // 正在下落且碰撞到平台则说明已经onGround
        this.robotDog.isJumping = false;
        this.robotDog.onGround = true;
      } 
    }
    // 处理enemyDog和platform的碰撞
    for (let i = this.enemyDogs.length - 1; i >= 0; i--) {
      let enemyDog = this.enemyDogs[i];
      enemyDog.onGround = false;
      for (let j = this.platforms.length - 1; j >= 0; j--) {
        let platform = this.platforms[j];
        if (this.collisionCheck(enemyDog, platform)) {
          enemyDog.onGround = true;
        }
      }
    }
    // 处理battery和platform的碰撞
    for (let i = this.batteries.length - 1; i >= 0; i--) {
      let battery = this.batteries[i];
      battery.onGround = false;
      for (let j = this.platforms.length - 1; j >= 0; j--) {
        let platform = this.platforms[j];
        if (this.collisionCheck(battery, platform)) {
          battery.onGround = true;
        }
      }
    }
    // 处理robotDog和battery的碰撞
    for (let i = this.batteries.length - 1; i >= 0; i--) {
      let battery = this.batteries[i];
      if (this.collisionCheck(this.robotDog, battery)) {
        this.hpBar.lives += 1;
        // 使用 splice 方法删除特定的 battery 对象
        this.batteries.splice(i, 1);
      }
    }
  }


  collisionCheck(object1, object2) {
    // 检查 object1 是否在 object2 的左侧
    if (object1.x + object1.width/2.0 < object2.x - object2.width/2.0) {
      return false;
    }
    // 检查 object1 是否在 object2 的右侧
    if (object1.x - object1.width/2.0 > object2.x + object2.width/2.0) {
      return false;
    }
    // 检查 object1 是否在 object2 的上方
    if (object1.y + object1.height/2.0 < object2.y - object2.height/2.0) {
      return false;
    }
    // 检查 object1 是否在 object2 的下方
    if (object1.y - object1.height/2.0 > object2.y + object2.height/2.0) {
      return false;
    }
    return true;
  }

}