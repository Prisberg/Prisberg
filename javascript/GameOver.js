class GameOver {
    constructor() { }
    menu() {
        noStroke();
        fill(20)
        rect(center.x - 150, center.y - 100, 300, 200)
        textAlign(CENTER);
        textFont('Georgia');
        textSize(50);
        fill(170, 20, 20);
        text("YOU DIED", center.x, center.y - 100)

        textFont('Helvetica');
        textSize(18);
        fill(235);
        let scoreString = "score: " + score;
        text(scoreString, center.x, center.y - 75);

        if (score > highScore) {
            highScore = score;
            // Cookies.remove('highscore');
            // Cookies.set('highscore', highScore);
        }

        let highScoreString = "highscore: " + highScore;
        text(highScoreString, center.x, center.y - 50);

        fill(0, 255, 0)
        rect(center.x - 100, center.y - 16, 200, 32)
        textSize(16)
        fill(255)
        // subtract 2 from center.y + (number) cause it's more center aligned even tho it's not mathematically center.
        text('Try again', center.x, center.y + 6)

        fill(0, 255, 0)
        rect(center.x - 100, center.y + 32, 200, 32)
        textSize(16)
        fill(255)
        // subtracting here too. -2
        text('Back to start', center.x, center.y + 54)
    }

}
