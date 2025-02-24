class Battery extends PickableObject {
  constructor(x, y) {
    super(x, y);
    this.roleImage = window.bgType.BATTERY;
    this.width = windowHeight / 10;
    this.height = windowHeight / 10;
  }

  pickEffect(character) {
    super.pickEffect();
    character.lives++;
  }
}
