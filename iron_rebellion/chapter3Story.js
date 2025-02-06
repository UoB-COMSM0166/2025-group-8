class Chapter3Story {
  constructor() {
    this.configReader = new ConfigReader(window.story1Config);
    this.hud = new Hud(this.configReader.config.roadLength);
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
    this.drones = []
    this.dronesGenerate();
  }

  setup() {
    this.storyBgSetter.setup();
    this.hud.setup();    
    this.robotDog.setup();
    this.enemyDogsSetup();
    this.platformsSetup();
    this.collisionHandle();
    this.batteriesSetup();
    this.dronesSetup();
    // this.test();
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
    text("bottomPlatform x: " + this.bottomPlatform.x, windowWidth - 400, 360);
    text("bottomPlatform y: " + this.bottomPlatform.y, windowWidth - 400, 380);
    text("bottomPlatform discarded: " + this.bottomPlatform.isDiscarded, windowWidth - 400, 400);
    text("bottomPlatform display: " + this.bottomPlatform.isDisplay, windowWidth - 400, 420);
  }

  platformsGenerate() {
    this.bottomPlatform = new Platform(this.configReader.config.roadLength/2.0, this.roadY + 0.82 * this.roadHeight, this.configReader.config.roadLength, 0.3 * this.roadHeight, window.bgType.TRANSPARENT);
    this.platforms = this.configReader.generatePlatforms();
    this.platforms.push(this.bottomPlatform);
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

  dronesGenerate() {
    this.drones = this.configReader.generateDrones();
  }

  dronesSetup() { 
    for (let i = this.drones.length - 1; i >= 0; i--) {
      let drone = this.drones[i];
      drone.setup();
      if (drone.isDiscarded) {
        // 使用 splice 方法删除特定的 enemyDog 对象
        this.drones.splice(i, 1);
      }
    }
  }

  collisionHandle() {
    // 处理robotDog和enemyDog的碰撞
    for (let i = this.enemyDogs.length - 1; i >= 0; i--) {
      let enemyDog = this.enemyDogs[i];
      if (this.collisionCheck(this.robotDog, enemyDog)) {
        this.hud.removeLife();
        // 使用 splice 方法删除特定的 enemyDog 对象
        this.enemyDogs.splice(i, 1);
        this.robotDog.x = 50;
        this.robotDog.y = 50;
      }
    }

    // 处理robotDog和drone的碰撞
    for (let i = this.drones.length - 1; i >= 0; i--) {
      let drone = this.drones[i];
      if (this.collisionCheck(this.robotDog, drone)) {
        this.hud.removeLife();
        // 使用 splice 方法删除特定的 drone 对象
        this.drones.splice(i, 1);
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
        this.hud.addLife();
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