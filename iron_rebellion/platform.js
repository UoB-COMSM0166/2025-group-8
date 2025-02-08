class Platform {
    constructor(x, y, width, height, image) {
        this.roleImage = image;       
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.relativeSpeed = 4;
        if ((this.x - this.width / 2) >= windowWidth + 200) {
            this.isDisplay = false;
        } else {
            this.isDisplay = true;
        }
        this.isDiscarded = false;
    }

    setup() {
        if (this.isDisplay) {
          this.draw();
        }
        if (!this.isDiscarded) {
          this.relativelyMove();
          this.discardCheck();
          this.displayCheck();
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
    
    
    draw() {
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