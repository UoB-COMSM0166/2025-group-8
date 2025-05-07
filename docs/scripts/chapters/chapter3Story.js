class Chapter3Story extends Chapter{
  constructor() {
      super();
      this.configReader = new ConfigReader(window.story3Config);
      this.robotDog = new RobotDog();
      this.hud = new Hud(this.configReader.config.roadLength, this.robotDog);
      this.foregroundHeight = windowHeight / 5;
      this.foregroundY = windowHeight - this.foregroundHeight; 
      this.farBgSetter = new BgSetter(window.bgType.CHAPTER3FARBG, 1, 0, 0, 0, windowHeight);
      this.closeBgSetter = new BgSetter(window.bgType.CHAPTER3CLOSEBG, 2, 0, 0, 0, windowHeight);
      this.foregroundSetter = new BgSetter(window.bgType.CHAPTER3FG, 8, 0, this.foregroundY, 0, this.foregroundHeight);
      this.elementsGenerate();
    }
}