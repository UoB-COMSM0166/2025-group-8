class Platform {
    constructor(x, y, width, height, image) {
        this.roleImage = image;       
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.relativeSpeed = 4;
    }

    setup() {
        this.display();
        this.relativelyMove();
    }

    display() {
        push(); // Save the current transformation state
        translate(this.x, this.y);
        image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); // Draw the image centered
        pop(); // Restore the previous transformation state
        // image(this.roleImage, this.x, this.y, this.width, this.height);
        // circle(this.x, this.y, 10);
    }

    relativelyMove() {
        if ((keyIsDown(68) || keyIsDown(100)) && window.mainRoleMove == false) {
          this.x -= this.relativeSpeed;
        }
      }
}