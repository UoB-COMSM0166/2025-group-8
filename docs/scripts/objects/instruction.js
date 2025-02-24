class Instruction extends GameObject {
    constructor(x, y, width, height, image) {
        super(x, y);
        this.roleImage = image;       
        this.gravity = 0;
        this.speed = 0;
        this.width = width;
        this.height = height;
        if (this.width == 0) this.width = image.width * height / image.height;
        if (this.height == 0) this.height = image.height * width / image.width;
    }
}