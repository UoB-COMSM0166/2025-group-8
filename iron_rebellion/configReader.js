class ConfigReader {
//   constructor(configFile) {
//     this.config = loadJSON(configFile);
//   }
    constructor(config) {
        this.config = config;
    }

  generateEnemyDogs() {
    let enemyDogs = [];
    for (let i = 0; i < this.config.enemyDogs.length; i++) {
      let newY = this.config.platforms[i].y * 1.0 / 1000 * windowHeight;
      let enemyDog = new EnemyDog(this.config.enemyDogs[i].x, newY);
      enemyDogs.push(enemyDog);
    }
    return enemyDogs;
  }

  generateBatteries() {
    let batteries = [];
    for (let i = 0; i < this.config.batteries.length; i++) {
      let newY = this.config.platforms[i].y * 1.0 / 1000 * windowHeight;
      let battery = new Battery(this.config.batteries[i].x, newY);
      batteries.push(battery);
    }
    return batteries;
  }

  generatePlatforms() {
    let platforms = [];
    for (let i = 0; i < this.config.platforms.length; i++) {
      let newY = this.config.platforms[i].y * 1.0 / 1000 * windowHeight;
      let platform = new Platform(this.config.platforms[i].x, newY, 200, 30, window.bgType.ROCK);
      platforms.push(platform);
    }
    return platforms;
  }
}