class EnemyDog extends Enemy {
    constructor(x, y) {
      super(x, y);
      this.roleImage = window.bgType.ENEMYDOG;
      this.width = windowHeight / 5.0;
      this.height = windowHeight / 5.0;
      this.speed = -1;
      this.moveDistance = windowWidth / 2.0;
      this.moveDistanceRecord = 0;
      this.moveDirection = 1;
      this.maxSpeed = 1;
      this.imageDirection = -1;
    }
  
    aiMove() {
      // Randomly change direction
      if (Math.random() < 0.005) { // 0.5% chance to change direction each frame
        this.moveDirection *= -1;
      }
  
      // Introduce acceleration and deceleration
      let acceleration = 0.2; // Acceleration
      let deceleration = 0.1; // Deceleration
  
      // Accelerate if moving in the current direction
      if (this.moveDirection === 1 && this.speed < this.maxSpeed) {
        this.speed += acceleration;
      } else if (this.moveDirection === -1 && this.speed > -this.maxSpeed) {
        this.speed -= acceleration;
      } else {
        // Decelerate if exceeding max speed in the opposite direction
        if (this.speed > 0) {
          this.speed -= deceleration;
        } else if (this.speed < 0) {
          this.speed += deceleration;
        }
      }
  
      // Update x position based on current speed
      this.velocityX = this.speed;
      this.x += this.speed;
  
      // Update movement distance record
      this.moveDistanceRecord += this.speed;
  
      // Reverse direction if total moved distance exceeds limit
      if (this.moveDistanceRecord >= this.moveDistance) {
        this.moveDirection *= -1;
        this.moveDistanceRecord = 0; // Reset movement record
      }
    }
  }
  