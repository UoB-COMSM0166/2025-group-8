class EnemyDog extends Enemy{
  constructor(x, y) {
    super(x, y);
    this.roleImage = window.bgType.ENEMYDOG;
    this.width = windowHeight / 6.0;
    this.height = windowHeight / 6.0;
    this.speed = -1;
    this.moveDistance = windowWidth / 2.0;
    this.moveDistanceRecord = 0;
    this.moveDirection = 1;
    this.maxSpeed = 1;
    this.imageDirection = -1;
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
    this.velocityX = this.speed;
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
