// White-box testing - Testing internal game structure and logic
// Using Jest testing framework

// Simulate p5.js environment
global.windowWidth = 1280;
global.windowHeight = 720;
global.keyIsDown = () => false;
global.millis = () => Date.now();
global.PI = Math.PI;
global.image = jest.fn();
global.push = jest.fn();
global.pop = jest.fn();
global.translate = jest.fn();
global.scale = jest.fn();

// Simulate keyboard key function
function mockKeyIsDown(keyCode, isPressed) {
  global.keyIsDown = (code) => code === keyCode && isPressed;
}

// GameObject class tests
describe('GameObject Basic Tests', () => {
  beforeEach(() => {
    // Reset environment variables
    global.windowWidth = 1280;
    global.windowHeight = 720;
  });

  test('GameObject constructor correctly initializes properties', () => {
    const gameObject = new GameObject(100, 200);
    expect(gameObject.x).toBe(100);
    expect(gameObject.y).toBe(200);
    expect(gameObject.isDiscarded).toBe(false);
    expect(gameObject.onGround).toBe(false);
    expect(gameObject.isDisplay).toBe(true);
  });

  test('GameObject.checkCollision correctly detects collisions', () => {
    const obj1 = new GameObject(100, 100);
    obj1.width = 50;
    obj1.height = 50;
    
    const obj2 = new GameObject(120, 120);
    obj2.width = 50;
    obj2.height = 50;
    
    expect(obj1.checkCollision(obj2)).toBe(true);

    const obj3 = new GameObject(200, 200);
    obj3.width = 20;
    obj3.height = 20;
    
    expect(obj1.checkCollision(obj3)).toBe(false);
  });

  test('GameObject.applyGravity correctly applies gravity', () => {
    const gameObject = new GameObject(100, 100);
    gameObject.gravity = 0.5;
    gameObject.velocityY = 0;
    gameObject.onGround = false;
    
    gameObject.applyGravity();
    
    expect(gameObject.velocityY).toBe(0.5);
    
    gameObject.velocityY = 1;
    gameObject.applyGravity();
    
    expect(gameObject.velocityY).toBe(1.5);

    gameObject.onGround = true;
    gameObject.velocityY = 1;
    gameObject.applyGravity();
    
    expect(gameObject.velocityY).toBe(0);
  });

  test('GameObject.jump correctly sets jump velocity', () => {
    const gameObject = new GameObject(100, 100);
    gameObject.onGround = true;
    gameObject.jumpInitVelocity = -10;
    
    gameObject.jump();
    
    expect(gameObject.velocityY).toBe(-10);
    expect(gameObject.onGround).toBe(false);
    expect(gameObject.isJumping).toBe(true);

    // Cannot jump again while in the air
    gameObject.velocityY = 5;
    gameObject.jump();
    
    expect(gameObject.velocityY).toBe(5); // Should remain unchanged
  });

  test('GameObject.resolveCollisionWithPlatform correctly handles collisions', () => {
    const gameObject = new GameObject(100, 100);
    gameObject.width = 50;
    gameObject.height = 50;
    gameObject.velocityY = 5;
    
    const platform = new GameObject(100, 150);
    platform.width = 100;
    platform.height = 20;
    
    // Simulate collision with the platform from above
    gameObject.velocityX = 0;
    gameObject.velocityY = 5;
    gameObject.y = 100;
    gameObject.resolveCollisionWithPlatform(platform);
    
    expect(gameObject.velocityY).toBe(0);
    expect(gameObject.onGround).toBe(true);
  });
});

// RobotDog class tests
describe('RobotDog character tests', () => {
  beforeEach(() => {
    // Reset environment and simulate images
    global.windowWidth = 1280;
    global.windowHeight = 720;
    global.window = {
      bgType: {
        ROBOTDOG: {
          play: jest.fn(),
          reset: jest.fn()
        }
      },
      mainRoleMove: true,
      isStoryEnded: false
    };
  });

  test('RobotDog constructor correctly initializes', () => {
    const dog = new RobotDog();
    
    expect(dog.x).toBe(150);
    expect(dog.y).toBe(50);
    expect(dog.width).toBe(windowHeight / 5.0);
    expect(dog.height).toBe(windowHeight / 5.0);
    expect(dog.lives).toBe(3);
    expect(dog.allowWeapon).toBe(false);
    expect(dog.bullets).toEqual([]);
  });

  test('RobotDog.move method correctly moves the character', () => {
    const dog = new RobotDog();
    dog.x = 100;
    
    // Move to the right
    dog.move(1);
    
    expect(dog.velocityX).toBe(5);
    expect(dog.movingDirection).toBe(1);
    expect(window.mainRoleMove).toBe(true);

    // Stop when reaching the center of the screen
    dog.x = windowWidth / 2;
    dog.move(1);
    
    expect(dog.x).toBe(windowWidth / 2);
    expect(window.mainRoleMove).toBe(false);

    // Continue moving after the story ends
    window.isStoryEnded = true;
    dog.move(1);
    
    expect(window.mainRoleMove).toBe(true);
  });
  test('RobotDog.shoot method correctly creates bullets', () => {
    const dog = new RobotDog();
    dog.allowWeapon = true;
    dog.x = 100;
    dog.y = 100;
    dog.width = 50;
    dog.height = 50;
    
    expect(dog.bullets.length).toBe(0);
    
    // Simulate shooting to the right
    dog.shoot("right");
    
    expect(dog.bullets.length).toBe(1);
    expect(dog.bullets[0].x).toBe(125); // 100 + 50/2
    expect(dog.bullets[0].y).toBe(100);
    
    // Test shooting cooldown
    dog.shoot("right");
    
    expect(dog.bullets.length).toBe(1); // No new bullet should be added
  });

  test('RobotDog.die method correctly handles death', () => {
    const dog = new RobotDog();
    dog.lives = 3;
    dog.x = 300;
    dog.y = 300;
    
    // Set the last death time to a long time ago
    dog.lastDeathTime = 0;
    
    dog.die();
    
    expect(dog.lives).toBe(2);
    expect(dog.x).toBe(150); // Reset to initial position
    expect(dog.y).toBe(50);
    expect(dog.velocityX).toBe(0);
    expect(dog.velocityY).toBe(0);
    
    // Test death cooldown
    const currentTime = millis();
    dog.lastDeathTime = currentTime;
    dog.die();
    
    expect(dog.lives).toBe(2); // Lives should not decrease
  });
});

