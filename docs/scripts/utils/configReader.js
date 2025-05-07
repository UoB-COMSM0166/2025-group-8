// ConfigReader class is responsible for parsing configuration data
// and generating game objects such as enemies, platforms, items, etc.
class ConfigReader {

  constructor(config) {
      // Store the configuration object
      this.config = config;
  }

  // Generate EnemyDog instances based on config
  generateEnemyDogs() {
      let enemyDogs = [];
      for (let i = 0; i < this.config.enemyDogs.length; i++) {
          // Convert Y position to pixel value based on screen height
          let newY = this.config.platforms[i].y * 1.0 / 1000 * windowHeight;
          let enemyDog = new EnemyDog(this.config.enemyDogs[i].x, newY);
          enemyDogs.push(enemyDog);
      }
      return enemyDogs;
  }

  // Generate Battery instances based on config
  generateBatteries() {
      let batteries = [];
      for (let i = 0; i < this.config.batteries.length; i++) {
          let newY = this.config.platforms[i].y * 1.0 / 1000 * windowHeight;
          let battery = new Battery(this.config.batteries[i].x, newY);
          batteries.push(battery);
      }
      return batteries;
  }

  // Generate Platform instances with proper scaling
  generatePlatforms() {
      let platforms = [];
      for (let i = 0; i < this.config.platforms.length; i++) {
          let newY = this.config.platforms[i].y * 1.0 / 1000 * windowHeight;

          // Set platform size proportionally
          let platformWidth = windowHeight / 4;
          let platformHeight = platformWidth / 675 * 349;

          let platform = new Platform(
              this.config.platforms[i].x,
              newY,
              platformWidth,
              platformHeight,
              window.bgType.ROCK
          );
          platforms.push(platform);
      }
      return platforms;
  }

  // Generate Drone instances based on config
  generateDrones() {
      let drones = [];
      for (let i = 0; i < this.config.drones.length; i++) {
          let newY = this.config.drones[i].y * 1.0 / 1000 * windowHeight;
          let drone = new Drone(this.config.drones[i].x, newY);
          drones.push(drone);
      }
      return drones;
  }

  // Generate Gun instances based on config
  generateGuns() {
      let guns = [];
      for (let i = 0; i < this.config.guns.length; i++) {
          let newY = this.config.guns[i].y * 1.0 / 1000 * windowHeight;
          let gun = new Gun(this.config.guns[i].x, newY);
          guns.push(gun);
      }
      return guns;
  }

  // Generate Flame (obstacle) instances
  generateFlames() {
      let flames = [];
      for (let i = 0; i < this.config.flames.length; i++) {
          let newY = this.config.flames[i].y * 1.0 / 1000 * windowHeight;
          let flame = new Flame(this.config.flames[i].x, newY);
          flames.push(flame);
      }
      return flames;
  }

  // Generate a single PassGate object at the end of the level
  generatePassGates() {
      let passGates = [];
      let passGate = new PassGate(
          this.config.roadLength - windowWidth / 2,
          windowHeight / 2
      );
      passGates.push(passGate);
      return passGates;
  }

  // Generate on-screen instructions to guide the player
  generateInstructions() {
      let instructions = [];
      let insHeight = windowHeight / 5;

      // Movement instruction on left side of screen
      let moveInstructions = new Instruction(
          windowWidth / 4,
          windowHeight / 3,
          0,
          insHeight,
          window.bgType.MOVEINS
      );
      instructions.push(moveInstructions);

      // Pickup instruction near the first gun's location
      let firstGunX = this.config.guns[0].x;
      let pickUpInstruction = new Instruction(
          firstGunX,
          windowHeight / 3,
          0,
          insHeight / 2,
          window.bgType.PICKUPINS
      );
      instructions.push(pickUpInstruction);

      // Attack instruction to the right of the pickup instruction
      let attackInsX = firstGunX + 2 * pickUpInstruction.width;
      let attackInstructions = new Instruction(
          attackInsX,
          windowHeight / 3,
          0,
          insHeight,
          window.bgType.ATTACKINS
      );
      instructions.push(attackInstructions);

      return instructions;
  }

  // Generate FinalBoss instances based on config
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
