class Platform extends GameObject {
    constructor(x, y, width, height, image) {
        super(x, y);
        this.roleImage = image;       
        this.gravity = 0;
        this.speed = 0;
        this.width = width;
        this.height = height;
    }
}