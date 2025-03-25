class Chapter2Story extends Chapter{
  constructor() {
      super();
      this.configReader = new ConfigReader(window.story2Config);
      this.robotDog = new RobotDog();
      this.hud = new Hud(this.configReader.config.roadLength, this.robotDog);

      this.roadHeight = windowHeight / 6;
      this.roadY = windowHeight - this.roadHeight;
      this.foregroundHeight = windowHeight / 5;
      this.foregroundY = windowHeight - this.foregroundHeight;

      this.farBgSetter = new BgSetter(window.bgType.CHAPTER2FARBG, 1, 0, 0, 0, windowHeight);
      this.closeBgSetter = new BgSetter(window.bgType.CHAPTER2CLOSEBG, 2, 0, 0, 0, windowHeight);
      this.roadSetter = new BgSetter(window.bgType.CHAPTER2RD, 4, 0, this.roadY, windowWidth, this.roadHeight);
      this.foregroundSetter = new BgSetter(window.bgType.CHAPTER2FG, 10, 0, this.fgY, 0, this.fgHeight);
      
      this.elementsGenerate();
    }
}