// ConfigReader class tests
describe('ConfigReader tests', () => {
  test('ConfigReader.generatePlatforms correctly creates platforms', () => {
    global.window = {
      bgType: {
        ROCK: {}
      }
    };
    
    const config = {
      platforms: [
        {x: 300, y: 500},
        {x: 700, y: 400}
      ]
    };
    
    const reader = new ConfigReader(config);
    const platforms = reader.generatePlatforms();
    
    expect(platforms.length).toBe(2);
    expect(platforms[0].x).toBe(300);
    expect(platforms[0].y).toBe(500 * windowHeight / 1000);
    expect(platforms[1].x).toBe(700);
    expect(platforms[1].y).toBe(400 * windowHeight / 1000);
  });

  test('ConfigReader.generateEnemyDogs correctly creates enemies', () => {
    const config = {
      enemyDogs: [
        {x: 450, y: 100},
        {x: 1200, y: 100}
      ],
      platforms: [
        {x: 300, y: 500},
        {x: 700, y: 400}
      ]
    };
    
    const reader = new ConfigReader(config);
    const enemyDogs = reader.generateEnemyDogs();
    
    expect(enemyDogs.length).toBe(2);
    expect(enemyDogs[0].x).toBe(450);
    expect(enemyDogs[0].y).toBe(500 * windowHeight / 1000);
  });

  test('ConfigReader.generatePassGates correctly creates pass gates', () => {
    const config = {
      roadLength: 10000
    };
    
    const reader = new ConfigReader(config);
    const passGates = reader.generatePassGates();
    
    expect(passGates.length).toBe(1);
    expect(passGates[0].x).toBe(10000 - windowWidth / 2);
    expect(passGates[0].y).toBe(windowHeight / 2);
  });
});

// Chapter class integration tests
describe('Chapter integration tests', () => {
  beforeEach(() => {
    global.window = {
      story1Config: {},
      bgType: {
        TRANSPARENT: {},
        WININS: {}
      }
    };
  });

  test('Chapter.handleCollision correctly handles collisions', () => {
    const chapter = new Chapter();
    
    // Simulate collision with the platform
    chapter.robotDog.x = 100;
    chapter.robotDog.y = 90;
    chapter.robotDog.width = 40;
    chapter.robotDog.height = 40;
    chapter.robotDog.velocityY = 5;
    chapter.robotDog.onGround = false;
    
    const platform = new Platform(100, 120, 100, 20, null);
    chapter.platforms = [platform];
    
    chapter.handleCollision();
    
    expect(chapter.robotDog.onGround).toBe(true);
    expect(chapter.robotDog.velocityY).toBe(0);
    
    // Simulate collision with item
    const battery = new Battery(100, 90);
    battery.pickEffect = jest.fn();
    chapter.batteries = [battery];
    
    chapter.handleCollision();
    
    expect(battery.pickEffect).toHaveBeenCalled();
    
    // Simulate bullet collision with enemy
    const enemy = new EnemyDog(200, 200);
    chapter.enemyDogs = [enemy];
    
    const bullet = new Bullet(200, 200, 0);
    bullet.pickEffect = jest.fn();
    chapter.robotDog.bullets = [bullet];
    
    chapter.handleCollision();
    
    expect(bullet.pickEffect).toHaveBeenCalledWith(enemy);
  });
});

// Game state tests
describe('Game state tests', () => {
  test('Game state correctly transitions', () => {
    global.window = {
      currentGameState: 0,
      gameStates: {
        CHAPTERSELECTOR: 0,
        CHAPTER1: 1,
        GAMEOVER: 5
      },
      chapterSelector: {
        selectChapter1: function() {
          window.currentGameState = window.gameStates.CHAPTER1;
        }
      },
      chapter1Story: {
        robotDog: {
          lives: 3,
          die: function() {
            this.lives--;
            if (this.lives < 0) {
              window.currentGameState = window.gameStates.GAMEOVER;
            }
          }
        }
      }
    };
    
    // Test transition from chapter selector to chapter 1
    expect(window.currentGameState).toBe(window.gameStates.CHAPTERSELECTOR);
    window.chapterSelector.selectChapter1();
    expect(window.currentGameState).toBe(window.gameStates.CHAPTER1);
    
    // Test game over transition
    window.chapter1Story.robotDog.lives = 0;
    window.chapter1Story.robotDog.die();
    expect(window.currentGameState).toBe(window.gameStates.GAMEOVER);
  });
});
