Machine Dog Rebellion Developer Manual
1. Technical Architecture Overview
"Machine Dog Rebellion" is a 2D platform jumping game developed using JavaScript and the p5.js library. The game is implemented using object-oriented programming (OOP) methodologies, with inheritance and composition used to construct various game components.

Technology Stack
Language: JavaScript (ES6+)

Graphics Library: p5.js

Audio Library: p5.sound.js

Programming Paradigm: Object-Oriented Programming

Testing Frameworks: Jest (White-box Testing), Puppeteer+Chai (Black-box Testing)

Architectural Features
Component Design: Game objects, characters, enemies, and platforms are implemented as classes.

Inheritance Structure: Code reuse implemented through class inheritance.

State Management: Game phases are managed using a state pattern.

Configuration Driven: Level structure defined through JSON configuration files.

Modularization: Functions divided into different JS files according to responsibilities.

2. File Structure
python

oop_attempt/
│
├── index.html              # Main HTML file for the game
├── sketch.js               # Main game logic entry
├── style.css               # Game styling
├── picturesLoader.js       # Image resource loader
├── configReader.js         # Configuration file reader
├── bgSetter.js             # Background setter
├── chapterSelector.js      # Chapter selector
├── hud.js                  # Game HUD display
├── jsconfig.json           # JS configuration
│
├── assets/                 # Game resources directory
│   ├── images/             # Game image assets
│   └── sounds/             # Game sound effects and music
│
├── configs/                # Game configuration files
│   ├── chapter1Config.json # Chapter 1 configuration
│   ├── chapter2Config.json # Chapter 2 configuration
│   ├── chapter3Config.json # Chapter 3 configuration
│   └── chapter4Config.json # Chapter 4 configuration
│
├── libraries/              # Third-party libraries
│   ├── p5.min.js           # p5.js library
│   └── p5.sound.min.js     # p5.sound library
│
├── scripts/                # Game scripts
│   ├── objects/            # Game object classes
│   │   ├── gameObject.js   # Basic game object
│   │   ├── character.js    # Character base class
│   │   ├── robotDog.js     # Robot Dog class
│   │   ├── enemy.js        # Enemy base class
│   │   ├── enemyDog.js     # Hostile Robot Dog
│   │   ├── drone.js        # Drone
│   │   ├── bullet.js       # Bullet
│   │   ├── platform.js     # Platform
│   │   ├── pickableObject.js # Pickable item base class
│   │   ├── battery.js      # Battery
│   │   ├── gun.js          # Weapon
│   │   ├── flame.js        # Flame effect
│   │   ├── finalBoss.js    # Final Boss
│   │   ├── passGate.js     # Level gate
│   │   └── instruction.js  # Tutorial instructions
│   │
│   └── chapters/           # Game chapters
│       ├── chapter.js      # Chapter base class
│       ├── chapter1Story.js # Chapter 1
│       ├── chapter2Story.js # Chapter 2
│       ├── chapter3Story.js # Chapter 3
│       └── chapter4Story.js # Chapter 4
│
└── tests/                  # Testing directory
    ├── README.md           # Testing documentation
    ├── whiteboxTests.js    # White-box tests
    ├── blackboxTests.js    # Black-box tests
    └── package.json        # Test dependencies configuration
3. Core Class Analysis
GameObject Class (gameObject.js)
GameObject is the base class for all game objects, providing basic physical and rendering functions.

javascript

class GameObject {
    constructor(x, y) {
        this.x = x;             // x coordinate
        this.y = y;             // y coordinate
        this.width;             // width
        this.height;            // height
        this.velocityX = 0;     // X-direction velocity
        this.velocityY = 0;     - Y-direction velocity
        this.gravity = 0.5;     // gravity
        this.onGround = false;  // whether on the ground
        // ... other properties
    }

    // Render the object
    render() { ... }
    
    // Apply gravity
    applyGravity() { ... }
    
    // Check collision
    checkCollision(otherObject) { ... }
    
    // Handle collision with platform
    resolveCollisionWithPlatform(platform) { ... }
    
    // ... other methods
}
RobotDog Class (robotDog.js)
RobotDog is the player-controlled protagonist class, inheriting from Character (inheritance chain: GameObject -> Character -> RobotDog).

javascript

class RobotDog extends Character {
    constructor() {
        super(150, 50);
        this.lives = 3;         // life points
        this.bullets = [];      // array of bullets
        this.allowWeapon = false; // whether weapons are allowed
        // ... other properties
    }

    // Keyboard control
    keyboardControl() { ... }
    
    // Shooting function
    shoot(directionStr) { ... }
    
    // Death handling
    die() { ... }
    
    // ... other methods
}
Chapter Class (chapter.js)
Chapter is the base class for chapters, responsible for creating and managing all elements within the level.

javascript

class Chapter {
    constructor() {
        this.configReader = new ConfigReader(config);
        this.robotDog = new RobotDog();
        this.hud = new Hud(length, this.robotDog);
        // Generate level elements
        this.elementsGenerate();
    }

