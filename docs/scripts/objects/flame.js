class Flame extends PickableObject {
    constructor(x, y) {
        super(x, y);
        this.roleImage = window.bgType.FLAME;
        this.width = windowHeight /8;
        this.height = windowHeight /8;
        this.gravity = 0;
    }

    pickEffect(character) {
        character.die();
    }
}
