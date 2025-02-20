class Flame extends PickableObject {
    constructor(x, y) {
        super(x, y);
        this.roleImage = window.bgType.FLAME;
        this.width = windowHeight /6;
        this.height = windowHeight /6;
        this.gravity = 0;
    }

    pickEffect(character) {
        character.die();
    }
}
