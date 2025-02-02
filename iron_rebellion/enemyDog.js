class EnemyDog {
  constructor(x, y) {
    this.roleImage = loadImage("./assets/pictures/enemy_dog.png");
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
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
  }

  setup() {
    this.display();
    this.gravityEffect();
    this.relativelyMove();
    this.aiMove();
  }

  display() {
    // image(this.roleImage, this.x, this.y, this.width, this.height); // Draw the image centered
    push(); // Save the current transformation state
    // translate(this.x + this.width / 2, this.y + this.height / 2); // Move to the center of the image
    // translate(this.x, this.y + this.height);
    translate(this.x, this.y + this.height/2);
    scale(this.moveDirection * -1, 1); // Scale the image horizontally based on direction
    image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); // Draw the image centered
    // image(this.roleImage, this.x, this.y, this.width, this.height);
    pop(); // Restore the previous transformation state
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
      this.x -= this.relativeSpeed;
    }
  }

  aiMove() {
    // ai来回移动
    this.x += (this.speed * this.moveDirection);
    this.moveDistanceRecord += (this.speed * this.moveDirection);
    if (this.moveDistanceRecord <= 0 || this.moveDistanceRecord >= this.moveDistance) {
      this.moveDirection *= -1;
    }
  }

  getX() {
    return this.x;
  }

  getWidth() {
    return this.width;
  }
 

}
