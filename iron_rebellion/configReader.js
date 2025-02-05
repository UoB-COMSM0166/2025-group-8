class ConfigReader {
//   constructor(configFile) {
//     this.config = loadJSON(configFile);
//   }
    constructor() {
        this.config = window.story1Config;
    }

  generateEnemyDogs() {
    console.log(this.config.enemyDogs);
    let enemyDogs = [];
    for (let i = 0; i < this.config.enemyDogs.length; i++) {
      let enemyDog = new EnemyDog(this.config.enemyDogs[i].x, this.config.enemyDogs[i].y);
      enemyDogs.push(enemyDog);
    }
    return enemyDogs;
  }

  generateBatteries() {
    let batteries = [];
    for (let i = 0; i < this.config.batteries.length; i++) {
      let battery = new Battery(this.config.batteries[i].x, this.config.batteries[i].y);
      batteries.push(battery);
    }
    return batteries;
  }

//   generatePlatforms() {
//     let platforms = [];
//     for (let i = 0; i < this.config.platforms.length; i++) {
//       let platform = new Platforme(this.config.platforms[i].x, this.config.platforms[i].y);
//       platforms.push(platform);
//     }
//     return platforms;
//   }
}