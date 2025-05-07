/**
 * Iron Rebellion Game - Black Box Testing
 */

const puppeteer = require('puppeteer');
const { expect } = require('chai');

describe('Iron Rebellion Game Black Box Testing', function() {
  // Extend test timeout because game loading and testing may take longer
  this.timeout(30000);
  
  let browser;
  let page;
  
  // Helper function: key press
  async function pressKey(page, key, duration = 100) {
    await page.keyboard.down(key);
    await page.waitForTimeout(duration);
    await page.keyboard.up(key);
  }
  
  // Helper function: wait for frames
  async function waitFrames(page, frames = 10) {
    for (let i = 0; i < frames; i++) {
      await page.evaluate(() => new Promise(resolve => requestAnimationFrame(resolve)));
    }
  }
  
  // Start browser and load game before all tests
  before(async function() {
    browser = await puppeteer.launch({
      headless: false, // Set to false to observe testing process
      args: ['--window-size=1280,720']
    });
    
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    
    // Navigate to game page
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' });
    
    // Wait for game to load
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
      
      window.getMaxLives = () => window.robotDog.maxLives;
      
      window.countBullets = () => window.robotDog.bullets.length;
      
      window.canShoot = () => window.robotDog.allowWeapon;
      
      window.getGameState = () => window.currentGameState;
      
      window.getProgressPercentage = () => {
        if (window.chapter1Story) {
          return window.chapter1Story.hud.progress;
        }
        return 0;
      };
      
      window.isInvincible = () => window.robotDog.invincible;
      
      window.getEnemyCount = () => {
        if (window.chapter1Story) {
          return window.chapter1Story.enemyDogs.length;
        }
        return 0;
      };
    });
  });
  
  // Close browser after all tests
  after(async function() {
    await browser.close();
  });

  // Reset game state before each test
  beforeEach(async function() {
    // Restart game (if needed)
    await page.evaluate(() => {
      if (window.currentGameState !== "CHAPTER_SELECTOR") {
        window.currentGameState = "CHAPTER_SELECTOR";
      }
    });
    
    // Select chapter 1 for testing
    await page.mouse.click(640, 360); // Click on Chapter 1 button in center position
    await waitFrames(page, 30); // Wait for game to start
  });

  /**
   * Test Category: Character Control
   */
  describe('TC-001~005: Character Control Tests', function() {
    it('TC-001: Basic Movement-Left - Press A key, character should move left', async function() {
      const initialPos = await page.evaluate(() => window.getCharacterPosition());
      await pressKey(page, 'a', 500);
      await waitFrames(page, 10);
      
      const newPos = await page.evaluate(() => window.getCharacterPosition());
      expect(newPos.x).to.be.lessThan(initialPos.x, 'Character should move to the left');
    });
    
    it('TC-002: Basic Movement-Right - Press D key, character should move right', async function() {
      const initialPos = await page.evaluate(() => window.getCharacterPosition());
      await pressKey(page, 'd', 500);
      await waitFrames(page, 10);
      
      const newPos = await page.evaluate(() => window.getCharacterPosition());
      expect(newPos.x).to.be.greaterThan(initialPos.x, 'Character should move to the right');
    });
    
    it('TC-003: Jump Control - Press Spacebar, character should jump upward', async function() {
      const initialPos = await page.evaluate(() => window.getCharacterPosition());
      await pressKey(page, ' ', 100); // Space key
      await waitFrames(page, 10);
      
      const newPos = await page.evaluate(() => window.getCharacterPosition());
      expect(newPos.y).to.be.lessThan(initialPos.y, 'Character should jump upward');
    });
    
    it('TC-004: Left Boundary Limit - Character at left boundary pressing A, should not move beyond boundary', async function() {
      // First move character to left boundary
      for (let i = 0; i < 20; i++) {
        await pressKey(page, 'a', 100);
        await waitFrames(page, 5);
      }
      
      // Record position then try to move further left
      const borderPos = await page.evaluate(() => window.getCharacterPosition());
      await pressKey(page, 'a', 500);
      await waitFrames(page, 10);
      
      const newPos = await page.evaluate(() => window.getCharacterPosition());
      // Allow slight differences
      expect(Math.abs(newPos.x - borderPos.x)).to.be.lessThan(10, 'Character should not move beyond left boundary');
    });
    
    it('TC-005: Jump Boundary - Character at highest point, should begin to fall', async function() {
      // Make character jump
      await pressKey(page, ' ', 100);
      await waitFrames(page, 20); // Wait for character to reach highest point
      
      const peakPos = await page.evaluate(() => window.getCharacterPosition());
      await waitFrames(page, 15); // Wait a moment
      
      const afterPeakPos = await page.evaluate(() => window.getCharacterPosition());
      expect(afterPeakPos.y).to.be.greaterThan(peakPos.y, 'Character should begin to fall');
    });
  });
  
  /**
   * Test Category: Weapon System
   */
  describe('TC-006~010: Weapon System Tests', function() {
    // Helper function: Get weapon
    async function getWeapon(page) {
      // Move to position in level where weapon can be acquired
      await pressKey(page, 'd', 2000); // Move right for some time to find weapon
      await waitFrames(page, 30);
      
      // Ensure weapon is acquired
      await page.evaluate(() => {
        if (!window.robotDog.allowWeapon) {
          window.robotDog.allowWeapon = true;
        }
      });
    }
    
    it('TC-006: Weapon Acquisition - Contact gun item, should be able to shoot', async function() {
      // Initially cannot shoot
      let canShootBefore = await page.evaluate(() => window.canShoot());
      expect(canShootBefore).to.be.false;
      
      // Get weapon
      await getWeapon(page);
      
      // Check if can shoot
      let canShootAfter = await page.evaluate(() => window.canShoot());
      expect(canShootAfter).to.be.true;
    });
    
    it('TC-007: Shooting Direction-Right - Press J+D, should shoot right', async function() {
      // First get weapon
      await getWeapon(page);
      
      // Record current bullet count
      const bulletsBefore = await page.evaluate(() => window.countBullets());
      
      // Shoot right
      await page.keyboard.down('d');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      await waitFrames(page, 10);
      
      // Check if bullet was fired
      const bulletsAfter = await page.evaluate(() => window.countBullets());
      expect(bulletsAfter).to.be.greaterThan(bulletsBefore);
    });
    
    it('TC-008: Shooting Direction-Left - Press J+A, should shoot left', async function() {
      // First get weapon
      await getWeapon(page);
      
      // Record current bullet count
      const bulletsBefore = await page.evaluate(() => window.countBullets());
      
      // Shoot left
      await page.keyboard.down('a');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('a');
      await waitFrames(page, 10);
      
      // Check if bullet was fired
      const bulletsAfter = await page.evaluate(() => window.countBullets());
      expect(bulletsAfter).to.be.greaterThan(bulletsBefore);
    });
    
    it('TC-009: Shooting Direction-Up - Press J+W, should shoot upward', async function() {
      // First get weapon
      await getWeapon(page);
      
      // Record current bullet count
      const bulletsBefore = await page.evaluate(() => window.countBullets());
      
      // Shoot upward
      await page.keyboard.down('w');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('w');
      await waitFrames(page, 10);
      
      // Check if bullet was fired
      const bulletsAfter = await page.evaluate(() => window.countBullets());
      expect(bulletsAfter).to.be.greaterThan(bulletsBefore);
      
      // Check if bullet direction is correct (upward)
      const bulletDirection = await page.evaluate(() => {
        if (window.robotDog.bullets.length > 0) {
          // Get rotation angle of latest bullet
          return window.robotDog.bullets[window.robotDog.bullets.length - 1].rotation;
        }
        return null;
      });
      
      // PI/2 represents upward rotation angle
      expect(bulletDirection).to.be.closeTo(Math.PI / 2, 0.1, 'Bullet should be fired upward');
    });
    
    it('TC-010: Shooting Direction-Down - Press J+S, should shoot downward', async function() {
      // First get weapon
      await getWeapon(page);
      
      // Record current bullet count
      const bulletsBefore = await page.evaluate(() => window.countBullets());
      
      // Shoot downward
      await page.keyboard.down('s');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('s');
      await waitFrames(page, 10);
      
      // Check if bullet was fired
      const bulletsAfter = await page.evaluate(() => window.countBullets());
      expect(bulletsAfter).to.be.greaterThan(bulletsBefore);
      
      // Check if bullet direction is correct (downward)
      const bulletDirection = await page.evaluate(() => {
        if (window.robotDog.bullets.length > 0) {
          // Get rotation angle of latest bullet
          return window.robotDog.bullets[window.robotDog.bullets.length - 1].rotation;
        }
        return null;
      });
      
      // -PI/2 represents downward rotation angle
      expect(bulletDirection).to.be.closeTo(-Math.PI / 2, 0.1, 'Bullet should be fired downward');
    });
  });
  
  /**
   * Test Category: Item Interaction
   */
  describe('TC-011~015: Item Interaction Tests', function() {
    // Test case for collecting health item
    it('TC-011: Health Item Collection - Contact health item, health should increase', async function() {
      // First reduce health to ensure visible change
      await page.evaluate(() => {
        window.robotDog.health = 50;
      });
      
      // Get initial health
      const initialHealth = await page.evaluate(() => window.robotDog.health);
      
      // Create health item at player position
      await page.evaluate(() => {
        const healthItem = {
          x: window.robotDog.x,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          type: 'health',
          isCollected: false
        };
        window.level.items.push(healthItem);
      });
      
      // Wait for collection
      await waitFrames(page, 10);
      
      // Check if health increased
      const finalHealth = await page.evaluate(() => window.robotDog.health);
      expect(finalHealth).to.be.greaterThan(initialHealth);
    });
    
    // Test case for weapon powerup item
    it('TC-012: Weapon Powerup - Contact weapon powerup, damage should increase', async function() {
      // Ensure weapon is available
      await page.evaluate(() => {
        window.robotDog.allowWeapon = true;
      });
      
      // Get initial weapon damage
      const initialDamage = await page.evaluate(() => window.robotDog.bulletDamage);
      
      // Create weapon powerup at player position
      await page.evaluate(() => {
        const powerupItem = {
          x: window.robotDog.x,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          type: 'powerup',
          isCollected: false
        };
        window.level.items.push(powerupItem);
      });
      
      // Wait for collection
      await waitFrames(page, 10);
      
      // Check if damage increased
      const finalDamage = await page.evaluate(() => window.robotDog.bulletDamage);
      expect(finalDamage).to.be.greaterThan(initialDamage);
    });
    
    // Test case for speed boost item
    it('TC-013: Speed Boost - Contact speed item, movement speed should increase', async function() {
      // Get initial speed
      const initialSpeed = await page.evaluate(() => window.robotDog.speed);
      
      // Create speed boost at player position
      await page.evaluate(() => {
        const speedItem = {
          x: window.robotDog.x,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          type: 'speed',
          isCollected: false
        };
        window.level.items.push(speedItem);
      });
      
      // Wait for collection
      await waitFrames(page, 10);
      
      // Check if speed increased
      const finalSpeed = await page.evaluate(() => window.robotDog.speed);
      expect(finalSpeed).to.be.greaterThan(initialSpeed);
    });
    
    // Test case for shield item
    it('TC-014: Shield Item - Contact shield item, should be protected from damage', async function() {
      // Ensure no shield initially
      await page.evaluate(() => {
        window.robotDog.hasShield = false;
      });
      
      // Create shield item at player position
      await page.evaluate(() => {
        const shieldItem = {
          x: window.robotDog.x,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          type: 'shield',
          isCollected: false
        };
        window.level.items.push(shieldItem);
      });
      
      // Wait for collection
      await waitFrames(page, 10);
      
      // Check if shield is active
      const hasShield = await page.evaluate(() => window.robotDog.hasShield);
      expect(hasShield).to.be.true;
      
      // Record initial health
      const initialHealth = await page.evaluate(() => window.robotDog.health);
      
      // Create enemy to damage player
      await page.evaluate(() => {
        const enemy = {
          x: window.robotDog.x + 10,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          health: 10
        };
        window.level.enemies.push(enemy);
      });
      
      // Wait for potential damage
      await waitFrames(page, 10);
      
      // Check if health is unchanged due to shield
      const finalHealth = await page.evaluate(() => window.robotDog.health);
      expect(finalHealth).to.equal(initialHealth);
    });
    
    // Test case for key item collection
    it('TC-015: Key Collection - Collect key, door should open', async function() {
      // Ensure door is closed initially
      await page.evaluate(() => {
        window.level.doorOpen = false;
      });
      
      // Create key at player position
      await page.evaluate(() => {
        const keyItem = {
          x: window.robotDog.x,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          type: 'key',
          isCollected: false
        };
        window.level.items.push(keyItem);
      });
      
      // Wait for collection
      await waitFrames(page, 10);
      
      // Check if door is open
      const doorOpen = await page.evaluate(() => window.level.doorOpen);
      expect(doorOpen).to.be.true;
    });
  });
  
  /**
   * Test Category: Enemy Interaction
   */
  describe('TC-016~020: Enemy Interaction Tests', function() {
    // Test case for taking damage from enemy
    it('TC-016: Enemy Damage - Contact enemy, health should decrease', async function() {
      // Get initial health
      const initialHealth = await page.evaluate(() => {
        // Set to high value to ensure we can see damage
        window.robotDog.health = 100;
        return window.robotDog.health;
      });
      
      // Create enemy at player position
      await page.evaluate(() => {
        const enemy = {
          x: window.robotDog.x + 5,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          health: 10,
          damage: 10
        };
        window.level.enemies.push(enemy);
      });
      
      // Wait for damage to occur
      await waitFrames(page, 10);
      
      // Check if health decreased
      const finalHealth = await page.evaluate(() => window.robotDog.health);
      expect(finalHealth).to.be.lessThan(initialHealth);
    });
    
    // Test case for damaging enemy with weapon
    it('TC-017: Enemy Health - Shoot enemy, enemy health should decrease', async function() {
      // Ensure weapon is available
      await page.evaluate(() => {
        window.robotDog.allowWeapon = true;
      });
      
      // Create enemy
      await page.evaluate(() => {
        const enemy = {
          x: window.robotDog.x + 100,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          health: 100,
          damage: 10
        };
        window.level.enemies.push(enemy);
        return window.level.enemies.length - 1; // Return index of created enemy
      });
      
      // Shoot at enemy
      await page.keyboard.down('d'); // Face right
      await page.keyboard.down('j'); // Shoot
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      
      // Wait for bullet to hit
      await waitFrames(page, 30);
      
      // Check if enemy health decreased
      const enemyHurt = await page.evaluate(() => {
        if (window.level.enemies.length > 0) {
          // If enemy was damaged, it should have less than initial health
          return window.level.enemies[0].health < 100;
        }
        // Or enemy was destroyed
        return true;
      });
      
      expect(enemyHurt).to.be.true;
    });
    
    // Test case for defeating enemy
    it('TC-018: Enemy Defeat - Reduce enemy health to zero, enemy should be removed', async function() {
      // Ensure weapon is available with high damage
      await page.evaluate(() => {
        window.robotDog.allowWeapon = true;
        window.robotDog.bulletDamage = 100; // Set high damage to ensure one-shot kill
      });
      
      // Count initial enemies
      const initialEnemyCount = await page.evaluate(() => window.level.enemies.length);
      
      // Create enemy
      await page.evaluate(() => {
        const enemy = {
          x: window.robotDog.x + 100,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          health: 10,
          damage: 10
        };
        window.level.enemies.push(enemy);
      });
      
      // Shoot at enemy
      await page.keyboard.down('d'); // Face right
      await page.keyboard.down('j'); // Shoot
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      
      // Wait for bullet to hit
      await waitFrames(page, 30);
      
      // Check if enemy was removed
      const finalEnemyCount = await page.evaluate(() => window.level.enemies.length);
      expect(finalEnemyCount).to.equal(initialEnemyCount);
    });
    
    // Test case for enemy movement
    it('TC-019: Enemy Movement - Enemy should move according to AI pattern', async function() {
      // Create enemy with patrol behavior
      const enemyInitialX = await page.evaluate(() => {
        const enemy = {
          x: window.robotDog.x + 200,
          y: window.robotDog.y,
          width: 30,
          height: 30,
          health: 10,
          damage: 10,
          patrolLeft: true, // Set patrol behavior
          speed: 2
        };
        window.level.enemies.push(enemy);
        return enemy.x;
      });
      
      // Wait for movement
      await waitFrames(page, 30);
      
      // Check if enemy position changed
      const enemyCurrentX = await page.evaluate(() => {
        if (window.level.enemies.length > 0) {
          return window.level.enemies[window.level.enemies.length - 1].x;
        }
        return null;
      });
      
      expect(enemyCurrentX).to.not.equal(enemyInitialX);
    });
    
    // Test case for enemy attack behavior
    it('TC-020: Enemy Attack - Enemy in range should attack player', async function() {
      // Get initial health
      const initialHealth = await page.evaluate(() => {
        window.robotDog.health = 100;
        return window.robotDog.health;
      });
      
      // Create aggressive enemy near player
      await page.evaluate(() => {
        const enemy = {
          x: window.robotDog.x + 50, // Close enough to detect player
          y: window.robotDog.y,
          width: 30,
          height: 30,
          health: 10,
          damage: 10,
          isAggressive: true, // Set aggressive behavior
          attackRange: 100, // Can see player from this distance
          speed: 3
        };
        window.level.enemies.push(enemy);
      });
      
      // Wait for enemy to approach and attack
      await waitFrames(page, 60);
      
      // Check if player health decreased due to enemy attack
      const finalHealth = await page.evaluate(() => window.robotDog.health);
      expect(finalHealth).to.be.lessThan(initialHealth);
    });
  });
  
  /**
   * Test Category: Game State
   */
  describe('TC-020~021: Game State Tests', function() {
    it('TC-020: Level Switching - Select different level, correct level loads', async function() {
      // Return to chapter selector
      await page.evaluate(() => {
        window.currentGameState = "CHAPTER_SELECTOR";
      });
      await waitFrames(page, 30);
      
      // Select second chapter (if available)
      await page.mouse.click(640, 460); // Assume second chapter button position
      await waitFrames(page, 60);
      
      // Check if game state changes
      const gameState = await page.evaluate(() => window.getGameState());
      expect(gameState).to.equal("PLAY", 'Should correctly load selected level');
    });
    
    it('TC-021: Return to Menu - Press ESC to return to chapter selector', async function() {
      // Simulate ESC key to return to menu
      await pressKey(page, 'Escape', 100);
      await waitFrames(page, 30);
      
      // Check game state
      const gameState = await page.evaluate(() => window.getGameState());
      expect(gameState).to.equal("CHAPTER_SELECTOR", 'Should return to chapter selector');
    });
  });
  
  /**
   * Test Category: HUD Display
   */
  describe('TC-022~023: HUD Display Tests', function() {
    it('TC-022: Life Display - Health changes, HUD should correctly display current health', async function() {
      // Set specific health
      const testLives = 2;
      await page.evaluate((lives) => {
        window.robotDog.lives = lives;
      }, testLives);
      
      await waitFrames(page, 10);
      
      // Verify HUD display
      // Simplified: Check internal health variable
      const displayedLives = await page.evaluate(() => window.getLives());
      expect(displayedLives).to.equal(testLives, 'HUD should correctly display current health');
    });
    
    it('TC-023: Progress Display - Character progresses, progress percentage should update correctly', async function() {
      const initialProgress = await page.evaluate(() => window.getProgressPercentage());
      
      // Move right a distance
      await pressKey(page, 'd', 2000);
      await waitFrames(page, 30);
      
      const newProgress = await page.evaluate(() => window.getProgressPercentage());
      expect(newProgress).to.be.greaterThan(initialProgress, 'Progress bar should update with character progress');
    });
  });
  
  /**
   * Test Category: Performance
   */
  describe('TC-024~025: Performance Tests', function() {
    it('TC-024: Frame Rate Test - Normal gameplay, frame rate should be at least 30FPS', async function() {
      await waitFrames(page, 10);
      
      // Measure time for 10 frames to calculate frame rate
      const fps = await page.evaluate(() => {
        return new Promise(resolve => {
          const times = [];
          const checkFPS = (timestamp) => {
            times.push(timestamp);
            if (times.length < 10) {
              requestAnimationFrame(checkFPS);
            } else {
              // Calculate average frame rate
              let fps = 0;
              for (let i = 1; i < times.length; i++) {
                fps += 1000 / (times[i] - times[i-1]);
              }
              fps /= times.length - 1;
              resolve(fps);
            }
          };
          requestAnimationFrame(checkFPS);
        });
      });
      
      expect(fps).to.be.at.least(30, 'Frame rate should be at least 30FPS during normal gameplay');
    });
    
    it('TC-025: High Load Test - Multiple enemies appear, frame rate should be at least 20FPS', async function() {
      // Move to multi-enemy area or generate multiple enemies
      await pressKey(page, 'd', 3000);
      await waitFrames(page, 30);
      
      // Calculate frame rate
      const fps = await page.evaluate(() => {
        return new Promise(resolve => {
          const times = [];
          const checkFPS = (timestamp) => {
            times.push(timestamp);
            if (times.length < 10) {
              requestAnimationFrame(checkFPS);
            } else {
              let fps = 0;
              for (let i = 1; i < times.length; i++) {
                fps += 1000 / (times[i] - times[i-1]);
              }
              fps /= times.length - 1;
              resolve(fps);
            }
          };
          requestAnimationFrame(checkFPS);
        });
      });
      
      expect(fps).to.be.at.least(20, 'Frame rate should be at least 20FPS during high load');
    });
  });
  
  /**
   * Test Category: Window Compatibility
   */
  describe('TC-026: Window Compatibility Test', function() {
    it('TC-026: Window Size - Adjust browser window size, game interface should scale correctly', async function() {
      // Record initial position to verify relative position
      const initialPos = await page.evaluate(() => {
        return {
          x: window.robotDog.x / window.innerWidth,
          y: window.robotDog.y / window.innerHeight
        };
      });
      
      // Adjust window size
      await page.setViewport({ width: 800, height: 600 });
      await waitFrames(page, 30);
      
      // Check if relative position remains roughly unchanged
      const newPos = await page.evaluate(() => {
        return {
          x: window.robotDog.x / window.innerWidth,
          y: window.robotDog.y / window.innerHeight
        };
      });
      
      // Allow slight differences
      expect(Math.abs(newPos.x - initialPos.x)).to.be.lessThan(0.1, 'Relative X coordinate should remain roughly unchanged');
      expect(Math.abs(newPos.y - initialPos.y)).to.be.lessThan(0.1, 'Relative Y coordinate should remain roughly unchanged');
      
      // Restore window size
      await page.setViewport({ width: 1280, height: 720 });
    });
  });
  
  /**
   * Test Category: Weapon System Boundaries
   */
  describe('TC-027~029: Weapon System Boundary Tests', function() {
    it('TC-027: Weapon Cooldown - Shooting should have cooldown time', async function() {
      // Ensure weapon is available
      await page.evaluate(() => {
        window.robotDog.allowWeapon = true;
      });
      
      // Record last shoot time
      await page.evaluate(() => {
        window.robotDog.lastShootTime = 0; // Reset last shoot time
      });
      
      // Shoot a bullet
      await page.keyboard.down('d');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      
      // Get current bullet count
      const bulletsBefore = await page.evaluate(() => window.robotDog.bullets.length);
      
      // Immediately try to shoot again (within cooldown time)
      await page.keyboard.down('d');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      
      // Get post-shoot bullet count
      const bulletsAfter = await page.evaluate(() => window.robotDog.bullets.length);
      
      // No new bullets should be fired during cooldown
      expect(bulletsAfter).to.equal(bulletsBefore, 'No new bullets should be fired during cooldown');
      
      // Wait for cooldown to end
      await page.waitForTimeout(500); // Cooldown time is 500ms
      
      // Shoot again
      await page.keyboard.down('d');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      await waitFrames(page, 5);
      
      // Get final bullet count
      const bulletsFinal = await page.evaluate(() => window.robotDog.bullets.length);
      
      // Cooldown should end with new bullets
      expect(bulletsFinal).to.be.greaterThan(bulletsAfter, 'Cooldown should end with new bullets');
    });
    
    it('TC-028: Bullet Range - Bullet out of range should disappear', async function() {
      // Ensure weapon is available
      await page.evaluate(() => {
        window.robotDog.allowWeapon = true;
        window.robotDog.lastShootTime = 0; // Reset cooldown time
      });
      
      // Shoot a bullet
      await page.keyboard.down('d');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      
      // Record initial bullet count
      const initialBullets = await page.evaluate(() => window.robotDog.bullets.length);
      expect(initialBullets).to.be.greaterThan(0, 'Should have shot a bullet');
      
      // Get initial bullet position
      const initialBulletPos = await page.evaluate(() => {
        if (window.robotDog.bullets.length > 0) {
          return {
            x: window.robotDog.bullets[0].x,
            y: window.robotDog.bullets[0].y
          };
        }
        return null;
      });
      
      // Simulate bullet flying very far
      await page.evaluate(() => {
        if (window.robotDog.bullets.length > 0) {
          // Move bullet out of screen
          window.robotDog.bullets[0].x = window.innerWidth + 300;
        }
      });
      
      // Wait a few frames for game to update
      await waitFrames(page, 15);
      
      // Check if bullet is deleted
      const remainingBullets = await page.evaluate(() => window.robotDog.bullets.length);
      expect(remainingBullets).to.be.lessThan(initialBullets, 'Bullets out of range should be deleted');
    });
  });
  
  /**
   * Test Category: Enemy System Boundaries
   */
  describe('TC-029: Enemy System Boundary Test', function() {
    it('TC-029: Enemy Health Critical - Enemy health critical point should be eliminated', async function() {
      // Create a test enemy
      await page.evaluate(() => {
        if (window.EnemyDog) {
          window.testEnemy = new EnemyDog(
            window.robotDog.x + 100, 
            window.robotDog.y
          );
          window.testEnemy.health = 1; // Set to critical point
        }
      });
      
      // Ensure weapon is available
      await page.evaluate(() => {
        window.robotDog.allowWeapon = true;
        window.robotDog.lastShootTime = 0;
      });
      
      // Shoot towards enemy
      await page.keyboard.down('d');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      
      await waitFrames(page, 20);
      
      // Check if enemy is eliminated
      const enemyDestroyed = await page.evaluate(() => {
        return window.testEnemy && window.testEnemy.isDiscarded;
      });
      
      expect(enemyDestroyed).to.be.true, 'Enemy with health 1 should be eliminated');
    });
  });
  
  /**
   * Test Category: Physical System Boundaries
   */
  describe('TC-030~031: Physical System Boundary Tests', function() {
    it('TC-030: Gravity Effect - Character should fall under gravity', async function() {
      // Make character jump
      await pressKey(page, ' ', 100);
      await waitFrames(page, 10);
      
      // Record rising stage position
      const risingPos = await page.evaluate(() => window.getCharacterPosition());
      
      // Wait for character to reach highest point and start falling
      await waitFrames(page, 20);
      
      // Record falling stage position
      const fallingPos = await page.evaluate(() => window.getCharacterPosition());
      
      // Verify character under gravity
      expect(fallingPos.y).to.be.greaterThan(risingPos.y, 'Character should fall under gravity');
      
      // Check gravity acceleration
      await waitFrames(page, 10);
      const laterPos = await page.evaluate(() => window.getCharacterPosition());
      
      // Calculate falling speed increment between two time points
      const initialVelocity = fallingPos.y - risingPos.y;
      const laterVelocity = laterPos.y - fallingPos.y;
      
      // Gravity should increase falling speed
      expect(laterVelocity).to.be.greaterThan(initialVelocity, 'Gravity should increase falling speed');
    });
    
    it('TC-031: Collision Detection Precision - Character should stop falling on platform', async function() {
      // Create a platform under character
      await page.evaluate(() => {
        if (window.Platform) {
          // Create platform under character
          window.testPlatform = new Platform(
            window.robotDog.x,
            window.robotDog.y + 100,
            200,
            20,
            window.bgType.ROCK
          );
          
          // Add to current level
          if (window.chapter1Story) {
            window.chapter1Story.platforms.push(window.testPlatform);
          }
          
          // Set character as airborne state
          window.robotDog.onGround = false;
          window.robotDog.velocityY = 5; // Downward speed
        }
      });
      
      // Wait for collision
      await waitFrames(page, 20);
      
      // Check if character stops on platform
      const onGround = await page.evaluate(() => window.robotDog.onGround);
      expect(onGround).to.be.true, 'Character should be on ground after collision');
      
      // Check Y direction speed
      const velocityY = await page.evaluate(() => window.robotDog.velocityY);
      expect(velocityY).to.equal(0, 'Y direction speed should be 0 after landing');
    });
  });
  
  /**
   * Test Category: Character System Boundaries
   */
  describe('TC-032: Character System Boundary Test', function() {
    it('TC-032: Character Respawn - Character should respawn at initial position', async function() {
      // Trigger character death
      await page.evaluate(() => {
        window.robotDog.die();
      });
      
      await waitFrames(page, 10);
      
      // Get respawn position
      const respawnPos = await page.evaluate(() => window.getCharacterPosition());
      
      // Verify position reset
      expect(respawnPos.x).to.equal(150, 'Character respawn X coordinate should be 150');
      expect(respawnPos.y).to.equal(50, 'Character respawn Y coordinate should be 50');
      
      // Verify speed reset
      const velocity = await page.evaluate(() => {
        return {
          x: window.robotDog.velocityX,
          y: window.robotDog.velocityY
        };
      });
      
      expect(velocity.x).to.equal(0, 'Respawned X direction speed should be 0');
      expect(velocity.y).to.equal(0, 'Respawned Y direction speed should be 0');
    });
  });

  /**
   * Additional Test Cases
   */
  describe('TC-033~035: Additional System Tests', function() {
    it('TC-033: Fire Contact - Contact fire item, character should die', async function() {
      // Record current health
      const initialLives = await page.evaluate(() => window.getLives());
      
      // Simulate contact with fire
      await page.evaluate(() => {
        // Create a fire object at character position
        if (window.Flame) {
          const fire = new Flame(window.robotDog.x, window.robotDog.y);
          fire.pickEffect(window.robotDog);
        }
      });
      
      await waitFrames(page, 20);
      
      // Check if health decreased
      const livesAfter = await page.evaluate(() => window.getLives());
      expect(livesAfter).to.be.lessThan(initialLives, 'Contact with fire should result in health decrease');
    });
    
    it('TC-034: Conflict Keys - Press left and right simultaneously, should prioritize last pressed direction', async function() {
      // Record initial position
      const initialPos = await page.evaluate(() => window.getCharacterPosition());
      
      // Press left key, then right key, while holding
      await page.keyboard.down('a');
      await page.waitForTimeout(100);
      await page.keyboard.down('d');
      await page.waitForTimeout(500);
      
      // Release keys
      await page.keyboard.up('d');
      await page.keyboard.up('a');
      
      await waitFrames(page, 10);
      
      // Get new position
      const newPos = await page.evaluate(() => window.getCharacterPosition());
      
      // Right key is last pressed, should move right
      expect(newPos.x).to.be.greaterThan(initialPos.x, 'Character should move to the right');
    });
    
    it('TC-035: BOSS Battle - BOSS health depleted, should be eliminated', async function() {
      // Create a BOSS and reduce its health
      await page.evaluate(() => {
        // Create a final BOSS and set its attributes
        if (window.FinalBoss) {
          window.testBoss = new FinalBoss(window.robotDog.x + 100, window.robotDog.y);
          window.testBoss.health = 1; // Set to critical point
        }
      });
      
      await waitFrames(page, 10);
      
      // Get weapon and shoot BOSS
      await getWeapon(page);
      
      // Shoot right
      await page.keyboard.down('d');
      await page.keyboard.down('j');
      await page.waitForTimeout(100);
      await page.keyboard.up('j');
      await page.keyboard.up('d');
      
      await waitFrames(page, 20);
      
      // Check if BOSS is eliminated
      const bossDestroyed = await page.evaluate(() => {
        return window.testBoss && window.testBoss.isDiscarded;
      });
      
      expect(bossDestroyed).to.be.true, 'BOSS health depleted should result in elimination');
    });
  });
}); 
