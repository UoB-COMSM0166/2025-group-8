class Chapter {
    constructor() {
        this.configReader = new ConfigReader(window.story1Config);
        this.robotDog = new RobotDog();
        this.hud = new Hud(this.configReader.config.roadLength, this.robotDog);

        this.roadHeight = windowHeight / 6;
        this.roadY = windowHeight - this.roadHeight;
        this.foregroundHeight = windowHeight / 5;
        this.foregroundY = windowHeight - this.foregroundHeight; // Fixed spelling mistake

        this.farBgSetter = new BgSetter(window.bgType.CHAPTER1FARBG, 1, 0, 0, 0, windowHeight);
        this.closeBgSetter = null; // Explicitly assigned to avoid undefined errors
        this.roadSetter = new BgSetter(window.bgType.CHAPTER1RD, 4, 0, this.roadY, windowWidth, this.roadHeight);
        this.foregroundSetter = new BgSetter(window.bgType.CHAPTER1FG, 10, 0, this.foregroundY, 0, this.foregroundHeight);

        this.elementsGenerate();
    }

    draw() {
        [this.farBgSetter, this.closeBgSetter, this.roadSetter].forEach(bg => bg?.draw());
        this.hud.draw();
        this.drawElements(["passGates", "instructions", "enemyDogs", "batteries", "platforms", "drones", "guns", "flames", "finalBosses", ]);
        this.robotDog.draw();
        this.handleCollision();
        this.foregroundSetter?.draw();
    }

    elementsGenerate() {
        const mappingList = {
            "generateEnemyDogs": "enemyDogs",
            "generateBatteries": "batteries", 
            "generatePlatforms": "platforms",
            "generateDrones": "drones", 
            "generateGuns": "guns", 
            "generateFlames": "flames",
            "generateInstructions": "instructions", 
            "generateFinalBosses": "finalBosses",
            "generatePassGates": "passGates"
        }
        Object.keys(mappingList).forEach(method => this[mappingList[method]] = this.configReader[method]());

        // Add an extra platform
        this.platforms.push(new Platform(
            this.configReader.config.roadLength / 2.0,
            this.roadY + 0.82 * this.roadHeight,
            this.configReader.config.roadLength,
            0.3 * this.roadHeight,
            window.bgType.TRANSPARENT
        ));
    }

    drawElements(elements) {
        elements.forEach(type => {
            this[type] = this[type].filter(obj => {
                obj.draw();
                return !obj.isDiscarded;
            });
        });
    }

    handleCollision() {
        const checkCollisions = (sourceList, targetList, collisionCallback) => {
            sourceList.forEach(source => {
                targetList.forEach(target => {
                    if (!target.isDiscarded && target.isDisplay && source.checkCollision(target)) {
                        collisionCallback(source, target);
                    }
                });
            });
        };

        for (let entity of [this.robotDog, ...this.enemyDogs, ...this.batteries, ...this.guns, ...this.finalBosses, ...this.passGates]) {
            // this.checkCollisionWithPlatforms(entity);
            let is_collided = false;
            for (let platform of this.platforms) {
                if (!platform.isDiscarded && platform.isDisplay && entity.isDisplay && entity.checkCollision(platform)) {
                    entity.resolveCollisionWithPlatform(platform);
                    is_collided = true;
                    break; // 只处理一次碰撞
                }
            }
            if (!is_collided) {
                entity.onGround = false;
            }
        }

        // Bullet collision with platforms
        checkCollisions(this.robotDog.bullets, this.platforms, bullet => bullet.isDiscarded = true);

        // Bullet collision with enemies
        checkCollisions(this.robotDog.bullets, [...this.enemyDogs, ...this.drones, ...this.finalBosses], (bullet, enemy) => bullet.pickEffect(enemy));

        // RobotDog picking up items
        checkCollisions([this.robotDog], [...this.batteries, ...this.guns, ...this.flames, ...this.passGates], (robot, item) => item.pickEffect(robot));

        // RobotDog collides with enemies
        checkCollisions([this.robotDog], [...this.enemyDogs, ...this.drones], (robot, enemy) => {
            robot.die();
            enemy.isDiscarded = true;
        });
    }
}
