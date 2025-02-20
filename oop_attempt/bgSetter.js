class BgSetter {
    constructor(image, relativeSpeed, x, y, width, height) {
        this.bgImage = image;
        this.relativeSpeed = relativeSpeed;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        if (this.width == 0) this.width = image.width * height / image.height;
        if (this.height == 0) this.height = image.height * width / image.width;
    }

    draw() {
        this.render();
    }

    render() {
        image(this.bgImage, this.x, this.y, this.width, this.height);
        if (this.x <= -(this.width - windowWidth) + 50) {
            image(this.bgImage, this.x + this.width, this.y, this.width, this.height);
        }
        if (this.x <= -(this.width * 2 - windowWidth) + 50) {
            image(this.bgImage, this.x + this.width * 2, this.y, this.width, this.height);
        }
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

}
