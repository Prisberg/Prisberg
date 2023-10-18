class Start {
    constructor() {
    }
    menu() {
        noStroke();
        fill(20)
        rect(center.x - 150, center.y - 100, 300, 200)

        textFont('Georgia');
        textAlign(CENTER);
        textSize(50);
        fill(170, 20, 20);
        text("WELCOME", center.x, center.y - 100)

        fill(0, 255, 0)
        rect(center.x - 100, center.y - 16, 200, 32)
        textSize(16)
        fill(255)
        // subtract 2 from center.y + (number) cause it's more center aligned even tho it's not mathematically center.
        text('Start', center.x, center.y + 6)
    }
}
