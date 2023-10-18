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
        text("WELCOME", center.x, center.y - 25)

        fill(0, 255, 0)
        rect(center.x - 25, center.y - 16, 50, 32)
        textSize(16)
        fill(255)
        text('START', center.x, center.y)
    }
}
