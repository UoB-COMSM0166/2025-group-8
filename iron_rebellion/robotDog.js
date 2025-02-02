class RobotDog {
    constructor() {
        this.roleImage = loadImage("./assets/pictures/robot_dog.png");
        this.x = 50;
        this.y = 50;
        this.originalHeight = 60;
        this.width = 60;
        this.height = this.originalHeight;
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 0.5;
        this.isCrouching = false;
        this.speed = 4;
        this.onGround = false; 
        this.groundY = windowHeight - 100;
        this.isJumping = true;
        this.jumpInitVelocity = -12;
        this.jumpTimes = 0;
    }

    setup() {
        this.display();
        this.gravityEffect();
        this.keyboardControl();
        this.test();

    }

    display() {
        push(); // Save the current transformation state
        // translate(this.x + this.width / 2, this.y + this.height / 2); // Move to the center of the image
        // translate(this.x, this.y + this.height);
        translate(this.x, this.y + this.height/2);
        scale(this.direction, 1); // Scale the image horizontally based on direction
        image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); // Draw the image centered
        // image(this.roleImage, this.x, this.y, this.width, this.height);
        pop(); // Restore the previous transformation state
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
            // this.otherElementsMoveLeft();
            window.mainRoleMove = false;
        }
    }   

    keyboardControl() {
        if (keyIsDown(65) || keyIsDown(97)) { // A 键
            this.move(-1);
            window.mainRoleMove = true;
        } else if (keyIsDown(68) || keyIsDown(100)) { // D 键
            this.move(1);
        }
        if (keyIsDown(87) || keyIsDown(119)) { // W 键
            this.jump();
        } else if (keyIsDown(83) || keyIsDown(115)) { // S 键
            if (!this.isJumping) {
                this.crouch();
            }
        } 
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
            this.isJumping = true;
            this.onGround = false;
        }
    }

    crouch() {
        this.isCrouching = true;
        this.height = 30;
    }

    gravityEffect() {
        if (this.isJumping) {
            this.velocityY += this.gravity;
            this.y += this.velocityY;
        }

        if (this.y >= this.groundY) {
            this.y = this.groundY;
            this.velocityY = 0;
            this.isJumping = false;
            this.onGround = true; // Ensure onGround is set to true
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

    otherElementsMoveLeft() {
        // Move other elements to the left
        // ...
    }


    // update(platforms) {
    // // 水平移动
    // this.x += this.velocityX;


    // // 检测与平台的碰撞
    // this.onGround = false; // 假设不在地面上
    // for (let platform of platforms) {
    //     if (this.collidesWith(platform)) {
    //     // 如果马里奥的底部与平台顶部接触
    //     if (this.y + this.height >= platform.y && this.velocityY >= 0) {
    //         this.y = platform.y - this.height; // 将马里奥放在平台顶部
    //         this.velocityY = 0; // 停止下落
    //         this.onGround = true;
    //         this.isJumping = false;
    //     }
    //     }
    // }

    // // 地面碰撞
    // if (this.y >= height - this.height) {
    //     this.y = height - this.height;
    //     this.velocityY = 0;
    //     this.onGround = true;
    //     this.isJumping = false;
    // }
    // }



    // collidesWith(object) {
    // return (
    //     this.x < object.x + object.width &&
    //     this.x + this.width > object.x &&
    //     this.y < object.y + object.height &&
    //     this.y + this.height > object.y
    // );
    // }
}
