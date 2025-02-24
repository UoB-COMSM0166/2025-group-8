class PickableObject extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.isPicked = false;
    }

    draw() {
        if (!this.isPicked) {
            super.draw();
        } 
    }

    pickEffect() {
        this.isPicked = true;
        this.isDiscarded = true;
    }

}