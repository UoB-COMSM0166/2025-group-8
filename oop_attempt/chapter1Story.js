class Chapter1Story {
  constructor() {
    this.configReader = new ConfigReader(window.story1Config);
    this.robotDog = new RobotDog();
    this.hud = new Hud(this.configReader.config.roadLength, this.robotDog);
    this.roadHeight = windowHeight / 6;
    this.roadY = windowHeight - this.roadHeight;
    this.fgHeight = windowHeight / 5;
    this.fgY = windowHeight - this.fgHeight;
    this.farBgSetter = new BgSetter(window.bgType.CHAPTER1FARBG, 1, 0, 0, 0, windowHeight);
    this.roadSetter = new BgSetter(window.bgType.CHAPTER1RD, 4, 0, this.roadY, windowWidth, this.roadHeight);
    this.foregroundSetter = new BgSetter(window.bgType.CHAPTER1FG, 10, 0, this.fgY, 0, this.fgHeight);
    this.elementsGenerate();
  }

  draw() {
    this.farBgSetter.draw();
    this.hud.draw();
    this.roadSetter.draw();
    this.drawElements(["instructions", "enemyDogs", "batteries", "platforms", "drones", "guns", "flames", "finalBosses"]);
    this.robotDog.draw();
    this.handleCollision();
    this.foregroundSetter.draw();
    // this.test();
  }

  // test() {
  //   fill("white");
  //   textSize(20);
  //   text("this.dog.x:" + this.robotDog.x, 100, 100);
  //   text("this.dog.y:" + this.robotDog.y, 100, 120);
  //   text("this.dog.width:" + this.robotDog.width, 100, 140);
  //   text("this.dog.height:" + this.robotDog.height, 100, 180);
  //   text("this.dog.checkCollision:" + this.robotDog.checkCollision(this.platforms[0]), 100, 160);
  //   text("platform[0].x:" + this.platforms[0].x, 100, 200);
  //   text("platform[0].y:" + this.platforms[0].y, 100, 220);
  //   text("platform[0].width:" + this.platforms[0].width, 100, 240);
  //   text("platform[0].height:" + this.platforms[0].height, 100, 260);
  //   let isCollided = 
  //     Math.abs(this.robotDog.x - this.platforms[0].x) < (this.robotDog.width / 2 + this.platforms[0].width / 2) &&
  //     Math.abs(this.robotDog.y - this.platforms[0].y) < (this.robotDog.height / 2 + this.platforms[0].height / 2);
  //   text("isCollided:" + isCollided, 100, 280);
  //   text("this.dog.velocityX:" + this.robotDog.velocityX, 100, 300);
  //   text("this.dog.velocityY:" + this.robotDog.velocityY, 100, 320);
  //   text("this.dog.onGround:" + this.robotDog.onGround, 100, 340);
  // } 

  elementsGenerate() {
    this.enemyDogs = this.configReader.generateEnemyDogs();
    this.batteries = this.configReader.generateBatteries();
    this.platforms = this.configReader.generatePlatforms();
    this.drones = this.configReader.generateDrones();
    this.guns = this.configReader.generateGuns();
    this.flames = this.configReader.generateFlames();
    this.instructions = this.configReader.generateInstructions();
    this.platforms.push(new Platform(this.configReader.config.roadLength / 2.0, this.roadY + 0.82 * this.roadHeight, this.configReader.config.roadLength, 0.3 * this.roadHeight, window.bgType.TRANSPARENT));
    this.finalBosses = this.configReader.generateFinalBosses();
  }

  drawElements(elements) {
    for (let element of elements) {
      this[element] = this[element].filter(obj => {
        obj.draw();
        return !obj.isDiscarded;
      });
    }
  }

  handleCollision() {
    for (let entity of [this.robotDog, ...this.enemyDogs, ...this.batteries, ...this.guns, ...this.finalBosses]) {
      // this.checkCollisionWithPlatforms(entity);
      for (let platform of this.platforms) {
        if (!platform.isDiscarded && platform.isDisplay && entity.checkCollision(platform)) {
          entity.resolveCollisionWithPlatform(platform);
          break; // 只处理一次碰撞
        } else {
          entity.onGround = false;
        }
      }
    }
  
    // 子弹射中platform时子弹消失
    for (let bullet of this.robotDog.bullets) {
      for (let platform of this.platforms) {
        if (!platform.isDiscarded && platform.isDisplay && bullet.checkCollision(platform)) {
          bullet.isDiscarded = true;
          break; // 只处理一次碰撞
        }
      }
    }

    // 子弹射中enemy时触发攻击效果
    for (let bullet of this.robotDog.bullets) {
      for (let enemy of [...this.enemyDogs, ...this.drones, ...this.finalBosses]) {
        if (!enemy.isDiscarded && enemy.isDisplay && bullet.checkCollision(enemy)) {
          bullet.pickEffect(enemy);
        }
      }
    }
    // robotDog拾取电池和武器效果
    for (let pickable of [...this.batteries, ...this.guns, ...this.flames]) {
      if (!pickable.isDiscarded && pickable.isDisplay && this.robotDog.checkCollision(pickable)) {
        pickable.pickEffect(this.robotDog);
      }
    }
    // robotDog和enemy碰撞
    for (let enemy of [...this.enemyDogs, ...this.drones]) {
      if (!enemy.isDiscarded && enemy.isDisplay && this.robotDog.checkCollision(enemy)) {
          this.robotDog.die();
          enemy.isDiscarded = true;
      }
    }
  }


}