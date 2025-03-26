// 白盒测试 - 测试游戏内部结构和逻辑
// 使用Jest测试框架

// 模拟p5.js环境
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

// 模拟键盘按键函数
function mockKeyIsDown(keyCode, isPressed) {
  global.keyIsDown = (code) => code === keyCode && isPressed;
}

// GameObject类测试
describe('GameObject基础测试', () => {
  beforeEach(() => {
    // 重置环境变量
    global.windowWidth = 1280;
    global.windowHeight = 720;
  });

  test('GameObject构造函数正确初始化属性', () => {
    const gameObject = new GameObject(100, 200);
    expect(gameObject.x).toBe(100);
    expect(gameObject.y).toBe(200);
    expect(gameObject.isDiscarded).toBe(false);
    expect(gameObject.onGround).toBe(false);
    expect(gameObject.isDisplay).toBe(true);
  });

  test('GameObject.checkCollision方法正确检测碰撞', () => {
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

  test('GameObject.applyGravity方法正确应用重力', () => {
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

  test('GameObject.jump方法正确设置跳跃速度', () => {
    const gameObject = new GameObject(100, 100);
    gameObject.onGround = true;
    gameObject.jumpInitVelocity = -10;
    
    gameObject.jump();
    
    expect(gameObject.velocityY).toBe(-10);
    expect(gameObject.onGround).toBe(false);
    expect(gameObject.isJumping).toBe(true);

    // 在空中不能再次跳跃
    gameObject.velocityY = 5;
    gameObject.jump();
    
    expect(gameObject.velocityY).toBe(5); // 保持不变
  });

  test('GameObject.resolveCollisionWithPlatform正确处理碰撞', () => {
    const gameObject = new GameObject(100, 100);
    gameObject.width = 50;
    gameObject.height = 50;
    gameObject.velocityY = 5;
    
    const platform = new GameObject(100, 150);
    platform.width = 100;
    platform.height = 20;
    
    // 模拟从上方碰撞平台
    gameObject.velocityX = 0;
    gameObject.velocityY = 5;
    gameObject.y = 100;
    gameObject.resolveCollisionWithPlatform(platform);
    
    expect(gameObject.velocityY).toBe(0);
    expect(gameObject.onGround).toBe(true);
  });
});

// RobotDog类测试
describe('RobotDog角色测试', () => {
  beforeEach(() => {
    // 重置环境和模拟图像
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

  test('RobotDog构造函数正确初始化', () => {
    const dog = new RobotDog();
    
    expect(dog.x).toBe(150);
    expect(dog.y).toBe(50);
    expect(dog.width).toBe(windowHeight / 5.0);
    expect(dog.height).toBe(windowHeight / 5.0);
    expect(dog.lives).toBe(3);
    expect(dog.allowWeapon).toBe(false);
    expect(dog.bullets).toEqual([]);
  });

  test('RobotDog.move方法正确移动角色', () => {
    const dog = new RobotDog();
    dog.x = 100;
    
    // 向右移动
    dog.move(1);
    
    expect(dog.velocityX).toBe(5);
    expect(dog.movingDirection).toBe(1);
    expect(window.mainRoleMove).toBe(true);

    // 移动到屏幕中间时停止
    dog.x = windowWidth / 2;
    dog.move(1);
    
    expect(dog.x).toBe(windowWidth / 2);
    expect(window.mainRoleMove).toBe(false);

    // 故事结束后可以继续移动
    window.isStoryEnded = true;
    dog.move(1);
    
    expect(window.mainRoleMove).toBe(true);
  });

  test('RobotDog.shoot方法正确创建子弹', () => {
    const dog = new RobotDog();
    dog.allowWeapon = true;
    dog.x = 100;
    dog.y = 100;
    dog.width = 50;
    dog.height = 50;
    
    expect(dog.bullets.length).toBe(0);
    
    // 模拟向右射击
    dog.shoot("right");
    
    expect(dog.bullets.length).toBe(1);
    expect(dog.bullets[0].x).toBe(125); // 100 + 50/2
    expect(dog.bullets[0].y).toBe(100);
    
    // 测试射击冷却
    dog.shoot("right");
    
    expect(dog.bullets.length).toBe(1); // 不应该增加子弹
  });

  test('RobotDog.die方法正确处理死亡', () => {
    const dog = new RobotDog();
    dog.lives = 3;
    dog.x = 300;
    dog.y = 300;
    
    // 更新上次死亡时间为很久之前
    dog.lastDeathTime = 0;
    
    dog.die();
    
    expect(dog.lives).toBe(2);
    expect(dog.x).toBe(150); // 重置到初始位置
    expect(dog.y).toBe(50);
    expect(dog.velocityX).toBe(0);
    expect(dog.velocityY).toBe(0);
    
    // 测试死亡冷却
    const currentTime = millis();
    dog.lastDeathTime = currentTime;
    dog.die();
    
    expect(dog.lives).toBe(2); // 生命值不应减少
  });
});

// ConfigReader类测试
describe('ConfigReader测试', () => {
  test('ConfigReader.generatePlatforms正确创建平台', () => {
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

  test('ConfigReader.generateEnemyDogs正确创建敌人', () => {
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

  test('ConfigReader.generatePassGates正确创建通关门', () => {
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

// 章节类集成测试
describe('Chapter集成测试', () => {
  beforeEach(() => {
    global.window = {
      story1Config: {},
      bgType: {
        TRANSPARENT: {},
        WININS: {}
      }
    };
  });

  test('Chapter.handleCollision正确处理碰撞', () => {
    const chapter = new Chapter();
    
    // 模拟角色与平台碰撞
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
    
    // 模拟角色与物品碰撞
    const battery = new Battery(100, 90);
    battery.pickEffect = jest.fn();
    chapter.batteries = [battery];
    
    chapter.handleCollision();
    
    expect(battery.pickEffect).toHaveBeenCalled();
    
    // 模拟子弹与敌人碰撞
    const enemy = new EnemyDog(200, 200);
    chapter.enemyDogs = [enemy];
    
    const bullet = new Bullet(200, 200, 0);
    bullet.pickEffect = jest.fn();
    chapter.robotDog.bullets = [bullet];
    
    chapter.handleCollision();
    
    expect(bullet.pickEffect).toHaveBeenCalledWith(enemy);
  });
});

// 游戏状态测试
describe('游戏状态测试', () => {
  test('游戏状态正确转换', () => {
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
    
    // 测试章节选择到章节1的转换
    expect(window.currentGameState).toBe(window.gameStates.CHAPTERSELECTOR);
    window.chapterSelector.selectChapter1();
    expect(window.currentGameState).toBe(window.gameStates.CHAPTER1);
    
    // 测试游戏失败转换
    window.chapter1Story.robotDog.lives = 0;
    window.chapter1Story.robotDog.die();
    expect(window.currentGameState).toBe(window.gameStates.GAMEOVER);
  });
}); 