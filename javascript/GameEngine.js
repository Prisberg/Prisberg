class GameEngine {
    constructor() { }

    updateTargetEntities() {
        targetTimer += 1;
        const spawnInterval = int(100 / entitySpawnMultiplier);
        if (targetTimer % spawnInterval === 0) {
            const newEntity = new Entity();
            targetEnemies.push(newEntity);
            score += 1;
        }
    }

    updateBlasts() {
        for (let i = blastsFired.length - 1; i >= 0; i--) {
            const blast = blastsFired[i];
            blast.display();
            blast.update();
            if (blast.outOfBounds() || blast.hitScan()) {
                blastsFired.splice(i, 1);
            }
        }
    }

    updateTargetEnemies() {
        for (let i = targetEnemies.length - 1; i >= 0; i--) {
            const enemy = targetEnemies[i];
            enemy.display();
            enemy.update();
            if (enemy.outOfBounds()) {
                targetEnemies.splice(i, 1);
            }
        }
    }

    updateGameProgress() {
        entitySpawnMultiplier += 0.001;
        if (entitySizeMultiplier < 5) {
            entitySizeMultiplier += 0.001;
        }
    }

    updatePlayerCharacter() {
        playerCharacter.drawReticle();
        playerCharacter.drawStaminaBar();
        playerCharacter.drawManaBar();
        playerCharacter.drawScore();
        playerCharacter.display();
        playerCharacter.move();
        if (playerCharacter.hitScan()) {
            gameState = "dead";
        }
    }

    play() {
        this.updateTargetEntities();
        this.updateBlasts();
        this.updateTargetEnemies();
        this.updateGameProgress();
        this.updatePlayerCharacter();
    }
}
