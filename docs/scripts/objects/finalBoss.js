class FinalBoss extends Enemy{
    constructor(x, y) {
      super(x, y);
      this.roleImage = window.bgType.FINALBOSS;
      this.width = windowHeight / 5.0 * 1.5;
      this.height = windowHeight / 3.0 * 1.5;
      this.speed = 0;
      this.moveDistance = windowWidth / 5.0;
      this.moveDistanceRecord = 0;
      this.moveDirection = -1;
      this.maxSpeed = 0.2;
      this.imageDirection = -1;
      this.health = 250;
    }
  

    // aiMove() {
    //   // 随机改变方向
    //   if (Math.random() < 0.005) { // 每帧有0.5%的概率改变方向
    //       this.moveDirection *= -1;
    //   }
  
    //   // 引入加速度和减速度
    //   let acceleration = 0.2; // 加速度
    //   let deceleration = 0.1; // 减速度
  
    //   // 加速如果正在当前方向移动
    //   if (this.moveDirection === 1 && this.speed < this.maxSpeed) {
    //       this.speed += acceleration;
    //   } else if (this.moveDirection === -1 && this.speed > -this.maxSpeed) {
    //       this.speed -= acceleration;
    //   } else {
    //       // 减速如果速度超过最大速度的相反方向
    //       if (this.speed > 0) {
    //           this.speed -= deceleration;
    //       } else if (this.speed < 0) {
    //           this.speed += deceleration;
    //       }
    //   }
  
    //   // 根据当前速度更新x位置
    //   this.velocityX = this.speed;
    //   this.x += this.speed;
  
    //   // 更新移动距离记录
    //   // this.moveDistanceRecord += Math.abs(this.speed);
    //   this.moveDistanceRecord += this.speed;
  
    //   // 如果移动距离记录超过移动距离，则反转方向
    //   if (this.moveDistanceRecord >= this.moveDistance) {
    //       this.moveDirection *= -1;
    //       this.moveDistanceRecord = 0; // 重置移动距离记录
    //   }
    // }
    aiMove() {
        let centerX = windowWidth / 2;
    
        // 如果敌人超出屏幕左右边界，强制调整方向
        if (this.x < -this.width || this.x > windowWidth + this.width) {
            this.moveDirection = this.x < centerX ? 1 : -1; // 让它朝屏幕中心移动
            this.speed = this.maxSpeed; // 给予速度
        } else if (Math.random() < 0.005) { 
            this.moveDirection *= -1; // 5% 概率随机改变方向
        }
    
        // 加速或减速
        let acceleration = 0.2, deceleration = 0.1;
        if (this.moveDirection === 1 && this.speed < this.maxSpeed) {
            this.speed += acceleration;
        } else if (this.moveDirection === -1 && this.speed > -this.maxSpeed) {
            this.speed -= acceleration;
        } else {
            if (this.speed > 0) this.speed -= deceleration;
            else if (this.speed < 0) this.speed += deceleration;
        }
    
        // 更新位置
        this.velocityX = this.speed;
        this.x += this.speed;
    
        // 记录移动距离
        this.moveDistanceRecord += Math.abs(this.speed);
    
        // 如果移动距离超过设定值，则反转方向
        if (this.moveDistanceRecord >= this.moveDistance) {
            this.moveDirection *= -1;
            this.moveDistanceRecord = 0;
        }
    }

    destroyEffect() {
        window.currentGameState = 0;
    }
  
  }
  