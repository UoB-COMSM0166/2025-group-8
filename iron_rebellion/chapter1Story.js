class Chapter1Story {
  constructor() {
    this.hpBar = new HpBar();
    this.robotDog = new RobotDog();
  }

  setup() {
    bgSetter.drawBg(window.currentBg);
    this.hpBar.placeHpBar();    
    this.robotDog.setup();
  }


  
}