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

    test('GameObject.resolveCollisionWithPlatform correctly handles collision', () => {
      const gameObject = new GameObject(100, 100);
      gameObject.width = 50;
      gameObject.height = 50;
      gameObject.velocityY = 5;
      
      const platform = new GameObject(100, 150);
      platform.width = 100;
      platform.height = 20;
      
      // Simulate collision from above the platform
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
      // Reset environment and mock images
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
  
    test('RobotDog constructor initializes correctly', () => {
      const dog = new RobotDog();
      
      expect(dog.x).toBe(150);
      expect(dog.y).toBe(50);
      expect(dog.width).toBe(windowHeight / 5.0);
      expect(dog.height).toBe(windowHeight / 5.0);
      expect(dog.lives).toBe(3);
      expect(dog.allowWeapon).toBe(false);
      expect(dog.bullets).toEqual([]);
    });
  
    test('RobotDog.move correctly moves the character', () => {
      const dog = new RobotDog();
      dog.x = 100;
      
      // Move to the right
      dog.move(1);
      
      expect(dog.velocityX).toBe(5);
      expect(dog.movingDirection).toBe(1);
      expect(window.mainRoleMove).toBe(true);
  
      // Stop moving when reaching the center of the screen
      dog.x = windowWidth / 2;
      dog.move(1);
      
      expect(dog.x).toBe(windowWidth / 2);
      expect(window.mainRoleMove).toBe(false);
  
      // Allow movement after the story ends
      window.isStoryEnded = true;
      dog.move(1);
      
      expect(window.mainRoleMove).toBe(true);
    });
  
    test('RobotDog.shoot correctly creates bullets', () => {
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
      
      expect(dog.bullets.length).toBe(1); // Should not increase bullets
    });
  
    test('RobotDog.die correctly handles death', () => {
      const dog = new RobotDog();
      dog.lives = 3;
      dog.x = 300;
      dog.y = 300;
      
      // Update last death time to a long time ago
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
});