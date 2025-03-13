class RobotDog extends Character {
    constructor() {
        super(150, 50);
        this.roleImage = window.bgType.ROBOTDOG;
        this.width = windowHeight / 5.0;
        this.height = windowHeight / 5.0;
        this.speed = 5;
        this.bullets = [];
        // record last shooting time
        this.lastShootTime = 0; 
        // shooting cool down interval in ms
        this.shootCooldown = 500;
        this.allowWeapon = false;
        this.lives = 3;
        // record last death time
        this.lastDeathTime = millis(); 
        // invincible interval after death in ms
        this.deathCooldown = 3000;
    }

    draw() {
        super.draw();
        this.drawBullets();
        this.keyboardControl();
    }

    drawBullets() {
        for (let i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i].isDiscarded) {
                this.bullets.splice(i, 1);
                i--;
            } else {
                this.bullets[i].draw();
            }
        }
    }

    move(direction) {
        this.velocityX = direction * this.speed;
        this.movingDirection = direction;

        // when role moves to the left or right, it should not go beyond the screen
        if (this.x - this.width / 2.0 < 0) {
            this.x = this.width / 2.0;
        } else if (this.x + this.width > windowWidth) {
            this.x = windowWidth - this.width;
        }
        // when role moves to the center of the screen, it should stand still and other elements should move to the left
        if (window.isStoryEnded) {
            window.mainRoleMove = true;
        } else {
            if (this.x >= windowWidth / 2) {
                this.x = windowWidth / 2;
                window.mainRoleMove = false;
            } else {
                window.mainRoleMove = true;
            }
        }
    }   

    keyboardControl() {
        // left and right
        if (keyIsDown(65) || keyIsDown(97)) { // a & A
            this.move(-1);
            window.mainRoleMove = true;
            this.roleImage.play();
        } else if (keyIsDown(68) || keyIsDown(100)) { // d & D
            this.move(1);
            this.roleImage.play();
        } else {
            this.stopMoving();
            this.roleImage.reset();
        }
        // up and down
        if (keyIsDown(32)) { // Space
            this.jump();
        } 
        // attack
        let directionStr;
        if (keyIsDown(74) || keyIsDown(106)) { // J & j
            if (keyIsDown(87) || keyIsDown(119)) { // W & w
                directionStr = "up";
            } else if (keyIsDown(83) || keyIsDown(115)) { // S & s
                directionStr = "down";
            } else {
                directionStr = this.movingDirection == 1 ? "right" : "left";
            }
            this.shoot(directionStr);
        }
    }

    shoot(directionStr) {
        if (!this.allowWeapon) return;
        let currentTime = millis(); 
        if (currentTime - this.lastShootTime < this.shootCooldown) {
            return;
        }
        // update last shooting time
        this.lastShootTime = currentTime;
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

    die() {
        let currentTime = millis(); 
        if (currentTime - this.lastDeathTime < this.deathCooldown) {
            return;
        }
        // update last death time
        this.lastDeathTime = currentTime;
        this.lives--;
        if (this.lives < 0) {
        }
        this.x = 150;
        this.y = 50;
        this.velocityX = 0;
        this.velocityY = 0;
        this.onGround = false;
    }

}