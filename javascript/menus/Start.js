class Start {
    constructor() {
        this.heroImageX = 0;
        this.heroAnimFrame = frameCount % 30;
    }
    menu() {
        fill(6, 8, 11)
        rect(0, center.y / 2, windowWidth, center.y)
        if (windowWidth > 870 && center.x > center.y) {
            this.heroImageX = center.x - (center.x * 0.7);
        }
        image(animations.start[this.heroAnimFrame], this.heroImageX, center.y / 2, center.y, center.y)

        stroke(111, 0, 57);
        strokeWeight(2)
        textAlign(CENTER);
        textSize(64);
        fill(215, 237, 250);
        text("Web Of Spells", center.x, center.y - 56)

        fill(6, 5, 11, 225)
        rect(center.x - 100, center.y - 32, 200, 64)
        textSize(32)
        noStroke();
        fill(215, 237, 250)
        // subtract 2 from center.y + (number) cause it's more center aligned even tho it's not mathematically center.
        text('Play the Game', center.x, center.y + 6)

        textAlign(RIGHT);
        textSize(16);
        fill(215, 237, 250);
        text("Move using the arrow, or wasd, keys.", width - 32, center.y / 2 + 32);
        text("Click to fire.", width - 32, center.y / 2 + 48);
        text("Use shift to dash.", width - 32, center.y / 2 + 64);
    }
}