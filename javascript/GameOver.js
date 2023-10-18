class GameOver {
    constructor() { }
    menu() {
        noStroke();
        fill(20)
        rect(center.x - 150, center.y - 100, 300, 200)

        textFont('Georgia');
        textAlign(CENTER);
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
        rect(center.x - 25, center.y - 16, 50, 32)
        textSize(16)
        fill(255)
        text('Try again', center.x, center.y)
    }

}
