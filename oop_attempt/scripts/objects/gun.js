class Gun extends PickableObject {
  constructor(x, y) {
    super(x, y);
    this.roleImage = window.bgType.GUN;
    this.width = windowHeight / 10;
    this.height = windowHeight / 10;
  }

  pickEffect(character) {
    super.pickEffect();
    character.allowWeapon = true;
  }
}
