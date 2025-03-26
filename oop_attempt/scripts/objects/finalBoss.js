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
  
    aiMove() {
        let centerX = windowWidth / 2;
        let leftBound = centerX - (windowWidth * 2 / 3);
        let rightBound = centerX + (windowWidth * 2 / 3);
    
        // If the enemy moves out of the screen, force it to move towards the center
        if (this.x < -this.width || this.x > windowWidth + this.width) {
            this.moveDirection = this.x < centerX ? 1 : -1; // Move towards the center
            this.speed = this.maxSpeed; // Set speed to max
        } else if (Math.random() < 0.005) { 
            this.moveDirection *= -1; // 0.5% chance to change direction randomly
        }
    
        // Acceleration and deceleration logic
        let acceleration = 0.2, deceleration = 0.1;
        if (this.moveDirection === 1 && this.speed < this.maxSpeed) {
            this.speed += acceleration;
        } else if (this.moveDirection === -1 && this.speed > -this.maxSpeed) {
            this.speed -= acceleration;
        } else {
            if (this.speed > 0) this.speed -= deceleration;
            else if (this.speed < 0) this.speed += deceleration;
        }
    
        // Update position
        this.velocityX = this.speed;
        this.x += this.speed;
    
        // Update movement distance record
        this.moveDistanceRecord += Math.abs(this.speed);
    
        // Reverse direction if movement distance exceeds the set threshold
        if (this.moveDistanceRecord >= this.moveDistance) {
            this.moveDirection *= -1;
            this.moveDistanceRecord = 0;
        }
    }
    
    destroyEffect() {
        window.chapterSelector.escapeToHome();
    }
  
  }
  