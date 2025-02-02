class EnemyDog {
  constructor(x, y) {
    this.roleImage = loadImage("./assets/pictures/enemy_dog.png");
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    this.velocityY = 0;
    this.gravity = 0.3;
    this.isJumping = true;
    this.onGround = false;
    this.groundY = windowHeight - 100;
    this.speed = 4;
  }

  setup() {
    this.display();
    this.gravityEffect();
    this.relativelyMove();
  }

  display() {
    image(this.roleImage, this.x, this.y, this.width, this.height); // Draw the image centered
  }

  gravityEffect() {
    if (this.isJumping) {
        this.velocityY += this.gravity;
        this.y += this.velocityY;
    }

    if (this.y >= this.groundY) {
        this.y = this.groundY;
        this.velocityY = 0;
        this.isJumping = false;
        this.onGround = true; // Ensure onGround is set to true
    }
  }

  relativelyMove() {
    if ((keyIsDown(68) || keyIsDown(100)) && window.mainRoleMove == false) {
      this.x -= this.speed;
    }
  }
}
