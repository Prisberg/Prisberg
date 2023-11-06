class GameOver {
    constructor() { }
    menu() {
        fill(6, 8, 11)
        rect(0, center.y / 2, windowWidth, center.y)
        stroke(215, 237, 250);
        strokeWeight(2)
        textAlign(CENTER);
        textSize(64);
        fill(170, 20, 20);
        text("You Died", center.x, center.y - 100)

        noStroke();
        textSize(18);
        fill(215, 237, 250);
        let scoreString = "Score: " + score;
        text(scoreString, center.x, center.y - 75);

        if (score > highScore) {
            highScore = score;
            // Cookies.remove('highscore');
            // Cookies.set('highscore', highScore);
        }

        let highScoreString = "Highscore: " + highScore;
        text(highScoreString, center.x, center.y - 50);

        stroke(111, 0, 57);
        strokeWeight(2)
        fill(6, 5, 11)
        rect(center.x - 100, center.y - 16, 200, 32)
        textSize(16)
        noStroke();
        fill(215, 237, 250)
        // subtract 2 from center.y + (number) cause it's more center aligned even tho it's not mathematically center.
        text('Try Again', center.x, center.y + 6)

        stroke(111, 0, 57);
        strokeWeight(2)
        fill(6, 5, 11)
        rect(center.x - 100, center.y + 32, 200, 32)
        textSize(16)
        noStroke();
        fill(215, 237, 250)
        // subtract 2 from center.y + (number) cause it's more center aligned even tho it's not mathematically center.
        text('Back to Start', center.x, center.y + 54)

        drawHints();
    }

}
