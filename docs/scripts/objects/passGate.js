class PassGate extends PickableObject {
  constructor(x, y) {
    super(x, y);
    this.roleImage = window.bgType.PASSGATE;
    this.width = windowHeight / 6;
    this.height = this.width / 428 * 680;
  }

  pickEffect() {
      super.pickEffect();
      window.chapterSelector.escapeToHome();
  }
}
