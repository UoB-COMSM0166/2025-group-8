class GameObject {
    constructor(x, y) {
        this.roleImage;
        this.x = x;
        this.y = y;
        this.width;
        this.height;
        this.velocityX = 0;
        this.velocityY = 0;
        this.gravity = 0.5;
        this.speed = 0;
        this.relativeMoveSpeed = -5;
        this.onGround = false; 
        // This initial velocity ensures the maximum jump height of the robot dog is 0.5 * windowHeight
        this.jumpInitVelocity = -Math.sqrt(windowHeight * this.gravity);
        this.isJumping = false;
        this.movingDirection = 1; // 1 for right, -1 for left
        this.objectType;
        this.imageDirection = 1; // 1 for right, -1 for left
        if ((this.x - this.width / 2) >= windowWidth + 200) {
            this.isDisplay = false;
        } else {
            this.isDisplay = true;
        }
        this.isDiscarded = false;
    }

    draw() {
        if (this.isDisplay && !this.isDiscarded) {
            this.render();
            this.applyGravity();
        }
        if (!this.isDiscarded) {
            this.relativelyMove();
            this.discardCheck();
            this.displayCheck();
            // this.infiniteFallDetect();
        }
    }

    discardCheck() {
        if ((this.x + this.width/2) < -200) {
            this.isDiscarded = true;
        }
    }

    displayCheck() {
        if ((this.x - this.width / 2) < windowWidth + 200) {
            this.isDisplay = true;
        } 
    }

    render() {
        // change picture placing method from top-left to center
        // this makes collision dectection eaiser

        // Save the current transformation state
        push(); 
        translate(this.x, this.y);
        this.movingDirectionChange();
        // Scale the image horizontally based on direction
        scale(this.movingDirection * this.imageDirection, 1); 
        // Draw the image centered
        image(this.roleImage, -this.width / 2.0, -this.height / 2.0, this.width, this.height); 
        // Restore the previous transformation state
        pop(); 
        // Move the object based on its velocity in the x-axis
        this.x += this.velocityX;
        // Move the object based on its velocity in the y-axis
        this.y += this.velocityY; 
    }

    stopMoving() {
        this.velocityX = 0;
    }
    
    movingDirectionChange() {
        if (this.velocityX > 0) {
            this.movingDirection = 1;
        } else if (this.velocityX < 0) {
            this.movingDirection = -1;
        }
    }

    jump() {
        // Only jump if on the ground
        if (this.onGround) { 
            this.velocityY = this.jumpInitVelocity;
            this.onGround = false;
            this.isJumping = true;  
        }
    }

    applyGravity() {
        this.infiniteFallDetect();
        if (this.onGround && !(keyIsDown(87) || keyIsDown(119)))  {
            this.velocityY = 0;
        }
        if (!this.onGround) {
            this.velocityY += this.gravity;
        }
    }

    infiniteFallDetect() {
        if (this.y >= windowHeight + 100) {
            this.y = 0;
            this.velocityY = 0;
        }
    }

    relativelyMove() {
        // D or d
        if (!window.mainRoleMove && (keyIsDown(68) || keyIsDown(100))) {
            // When main character is not moving and right key is pressed
            // Move all objects relatively to create background movement effect
            this.x += this.relativeMoveSpeed;
        }
    }

    checkCollision(otherObject) {
        return (
            Math.abs(this.x - otherObject.x) <= 0.5*(this.width + otherObject.width) &&
            Math.abs(this.y - otherObject.y) <= 0.5*(this.height + otherObject.height)
        );
    }


    resolveCollisionWithPlatform(platform) {
        let prevX = this.x - this.velocityX;
        let prevY = this.y - this.velocityY;
        let wasAbove = prevY + this.height / 2 <= platform.y - platform.height / 2;
        let wasBelow = prevY - this.height / 2 >= platform.y + platform.height / 2;
        let wasLeft = prevX + this.width / 2 <= platform.x - platform.width / 2;
        let wasRight = prevX - this.width / 2 >= platform.x + platform.width / 2;
        if (wasAbove && this.velocityY > 0) {
            // this.y = platform.y - platform.height / 2 - this.height / 2;
            this.velocityY = 0;
            this.onGround = true;
        } else if (wasBelow && this.velocityY < 0) {
        this.y = platform.y + platform.height / 2 + this.height / 2;
        this.velocityY = 0;
        }

        if (wasLeft && this.velocityX > 0) {
        this.x = platform.x - platform.width / 2 - this.width / 2;
        this.velocityX = 0;
        } else if (wasRight && this.velocityX < 0) {
        this.x = platform.x + platform.width / 2 + this.width / 2;
        this.velocityX = 0;
        }
    }
}