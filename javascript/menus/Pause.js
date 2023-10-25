class Pause {
    constructor() { }
    menu() {
        fill(6, 8, 11)
        rect(0, center.y / 2, windowWidth, center.y)

        stroke(111, 0, 57);
        strokeWeight(2)
        textAlign(CENTER);
        textSize(64);
        fill(215, 237, 250);
        text("Pause", center.x, center.y - 56)

        stroke(111, 0, 57);
        strokeWeight(2)
        fill(6, 5, 11)
        rect(center.x - 100, center.y - 16, 200, 32)
        textSize(16)
        noStroke();
        fill(215, 237, 250)
        // subtract 2 from center.y + (number) cause it's more center aligned even tho it's not mathematically center.
        text('Continue', center.x, center.y + 6)

        stroke(111, 0, 57);
        strokeWeight(2)
        fill(6, 5, 11)
        rect(center.x - 100, center.y + 32, 200, 32)
        textSize(16)
        noStroke();
        fill(215, 237, 250)
        // subtract 2 from center.y + (number) cause it's more center aligned even tho it's not mathematically center.
        text('Back to Start', center.x, center.y + 54)

        textAlign(RIGHT);
        textSize(16);
        fill(215, 237, 250);
        text("Move using the arrow, or wasd, keys.", width - 32, center.y / 2 + 32);
        text("Click to fire.", width - 32, center.y / 2 + 48);
        text("Use shift to dash.", width - 32, center.y / 2 + 64);
    }
}