class Chapter3Story extends Chapter{
  constructor() {
      super();
      this.configReader = new ConfigReader(window.story3Config);
      this.robotDog = new RobotDog();
      this.hud = new Hud(this.configReader.config.roadLength, this.robotDog);

      this.roadHeight = windowHeight / 6;
      this.roadY = windowHeight - this.roadHeight;
      // this.foregroundHeight = windowHeight / 5;
      // this.foregroundY = windowHeight - this.foregroundHeight; // Fixed spelling mistake

      this.closeBgSetter = new BgSetter(window.bgType.CHAPTER3CLOSEBG, 2, 0, 0, 0, windowHeight);
      this.roadSetter = new BgSetter(window.bgType.CHAPTER3RD, 4, 0, this.roadY, windowWidth, this.roadHeight);

      this.elementsGenerate();
    }
}