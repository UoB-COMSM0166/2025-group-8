class Bullet extends PickableObject {  
  constructor(x, y, rotation) {
    super(x, y);
    this.roleImage = window.bgType.BULLET;
    this.width = 50;
    this.height = this.width * 152 / 513.0;
    this.gravity = 0;
    this.speed = 8;
    this.rotation = rotation;
    this.damage = 50;
  }

  update() {
    this.x += this.speed * cos(this.rotation);
    this.y -= this.speed * sin(this.rotation);
  }

  // 绘制子弹
  render() {
    this.update();
    push(); // Save the current transformation state
    translate(this.x, this.y);
    rotate(this.rotation);
    image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); // Draw the image centered
    pop(); // Restore the previous transformation state
  }

  pickEffect(item) {
    super.pickEffect();
    item.health -= this.damage;
    item.x += cos(this.rotation) * random(20,40);
  }
}
   