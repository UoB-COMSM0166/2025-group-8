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
});