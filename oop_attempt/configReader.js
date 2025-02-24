class ConfigReader {

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
      let platformWidth = windowHeight / 4;
      let platformHeight = windowHeight / 20;
      let platform = new Platform(this.config.platforms[i].x, newY, platformWidth, platformHeight, window.bgType.ROCK);
      platforms.push(platform);
    }
    return platforms;
  }

  generateDrones() {
    let drones = [];
    for (let i = 0; i < this.config.drones.length; i++) {
      let newY = this.config.drones[i].y * 1.0 / 1000 * windowHeight;
      let drone = new Drone(this.config.drones[i].x, newY);
      drones.push(drone);
    }
    return drones;
  }

  generateGuns() {
    let guns = [];
    for (let i = 0; i < this.config.guns.length; i++) {
      let newY = this.config.guns[i].y * 1.0 / 1000 * windowHeight;
      let gun = new Gun(this.config.guns[i].x, newY);
      guns.push(gun);
    }
    return guns;
  }

  generateFlames() {    
    let flames = [];
    for (let i = 0; i < this.config.flames.length; i++) {
      let newY = this.config.flames[i].y * 1.0 / 1000 * windowHeight;
      let flame = new Flame(this.config.flames[i].x, newY);
      flames.push(flame);
    }
    return flames;
  }

  generatePassGates() {    
    let passGates = [];
    let passGate = new PassGate(this.config.roadLength - windowWidth / 2, windowHeight / 2);
    passGates.push(passGate);
    return passGates;
  }

  generateInstructions() {
    let instructions = [];
    let insHeight = windowHeight / 5;
    let moveInstructions = new Instruction(windowWidth / 4, windowHeight / 3, 0, insHeight, window.bgType.MOVEINS);
    instructions.push(moveInstructions);

    let firstGunX = this.config.guns[0].x;
    let pickUpInsY = windowHeight / 3;
    let pickUpInstruction = new Instruction(firstGunX, pickUpInsY, 0, insHeight / 2, window.bgType.PICKUPINS);
    instructions.push(pickUpInstruction);

    let attackInsX = firstGunX + 2 *pickUpInstruction.width;
    let attackInstructions = new Instruction(attackInsX, windowHeight / 3, 0, insHeight, window.bgType.ATTACKINS);
    instructions.push(attackInstructions);

    return instructions;
  }

  generateFinalBosses() {
    let finalBosses = [];
    for (let i = 0; i < this.config.finalBosses.length; i++) {
      let newY = this.config.finalBosses[i].y * 1.0 / 1000 * windowHeight;
      let finalBoss = new FinalBoss(this.config.finalBosses[i].x, newY);
      finalBosses.push(finalBoss);
    }
    return finalBosses;
  }
}