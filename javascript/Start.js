class Start {
    constructor() {
        this.startButton = createButton('Start game');
    }
    menu() {
        push();
        noStroke();
        fill(20)
        rect(center.x - 150, center.y - 100, 300, 200)

        textFont('Georgia');
        textAlign(CENTER);
        textSize(50);
        fill(170, 20, 20);
        text("WELCOME", center.x, center.y - 25)

        this.startButton.elt.type = "button"
        this.startButton.show();
        this.startButton.position(center.x - 50, center.y + 50);
        this.startButton.size(100, 30);
        this.startButton.style('background-color', '#202020');
        this.startButton.style('color', '#FFFFFF');
        this.startButton.mousePressed(() => {
            gameState = "playing";
            this.startButton.remove();
            loop();
        });
        this.startButton.elt.width

        pop();
        noLoop();
    }
}
