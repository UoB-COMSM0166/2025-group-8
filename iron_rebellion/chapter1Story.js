class Chapter1Story {
  constructor() {
    this.hpBar = new HpBar();
    this.robotDog = new RobotDog();
    this.enemies = [];
    this.enemiesGenerate();
  }

  setup() {
    window.bgSetter.drawBg(window.currentBg);
    this.hpBar.placeHpBar();    
    this.robotDog.setup();
    this.enemiesSetup()
  }

  enemiesGenerate() {
    this.enemies.push(new EnemyDog(windowWidth - 400, 100));
    this.enemies.push(new EnemyDog(windowWidth - 500, 100));
  }

  enemiesSetup() {
    for (let enemy of this.enemies) {
      enemy.setup();
    }
  }
  
}