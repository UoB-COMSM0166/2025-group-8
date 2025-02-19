class Chapter2Story {
  constructor() {
    this.configReader = new ConfigReader(window.story1Config);
    this.hud = new Hud(this.configReader.config.roadLength);
    this.robotDog = new RobotDog();
    this.storyBgWidth = 5391/1714.0*windowWidth;
    this.roadY = windowHeight-(613 / 4400.0 * windowWidth);
    this.roadHeight = 613 / 4400.0 * windowWidth;
    this.storyBgSetter = new BgSetter(window.bgType.CHAPTER3STORYBACKGROUND, 2, 255, 0, 0, this.storyBgWidth, windowHeight);
    this.roadBgSetter = new BgSetter(window.bgType.CHAPTER3STORYROAD, 4, 255, 0, this.roadY, windowWidth, this.roadHeight);
    this.elementsGenerate();
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
    this.roadBgSetter.setup();
  }

  elementsGenerate() {
    this.enemyDogs = this.configReader.generateEnemyDogs();
    this.batteries = this.configReader.generateBatteries();
    this.bottomPlatform = new Platform(this.configReader.config.roadLength/2.0, this.roadY + 0.82 * this.roadHeight, this.configReader.config.roadLength, 0.3 * this.roadHeight, window.bgType.TRANSPARENT);
    this.platforms = this.configReader.generatePlatforms();
    this.platforms.push(this.bottomPlatform);
    this.drones = this.configReader.generateDrones();
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

  // New version about collisions(Zhi Zhao)
  collisionHandle() {
    // Handle collisions between robotDog and enemyDogs
    for (let i = this.enemyDogs.length - 1; i >= 0; i--) {
      let enemyDog = this.enemyDogs[i];
      if (this.collisionCheck(this.robotDog, enemyDog)) {
        this.hud.removeLife();
        this.enemyDogs.splice(i, 1);
        this.robotDog.x = 50;
        this.robotDog.y = 50;
      }
    }

    // Handle collisions between robotDog and drones
    for (let i = this.drones.length - 1; i >= 0; i--) {
      let drone = this.drones[i];
      if (this.collisionCheck(this.robotDog, drone)) {
        this.hud.removeLife();
        this.drones.splice(i, 1);
        this.robotDog.x = 50;
        this.robotDog.y = 50;
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