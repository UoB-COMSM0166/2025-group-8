class EnemyDog {
  constructor(x, y) {
    this.roleImage = window.bgType.ENEMYDOG;
    this.x = x;
    this.y = y;
    this.width = windowHeight / 6.0;
    this.height = windowHeight / 6.0;
    this.velocityY = 0;
    this.gravity = 0.5;
    this.isJumping = true;
    this.onGround = false;
    this.relativeSpeed = 4;
    this.speed = 1;
    this.moveDistance = windowWidth / 2.0;
    this.moveDistanceRecord = 0;
    this.moveDirection = 1;
    this.maxSpeed = 2.5;
    if (this.x >= windowWidth + 200) {
      this.isDisplay = false;
    } else {
      this.isDisplay = true;
    }
    this.isDiscarded = false;
  }

  setup() {
    if (this.isDisplay) {
      this.display();
      this.aiMove();
      this.gravityEffect();
    }
    if (!this.isDiscarded) {
      this.relativelyMove();
      this.discardCheck();
      this.displayCheck();
    }
  }

  display() {
    push(); // Save the current transformation state
    translate(this.x, this.y);
    scale(this.moveDirection * -1, 1); // Scale the image horizontally based on direction
    image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); // Draw the image centered
    pop(); // Restore the previous transformation state
  }

  gravityEffect() {
    if (this.onGround && !(keyIsDown(87) || keyIsDown(119)))  {
        this.velocityY = 0;
    }
    if (!this.onGround) {
        this.velocityY += this.gravity;
        this.y += this.velocityY;
    }
}

  relativelyMove() {
    if ((keyIsDown(68) || keyIsDown(100)) && window.mainRoleMove == false) {
      this.x -= this.relativeSpeed;
    }
  }

  // 当超过左边屏幕边缘200像素时，消失
  discardCheck() {
    if (this.x < -200) {
      this.isDiscarded = true;
    }
  }

  displayCheck() {
    if (this.x < windowWidth + 200) {
      this.isDisplay = true;
    } 
  }

  aiMove() {
    // 随机改变方向
    if (Math.random() < 0.005) { // 每帧有0.5%的概率改变方向
        this.moveDirection *= -1;
    }

    // 引入加速度和减速度
    let acceleration = 0.2; // 加速度
    let deceleration = 0.1; // 减速度

    // 加速如果正在当前方向移动
    if (this.moveDirection === 1 && this.speed < this.maxSpeed) {
        this.speed += acceleration;
    } else if (this.moveDirection === -1 && this.speed > -this.maxSpeed) {
        this.speed -= acceleration;
    } else {
        // 减速如果速度超过最大速度的相反方向
        if (this.speed > 0) {
            this.speed -= deceleration;
        } else if (this.speed < 0) {
            this.speed += deceleration;
        }
    }

    // 根据当前速度更新x位置
    this.x += this.speed;

    // 更新移动距离记录
    // this.moveDistanceRecord += Math.abs(this.speed);
    this.moveDistanceRecord += this.speed;

    // 如果移动距离记录超过移动距离，则反转方向
    if (this.moveDistanceRecord >= this.moveDistance) {
        this.moveDirection *= -1;
        this.moveDistanceRecord = 0; // 重置移动距离记录
    }
}

}
