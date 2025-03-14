class Battery {
  constructor(x, y) {
    this.roleImage = loadImage("./assets/pictures/battery.png");
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.velocityY = 0;
    this.gravity = 0.5;
    this.isJumping = true;
    this.onGround = false;
    this.groundY = windowHeight - 100;
    this.relativeSpeed = 4;
    this.speed = 1;
    this.moveDistance = 400;
    this.moveDistanceRecord = 0;
    this.moveDirection = 1;
    if ((this.x - this.width / 2) >= windowWidth + 200) {
      this.isDisplay = false;
    } else {
      this.isDisplay = true;
    }
    this.isDiscarded = false;
  }

  setup() {
    this.draw();
    this.gravityEffect();
    this.relativelyMove();
  }

  draw() {
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

  discardCheck() {
    if ((this.x + this.width/2) < -200) {
        this.isDiscarded = true;
    }
  }

  displayCheck() {
      if ((this.x - this.width / 2) < windowWidth + 200) {
          this.isDisplay = true;
      } 
  }
}
