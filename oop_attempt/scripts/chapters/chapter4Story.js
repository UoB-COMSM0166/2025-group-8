class Chapter4Story extends Chapter{
  constructor() {
      super();
      this.configReader = new ConfigReader(window.story4Config);
      this.robotDog = new RobotDog();
      this.hud = new Hud(this.configReader.config.roadLength, this.robotDog);

      this.roadHeight = windowHeight / 6;
      this.roadY = windowHeight - this.roadHeight;
      this.foregroundHeight = windowHeight / 5;
      this.foregroundY = windowHeight - this.foregroundHeight; 

      this.farBgSetter = new BgSetter(window.bgType.CHAPTER4FARBG, 1, 0, 0, 0, windowHeight);
      this.closeBgSetter = new BgSetter(window.bgType.CHAPTER4CLOSEBG, 2, 0, this.roadY-this.roadHeight, windowWidth*2, this.roadHeight*2);
      this.roadSetter = new BgSetter(window.bgType.CHAPTER4RD, 4, 0, this.roadY, windowWidth, this.roadHeight);
      // this.foregroundSetter = new BgSetter(window.bgType.CHAPTER4FG, 10, 0, this.foregroundY, 0, this.foregroundHeight);

      this.elementsGenerate();
    }

    elementsGenerate() {
      super.elementsGenerate();
      this.passGates = [];
    }

}