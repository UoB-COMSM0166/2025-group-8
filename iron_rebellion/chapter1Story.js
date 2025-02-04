class Chapter1Story {
  constructor() {
    this.hpBar = new HpBar();
    this.robotDog = new RobotDog();
    this.enemyDogs = [];
    this.enemyDogsGenerate();
    this.platforms = [];
    this.platformsGenerate();
  }

  setup() {
    window.bgSetter.drawBg(window.currentBg);
    this.hpBar.placeHpBar();    
    this.robotDog.setup();
    this.enemyDogsSetup();
    this.platformsSetup();
    this.collisionHandle();
    this.test();
  }

  enemyDogsGenerate() {
    this.enemyDogs.push(new EnemyDog(windowWidth - 300, 100));
    this.enemyDogs.push(new EnemyDog(windowWidth - 500, 100));
  }

  enemyDogsSetup() {
    for (let enemyDog of this.enemyDogs) {
      enemyDog.setup();
      if (enemyDog.getX() < (0-enemyDog.getWidth()-200)) {
        this.enemyDogs.pop(enemyDog);
      }
    }
  }
  
  test() {
    text("enemyDogs: " + this.enemyDogs.length, windowWidth - 200, 260);
    text("platform 1: " + this.collisionCheck(this.robotDog, this.platforms[0]), windowWidth - 200, 280);
  }

  platformsGenerate() {
    this.platforms.push(new Platform(windowWidth - 300, 450, 200, 30));
    // this.platforms.push(new Platform(windowWidth - 500, 400, 40, 30));
    this.platforms.push(new Platform(0, windowHeight - 50, 10000, 120));
  }

  platformsSetup() {
    for (let platform of this.platforms) {
      platform.setup();
    }
  }

  collisionHandle() {
    // 处理robotDog和enemyDog的碰撞
    for (let i = this.enemyDogs.length - 1; i >= 0; i--) {
      let enemyDog = this.enemyDogs[i];
      if (this.collisionCheck(this.robotDog, enemyDog)) {
        this.robotDog.hp -= 10;
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