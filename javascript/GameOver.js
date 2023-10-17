class GameOver {
    constructor() {
        this.retryButton = createButton('Try again');
    }
    reset() {
        blastsFired = [];
        targetEnemies = [];
        playerPos.x = center.x;
        playerPos.y = center.y;
        targetTimer = 0;
        entitySpawnMultiplier = 2;
        entitySizeMultiplier = 2;
        score = 0;

        loop();
    }
    menu() {
        push()
        noStroke();
        fill(20)
        rect(center.x - 150, center.y - 100, 300, 200)

        textFont('Georgia');
        textAlign(CENTER);
        textSize(50);
        fill(170, 20, 20);
        text("YOU DIED", center.x, center.y - 25)

        textFont('Helvetica');
        textSize(18);
        fill(235);
        let scoreString = "score: " + score;
        text(scoreString, center.x, center.y);

        if (score > highScore) {
            highScore = score;
            // Cookies.remove('highscore');
            // Cookies.set('highscore', highScore);
        }

        let highScoreString = "highscore: " + highScore;
        text(highScoreString, center.x, center.y + 25);
        this.retryButton.elt.type = "button"
        this.retryButton.show();
        this.retryButton.position(center.x - 50, center.y + 50);
        this.retryButton.size(100, 30);
        this.retryButton.style('background-color', '#202020');
        this.retryButton.style('color', '#FFFFFF');
        this.retryButton.mousePressed(() => {
            this.reset();
            this.retryButton.remove();
        });
        this.retryButton.elt.width

        gameState = 'playing'
        pop();
        noLoop();
    }

}
