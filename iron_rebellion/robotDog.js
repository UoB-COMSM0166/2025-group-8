class RobotDog {
    constructor() {
        this.roleImage = window.bgType.ROBOTDOG;
        this.x = 150;
        this.y = 50;
        this.originalHeight = windowHeight / 6.0;
        this.width = this.originalHeight;
        this.height = this.originalHeight;
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 0.5;
        this.isCrouching = false;
        this.speed = 4;
        this.onGround = false; 
        this.groundY = windowHeight - 100;
        // 此初速度可以保证机器狗跳跃最大高度为0.5 * windowHeight
        this.jumpInitVelocity = -Math.sqrt(windowHeight * this.gravity);
        this.jumpTimes = 0;
        this.isJumping = false;
        this.direction = 1; // 1 for right, -1 for left
        this.bullets = [];
        this.lastShootTime = 0;  // 记录上次发射子弹的时间
        this.shootCooldown = 500;  // 射击冷却时间，单位：毫秒
    }

    setup() {
        this.draw();
        this.gravityEffect();
        this.keyboardControl();
        this.infiniteFallDetect();
        this.drawBullets();
    }

    draw() {
        push(); // Save the current transformation state
        translate(this.x, this.y);
        scale(this.direction, 1); // Scale the image horizontally based on direction
        image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); // Draw the image centered
        pop(); // Restore the previous transformation state
    }

    drawBullets() {
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].setup();
        }
    }

    move(direction) {
        this.velocityX = direction * this.speed;
        this.x += this.velocityX;
        this.direction = direction; // Update the direction based on movement
        if (this.x < 50) {
            this.x = 50;
        } else if (this.x + this.width > windowWidth) {
            this.x = windowWidth - this.width;
        }
        // when role moves to the center of the screen, it should stand still and other elements should move to the left
        if (this.x >= windowWidth / 2) {
            this.x = windowWidth / 2;
            window.mainRoleMove = false;
        } else {
            window.mainRoleMove = true;
        }
    }   

    keyboardControl() {
        // left and right
        if (keyIsDown(65) || keyIsDown(97)) { // A 键
            this.move(-1);
            window.mainRoleMove = true;
            this.roleImage.play();
        } else if (keyIsDown(68) || keyIsDown(100)) { // D 键
            this.move(1);
            this.roleImage.play();
        } else {
            this.roleImage.reset();
        }
        // up and down
        if (keyIsDown(32)) { // Space 键
            this.jump();
        } else if (keyIsDown(83) || keyIsDown(115)) { // S 键
            if (this.onGround) {
                this.crouch();
            }
        }
        // attack
        let directionStr;
        if (keyIsDown(74) || keyIsDown(106)) { // J 键
            if (keyIsDown(87) || keyIsDown(119)) { // W 键
                directionStr = "up";
            } else if (keyIsDown(83) || keyIsDown(115)) { // S 键
                directionStr = "down";
            } else {
                directionStr = this.direction == 1 ? "right" : "left";
            }
            this.attack(directionStr);
        }
        // stop
        if (!keyIsDown(65) && !keyIsDown(97) && !keyIsDown(68) && !keyIsDown(100) && !keyIsDown(87) && !keyIsDown(119) && !keyIsDown(83) && !keyIsDown(115)) {
            this.stop();
            this.stand();
        }
    }

    stop() {
        this.velocityX = 0;
    }
    
    jump() {
        if (this.onGround) { // Only jump if on the ground
            this.jumpTimes++;
            this.velocityY = this.jumpInitVelocity;
            this.onGround = false;
            this.isJumping = true;  
        }
    }

    crouch() {
        this.isCrouching = true;
        // this.height = 30;
    }

    gravityEffect() {
        if (this.onGround && !(keyIsDown(87) || keyIsDown(119)))  {
            this.velocityY = 0;
        }
        if (!this.onGround) {
            this.velocityY += this.gravity;
            this.y += this.velocityY;
        }
    }

    test() {
        textSize(16);
        fill(255);
        text("x: " + this.x, windowWidth - 200, 80);
        text("y: " + this.y, windowWidth - 200, 100);
        text("velocityX: " + this.velocityX, windowWidth - 200, 120);
        text("velocityY: " + Math.round(this.velocityY), windowWidth - 200, 140);
        text("onGround: " + this.onGround, windowWidth - 200, 160);
        text("isJumping: " + this.isJumping, windowWidth - 200, 180);
        text("groundY: " + this.groundY, windowWidth - 200, 200);
        text("jumpTimes: " + this.jumpTimes, windowWidth - 200, 220);
    }

    stand() {
        this.isCrouching = false;
        this.height = this.originalHeight;
    }

    infiniteFallDetect() {
        if (this.y >= windowHeight + 100) {
            this.y = 0;
            this.velocityY = 0;
        }
    }

    attack(directionStr) {
        let currentTime = millis(); 
        if (currentTime - this.lastShootTime < this.shootCooldown) {
            return;
        }
        this.lastShootTime = currentTime;  // 更新上次发射时间
        let bulletX;
        let bulletY;
        let rotation;
        if (directionStr == "left") {
            bulletX = this.x - this.width / 2.0;
            bulletY = this.y;
            rotation = PI;
        } else if (directionStr == "right") {
            bulletX = this.x + this.width / 2.0;
            bulletY = this.y;
            rotation = 0;
        } else if (directionStr == "up") {
            bulletX = this.x;
            bulletY = this.y - this.height / 2.0;
            rotation = PI / 2.0;
        } else if (directionStr == "down") {
            bulletX = this.x;
            bulletY = this.y + this.height / 2.0;
            rotation = -PI / 2.0;
        }
        let bullet = new Bullet(bulletX, bulletY, rotation);
        this.bullets.push(bullet);
    }

}