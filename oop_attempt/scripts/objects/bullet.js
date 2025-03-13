class Bullet extends PickableObject {  
  constructor(x, y, rotation) {
    super(x, y);
    this.roleImage = window.bgType.BULLET;
    this.width = windowHeight / 10;
    this.height = this.width * 152 / 513.0;
    this.gravity = 0;
    this.speed = 12;
    this.rotation = rotation;
    this.damage = 50;
    this.accelerate = 1;
  }

  update() {
    this.x += this.speed * cos(this.rotation);
    this.y -= this.speed * sin(this.rotation);
    // give bullet an acceleration
    this.speed += this.accelerate;
  }

  discardCheck() {
      if ((this.x + this.width/2) < -200 || (this.x - this.width/2) > windowWidth+200) {
          this.isDiscarded = true;
      }
  }

  render() {
    this.update();
    // change picture placing method from top-left to center
    // this makes collision dectection eaiser
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); 
    pop(); 
  }

  pickEffect(item) {
    super.pickEffect();
    item.health -= this.damage;
    item.x += cos(this.rotation) * random(20,40);
    if (!item.onGround) {
      item.y -= sin(this.rotation) * random(20,40);
    }
  }
}