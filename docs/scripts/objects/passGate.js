class PassGate extends PickableObject {
    constructor(x, y) {
      super(x, y);
      this.roleImage = window.bgType.PASSGATE;
      this.width = windowHeight / 6;
      this.height = windowHeight / 3;
    }
  
    pickEffect() {
        super.pickEffect();
        window.currentGameState = 0;
        
    }
  }
  