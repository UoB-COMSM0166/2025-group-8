// Black Box Testing - Testing game functionality and user interaction
// Using Puppeteer for UI automation testing

const puppeteer = require('puppeteer');
const { expect } = require('chai');

describe('Game Functionality Black Box Testing', function() {
  // Extend test timeout as game loading and testing may take longer
  this.timeout(30000);
  
  let browser;
  let page;
  
  // Helper function: Key press
  async function pressKey(page, key, duration = 100) {
    await page.keyboard.down(key);
    await page.waitForTimeout(duration);
    await page.keyboard.up(key);
  }
  
  // Helper function: Wait for frames
  async function waitFrames(page, frames = 10) {
    for (let i = 0; i < frames; i++) {
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(resolve)));
    }
  }
  
  // Start browser and load game before each test
  before(async function() {
    browser = await puppeteer.launch({
      headless: false, // Set to false to observe the testing process
      args: ['--window-size=1280,720']
    });
    
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    
    // Navigate to the game page
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' });
    
    // Wait for the game to load (may need to adjust selector)
    await page.waitForSelector('canvas');
    
    // Add helper functions to page context
    await page.evaluate(() => {
      window.getCharacterPosition = () => {
        return { 
          x: window.robotDog.x, 
          y: window.robotDog.y 
        };
      };
      
      window.getLives = () => window.robotDog.lives;
      
      window.countBullets = () => window.robotDog.bullets.length;
      
      window.canShoot = () => window.robotDog.allowWeapon;
      
      window.getGameState = () => window.currentGameState;
      
      window.getProgressPercentage = () => {
        if (window.chapter1Story) {
          return window.chapter1Story.hud.progress;
        }
        return 0;
      };
    });
  });
  
  // Close browser after all tests
  after(async function() {
    await browser.close();
  });
  
  // Functionality test: Character movement
  describe('Character Movement Testing', function() {
    it('Pressing A key should move character left', async function() {
      // First enter chapter one
      await page.evaluate(() => {
        window.currentGameState = window.gameStates.CHAPTER1;
      });
      
      const initialPosition = await page.evaluate(() => window.getCharacterPosition());
      
      // Press A key to move left
      await pressKey(page, 'a', 500);
      await waitFrames(page, 20);
      
      const newPosition = await page.evaluate(() => window.getCharacterPosition());
      
      expect(newPosition.x).to.be.lessThan(initialPosition.x);
    });
    
    it('Pressing D key should move character right', async function() {
      // Ensure character is on the left side of screen
      await page.evaluate(() => {
        window.robotDog.x = 100;
      });
      
      const initialPosition = await page.evaluate(() => window.getCharacterPosition());
      
      // Press D key to move right
      await pressKey(page, 'd', 500);
      await waitFrames(page, 20);
      
      const newPosition = await page.evaluate(() => window.getCharacterPosition());
      
      expect(newPosition.x).to.be.greaterThan(initialPosition.x);
    });
    
    it('Pressing space key should make character jump', async function() {
      // Ensure character is on the ground
      await page.evaluate(() => {
        window.robotDog.onGround = true;
        window.robotDog.velocityY = 0;
        window.robotDog.y = 500;
      });
      
      const initialPosition = await page.evaluate(() => window.getCharacterPosition());
      
      // Press space key to jump
      await pressKey(page, ' ');
      await waitFrames(page, 10);
      
      const duringJumpPosition = await page.evaluate(() => window.getCharacterPosition());
      
      // Y coordinate should decrease when jumping (screen coordinate system has up as negative)
      expect(duringJumpPosition.y).to.be.lessThan(initialPosition.y);
    });
    
    it('Character should stop moving when colliding with platform', async function() {
      // Create a test scenario where character collides with platform
      await page.evaluate(() => {
        // Create a platform
        const platform = new Platform(300, 300, 100, 20, window.bgType.ROCK);
        window.chapter1Story.platforms = [platform];
        
        // Set character position and velocity
        window.robotDog.x = 250;
        window.robotDog.y = 300;
        window.robotDog.width = 50;
        window.robotDog.height = 50;
        window.robotDog.velocityX = 5; // Moving right
      });
      
      // Wait for a few frames for collision to occur
      await waitFrames(page, 20);
      
      // Get current velocity
      const currentVelocity = await page.evaluate(() => window.robotDog.velocityX);
      
      // X velocity should be 0 after collision
      expect(currentVelocity).to.equal(0);
    });
  });
  
  // Functionality test: Item collection and shooting
  describe('Item Collection and Shooting Testing', function() {
    it('Collecting weapon should enable shooting', async function() {
      // Reset character state
      await page.evaluate(() => {
        window.robotDog.allowWeapon = false;
        window.robotDog.bullets = [];
      });
      
      // Confirm initial state cannot shoot
      const initialCanShoot = await page.evaluate(() => window.canShoot());
      expect(initialCanShoot).to.be.false;
      
      // Simulate collecting weapon
      await page.evaluate(() => {
        // Create a gun and trigger pickup effect
        const gun = new Gun(window.robotDog.x, window.robotDog.y);
        gun.pickEffect(window.robotDog);
      });
      
      // Confirm now can shoot
      const canShootNow = await page.evaluate(() => window.canShoot());
      expect(canShootNow).to.be.true;
      
      // Test shooting functionality
      const initialBulletCount = await page.evaluate(() => window.countBullets());
      
      // Press J key to shoot
      await pressKey(page, 'j');
      await waitFrames(page, 5);
      
      const newBulletCount = await page.evaluate(() => window.countBullets());
      expect(newBulletCount).to.be.greaterThan(initialBulletCount);
    });
    
    it('Collecting battery should increase lives', async function() {
      // Ensure character lives is not at maximum
      await page.evaluate(() => {
        window.robotDog.lives = 1;
      });
      
      const initialLives = await page.evaluate(() => window.getLives());
      
      // Simulate collecting battery
      await page.evaluate(() => {
        // Create a battery and trigger pickup effect
        const battery = new Battery(window.robotDog.x, window.robotDog.y);
        battery.pickEffect(window.robotDog);
      });
      
      // Confirm lives increased
      const newLives = await page.evaluate(() => window.getLives());
      expect(newLives).to.be.greaterThan(initialLives);
    });
  });
  
  // Functionality test: Game state and level progression
  describe('Game State and Level Progression Testing', function() {
    it('Passing through gate should switch to win state', async function() {
      // Set game state to chapter one
      await page.evaluate(() => {
        window.currentGameState = window.gameStates.CHAPTER1;
        
        // Create a pass gate and trigger pickup effect
        const passGate = new PassGate(window.robotDog.x, window.robotDog.y);
        passGate.pickEffect(window.robotDog);
      });
      
      // Wait a few frames for state change
      await waitFrames(page, 5);
      
      // Confirm state has changed to win
      const gameState = await page.evaluate(() => window.getGameState());
      expect(gameState).to.equal(window.gameStates.CHPATER1WIN);
    });
    
    it('When character dies with 0 lives, should switch to game over state', async function() {
      // Set game state to chapter one
      await page.evaluate(() => {
        window.currentGameState = window.gameStates.CHAPTER1;
        // Set lives to 0 and trigger death
        window.robotDog.lives = 0;
        window.robotDog.lastDeathTime = 0; // Ensure death cooldown doesn't apply
        window.robotDog.die();
      });
      
      // Wait a few frames for state change
      await waitFrames(page, 5);
      
      // Confirm state has changed to game over
      const gameState = await page.evaluate(() => window.getGameState());
      expect(gameState).to.equal(window.gameStates.GAMEOVER);
    });
  });
  
  // Performance testing
  describe('Game Performance Testing', function() {
    it('Should maintain reasonable framerate during movement', async function() {
      // Switch to chapter one
      await page.evaluate(() => {
        window.currentGameState = window.gameStates.CHAPTER1;
      });
      
      // Collect 5 seconds of framerate data
      const frameRates = await page.evaluate(() => {
        return new Promise(resolve => {
          const frameRates = [];
          let lastTime = performance.now();
          let frameCount = 0;
          
          const checkFrame = () => {
            frameCount++;
            const currentTime = performance.now();
            const elapsed = currentTime - lastTime;
            
            if (elapsed >= 1000) {
              const fps = Math.round((frameCount * 1000) / elapsed);
              frameRates.push(fps);
              frameCount = 0;
              lastTime = currentTime;
            }
            
            if (frameRates.length < 5) {
              requestAnimationFrame(checkFrame);
            } else {
              resolve(frameRates);
            }
          };
          
          // Continuously press D key to move right
          const keyDownEvent = new KeyboardEvent('keydown', { keyCode: 68 });
          document.dispatchEvent(keyDownEvent);
          
          checkFrame();
          
          // Stop pressing key after 5 seconds
          setTimeout(() => {
            const keyUpEvent = new KeyboardEvent('keyup', { keyCode: 68 });
            document.dispatchEvent(keyUpEvent);
          }, 5000);
        });
      });
      
      // Calculate average framerate
      const averageFPS = frameRates.reduce((sum, fps) => sum + fps, 0) / frameRates.length;
      
      // Expect framerate to be at least 30FPS
      expect(averageFPS).to.be.at.least(30);
    });
  });
  
  // Interface testing
  describe('Game Interface Testing', function() {
    it('HUD should correctly display lives and progress', async function() {
      // Switch to chapter one
      await page.evaluate(() => {
        window.currentGameState = window.gameStates.CHAPTER1;
        // Set lives
        window.robotDog.lives = 2;
      });
      
      // Wait a few frames for HUD to update
      await waitFrames(page, 5);
      
      // Take screenshot for visual confirmation
      await page.screenshot({ path: 'hud_test.png' });
      
      // Check HUD components via JavaScript
      const hudInfo = await page.evaluate(() => {
        return {
          lives: window.chapter1Story.hud.lives,
          progress: window.chapter1Story.hud.progress
        };
      });
      
      expect(hudInfo.lives).to.equal(2);
      expect(hudInfo.progress).to.be.a('number');
    });
  });
  
  // Game configuration testing
  describe('Game Configuration Testing', function() {
    it('Different chapters should load different configurations', async function() {
      // Check chapter one configuration
      await page.evaluate(() => {
        window.currentGameState = window.gameStates.CHAPTER1;
      });
      
      const chapter1Entities = await page.evaluate(() => {
        return {
          platforms: window.chapter1Story.platforms.length,
          enemies: window.chapter1Story.enemyDogs.length
        };
      });
      
      // Switch to chapter two
      await page.evaluate(() => {
        window.currentGameState = window.gameStates.CHAPTER2;
      });
      
      const chapter2Entities = await page.evaluate(() => {
        return {
          platforms: window.chapter2Story.platforms.length,
          enemies: window.chapter2Story.enemyDogs.length
        };
      });
      
      // Different chapters should have different configurations (not necessarily different counts, but different object instances)
      expect(chapter1Entities).to.not.deep.equal(chapter2Entities);
    });
  });
  
  // Edge case testing
  describe('Edge Case Testing', function() {
    it('Character should not move beyond the left screen boundary', async function() {
      // Position character at left edge
      await page.evaluate(() => {
        window.robotDog.x = 50;
        window.robotDog.width = 50;
      });
      
      // Press A key trying to move off screen
      await pressKey(page, 'a', 1000);
      await waitFrames(page, 20);
      
      // Get character position
      const position = await page.evaluate(() => window.getCharacterPosition());
      
      // Character should not move beyond left boundary
      expect(position.x).to.be.at.least(window.robotDog.width / 2);
    });
    
    it('Character falling from height should be affected by gravity', async function() {
      // Position character at height and not on ground
      await page.evaluate(() => {
        window.robotDog.y = 100;
        window.robotDog.velocityY = 0;
        window.robotDog.onGround = false;
      });
      
      const initialPosition = await page.evaluate(() => window.getCharacterPosition());
      
      // Wait a few frames for gravity to take effect
      await waitFrames(page, 20);
      
      const newPosition = await page.evaluate(() => window.getCharacterPosition());
      
      // Y coordinate should increase (screen coordinate system has down as positive)
      expect(newPosition.y).to.be.greaterThan(initialPosition.y);
    });
  });
}); 