    // Draw the chapter
    draw() { ... }
    
    // Generate game elements
    elementsGenerate() { ... }
    
    // Handle collisions
    handleCollision() { ... }
    
    // ... other methods
}
ConfigReader Class (configReader.js)
ConfigReader is responsible for reading and parsing level configuration files, generating game objects.

javascript

class ConfigReader {
    constructor(config) {
        this.config = config;
    }

    // Generate hostile robot dogs
    generateEnemyDogs() { ... }
    
    // Generate batteries
    generateBatteries() { ... }
    
    // Generate platforms
    generatePlatforms() { ... }
    
    // ... other generation methods
}
4. Game Flow and State Management
Game States
Game states are managed through the global object gameStates and the variable currentGameState:

javascript

let currentGameState = 0;
let gameStates = {
  CHAPTERSELECTOR: 0,
  CHAPTER1: 1,
  CHAPTER2: 2,
  CHAPTER3: 3,
  CHAPTER4: 4,
  GAMEOVER: 5,
  CHAPTER1WIN: 6,
  CHAPTER2WIN: 7,
  CHAPTER3WIN: 8,
  CHAPTER4WIN: 9,
};
Game Initialization Process
Preload all resources and configurations through the preload() function.

Set up the canvas and initialize game objects through the setup() function.

Render different content based on the current game state through the draw() function.

Key Game Loop
javascript

function draw() {
  switch (window.currentGameState) {
    case gameStates.CHAPTERSELECTOR:
      chapterSelection();
      break;
    case gameStates.CHAPTER1:
      chapter1();
      break;
    // ... other states
  }
}
5. Extension and Modification Guide
Adding New Game Objects
Create a new class file in the scripts/objects/ directory.

Inherit from the appropriate base class (e.g., GameObject, Character, Enemy).

Implement necessary methods (e.g., draw(), checkCollision()).

Add object generation method in ConfigReader.

Add object configuration in the level configuration JSON.

Adding New Levels
Create a new level configuration JSON file (e.g., chapter5Config.json).

Create a new chapter class in the scripts/chapters/ directory.

Add a new state constant in gameStates.

Add new state handling in the draw() function.

Add a new level entry in the chapter selector.

Modifying the Game Physics System
Core physics logic is located in the GameObject class:

applyGravity(): Apply gravity.

jump(): Jump logic.

checkCollision(): Collision detection.

resolveCollisionWithPlatform(): Collision response.

Modifying these methods can change the feel of the game physics.

6. Testing Guide
For detailed testing instructions, please refer to tests/README.md.

White-box Testing
Using Jest testing framework, primarily tests the game's internal logic:

bash

cd tests
npm install
npm run test:whitebox
Black-box Testing
Using Puppeteer and Chai for UI automation testing:

bash

cd tests
npm install
npm run start-server  # In one terminal window
npm run test:blackbox # In another terminal window
7. Debugging Tips
Console Debugging
Adding console.log() statements in draw()

```javascript
console.log(`RobotDog position: x=${this.robotDog.x}, y=${this.robotDog.y}`);
```
or other methods helps to output debugging information:

javascript

console.log(`RobotDog position: x=${this.robotDog.x}, y=${this.robotDog.y}`);
Visual Debugging
Visualizing physical boundaries and collision areas can be achieved by drawing helper graphics:

javascript

// Add in GameObject.render() method
stroke(255, 0, 0);
noFill();
rectMode(CENTER);
rect(this.x, this.y, this.width, this.height);
Common Issues and Solutions
Inaccurate Collision Detection

Check if the object's width and height are set correctly.

Ensure the checkCollision method is accurately calculating collisions.

Character Stuck on Platforms

Check the collision resolution logic in resolveCollisionWithPlatform.

Consider adding a small offset to avoid boundary issues.

Performance Issues

Reduce the number of objects on the screen.

Use object pooling to reuse objects.

Optimize collision detection to only check objects within the screen.

8. Resource Management
Image Resources
Image resources are loaded and managed through the PicturesLoader class:

javascript

// Adding new image resources
// In picturesLoader.js
loadImages() {
  this.images.NEWIMAGE = loadImage("assets/images/newimage.png");
}
Configuration Files
Level configuration files are in JSON format:

json

{
  "roadLength": 10000,
  "enemyDogs": [
    {"x": 450, "y": 100},
    {"x": 1200, "y": 100}
  ],
  "platforms": [
    {"x": 300, "y": 500},
    {"x": 700, "y": 400}
  ]
  // ... other configurations
}
9. Performance Optimization Suggestions
Object Pool: Use an object pool for frequently created and destroyed objects (such as bullets).

Visibility Checks: Only update and render objects within the visible range of the screen.

Sprite Sheet: Use sprite sheets instead of separate image files.

Reduce Nested Loops: Optimize complex computations such as collision detection.

Resource Preloading: Ensure all resources are loaded before the game starts.







