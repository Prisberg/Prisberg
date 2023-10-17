class GameEngine {
    constructor() { }
    play() {
        drawReticle();

        // ENTITY SPAWN 
        targetTimer += 1;
        let spawnInterval = int(100 / entitySpawnMultiplier);
        if (targetTimer % spawnInterval == 0) {
            let newEntity = new Entity();
            targetEnemies.push(newEntity);
            score += 5;
        }

        // BLASTS 
        for (let i = 0; i < blastsFired.length; i++) {
            blastsFired[i].display();
            blastsFired[i].update();
            if (blastsFired[i].outOfBounds()) {
                blastsFired.splice(i, 1);
            }
            else if (blastsFired[i].hitScan()) {
                blastsFired.splice(i, 1);
            }
        }

        // EVIL ENTITIES 
        for (let i = 0; i < targetEnemies.length; i++) {
            targetEnemies[i].display();
            targetEnemies[i].update();
            if (targetEnemies[i].outOfBounds()) {
                targetEnemies.splice(i, 1);
            }
        }

        entitySpawnMultiplier += 0.001;
        if (entitySizeMultiplier < 5) {
            entitySizeMultiplier += 0.001;
        }

        // HERO AND HERO DEAD 
        playerCharacter.display();
        playerCharacter.move();
        if (playerCharacter.hitScan()) {
            gameState = "dead"
        }

        // TUTORIAL 
        noStroke();
        if (targetTimer < 500) {
            textAlign(LEFT);
            textFont('Helvetica');
            textSize(14);
            fill(235);
            text("Arrow keys or wasd: Move", 35, 35);
            text("Mouse: Aim", 35, 50);
            text("Left click: Fire", 35, 65);
        }
    }
}