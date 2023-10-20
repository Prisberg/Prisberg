let continuedAnimationActive = false;
class Start {
    constructor() {
        this.heroImageX = 0;
        this.heroAnimFrame = frameCount % 30;
    }
    menu() {
        fill(6, 8, 11)
        rect(0, center.y / 2, windowWidth, center.y)
        if (windowWidth > 870) {
            this.heroImageX = center.x - 450;
        }
        image(animations.start[this.heroAnimFrame], this.heroImageX, center.y / 2, center.y, center.y)

        stroke(111, 0, 57);
        strokeWeight(2)
        textAlign(CENTER);
        textSize(64);
        fill(215, 237, 250);
        text("Web Of Spells", center.x, center.y - 48)

        fill(6, 5, 11)
        rect(center.x - 100, center.y - 16, 200, 32)
        textSize(16)
        noStroke();
        fill(215, 237, 250)
        // subtract 2 from center.y + (number) cause it's more center aligned even tho it's not mathematically center.
        text('Play the Game', center.x, center.y + 6)

        textAlign(LEFT);
        textSize(14);
        fill(215, 237, 250);
        text("Move using the arrow, or wasd, keys.", center.x, center.y + 64);
        text("Click to fire.", center.x, center.y + 80);
        text("Use shift to dash.", center.x, center.y + 96);
    }
}