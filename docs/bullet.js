class Bullet {
    constructor(bulletX, bulletY, rotation) {
      this.roleImage = window.bgType.BULLET;
      this.x = bulletX;
      this.y = bulletY;
      this.speed = 6;
      this.rotation = rotation;
      // this.direction = radians(rotation);
      this.width = 50;
      this.height = this.width * 152 / 513.0;
    }
  
    setup() {
        this.display();
        this.update();
    }

    // 更新子弹位置
    update() {
      this.x += this.speed * cos(this.rotation);
      this.y -= this.speed * sin(this.rotation);
    }
  
    // 绘制子弹
    display() {
        push(); // Save the current transformation state
        translate(this.x, this.y);
        rotate(this.rotation);
        // scale(this.direction, 1); // Scale the image horizontally based on direction
        image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); // Draw the image centered
        pop(); // Restore the previous transformation state
    }
  
    // 判断子弹是否超出屏幕
    // isOutOfBounds() {
    //   return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
    // }
  
    // 检查子弹是否与敌人碰撞
    // hits(enemy) {
    //   let d = dist(this.x, this.y, enemy.x, enemy.y);
    //   return d < this.radius + enemy.radius;
    // }
  }
  