class BgSetter {
    constructor(image, relativeSpeed, tintValue, x, y, width, height) {
        this.bgImage = image;
        this.relativeSpeed = relativeSpeed;
        this.x = x;
        this.y = y;
        this.tintValue = tintValue;
        this.width = width;
        this.height = height;
        console.log(this.width);
        console.log(this.height);
    }

    setup() {
        this.draw();
    }

    draw() {
        tint(this.tintValue);
        image(this.bgImage, this.x, this.y, this.width, this.height);
        // if (this.x + this.width <= windowWidth + 50) {
        if (this.x <= -(this.width - windowWidth) + 50) {
            image(this.bgImage, this.x + this.width, this.y, this.width, this.height);
        }
        noTint();
        this.relativelyMove();
        if (this.x <= -this.width) {
            this.x = 0;
        }
    }

    relativelyMove() {
        if ((keyIsDown(68) || keyIsDown(100)) && window.mainRoleMove == false) {
          this.x -= this.relativeSpeed;
        }
    }

    test() {
        text("x: " + this.x, windowWidth - 200, 320);
        text("width: " + this.width, windowWidth - 200, 340)
    }

}
