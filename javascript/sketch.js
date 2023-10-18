/**
 * Represents the player's blasts in the game.
 * @class
 * @method display - Creates the blasts and renders it on the canvas.
 * @method update - Calculates the speed at which the blasts travel.
 * @method outOfBounds - Detects whether the blast is inside the canvasF.
 * @method hitScan - Detects collision with enemies.
 */
let blastsFired = [];
let targetEnemies = [];
/**
 * Represents the player in the game.
 * @class
 * @method display - Creates the player entity and renders it on the canvas.
 * @method move - Moves the player entity based on keyboard input.
 * @method hitScan - Detects collision with enemies.
 */
let playerCharacter;
let targetTimer = 0;
let entitySpawnMultiplier = 2;
let entitySizeMultiplier = 2;
let score = 0;
let highScore = 0;
/** 
 * A string that keeps track of the state of the game.
 * @string
 * States: start, playing, paus, dead.
 */
let gameState = 'start'
/** 
 * X and Y value for the player entity
  */
let playerPos = {
	x: undefined,
	y: undefined
};
/** 
 * X and Y value for the center of the canvas/window
  */
let center = {
	x: undefined,
	y: undefined
};


function setup() {
	createCanvas(windowWidth, windowHeight);
	center.x = windowWidth / 2;
	center.y = windowHeight / 2;
	playerPos.x = center.x;
	playerPos.y = center.y;
	playerCharacter = new Player();
	angleMode();


	// if (!Cookies.get('highscore')) {
	// 	Cookies.set('highscore', '0');
	// }
	// highScore = Cookies.get('highscore');
}


function windowResized() {
	center.x = windowWidth / 2;
	center.y = windowHeight / 2;
	resizeCanvas(windowWidth, windowHeight);
}


function draw() {
	background(20);
	let game;
	if (gameState === "start") {
		let game = new Start
		game.menu();
	} else if (gameState === "playing") {
		game = new GameEngine()
		game.play();
	} else if (gameState === "pause") {

	} else if (gameState === "dead") {
		game = new GameOver();
		game.menu();
	}

}

function mousePressed() {
	let withinButtonXCoords = mouseX <= center.x + 100 && mouseX >= center.x - 100;

	if (gameState === "start") {
		// This seems to me like the most readable approach for clicking canvas buttons.
		if (withinButtonXCoords)
			if (mouseY <= center.y + 16 && mouseY >= center.y - 16) {
				gameState = "playing";
				console.log(gameState);
			}
	} else if (gameState === "playing") {
		let mouseVector = getMouseVector();
		oneBlast = new Blast(mouseVector.x, mouseVector.y);
		blastsFired.push(oneBlast);
	} else if (gameState === "pause") {

	} else if (gameState === "dead") {
		if (withinButtonXCoords) {
			if (mouseY <= center.y + 16 && mouseY >= center.y - 16) {
				gameState = "playing";
				reset();
			}
			if (mouseY <= center.y + 64 && mouseY >= center.y + 32) {
				gameState = "start";
				reset();
			}
		}
	}
}

function keyPressed() {
	if (keyCode === ESCAPE) {
		if (gameState === "playing") {
			gameState = "pause"
		} else if (gameState === "pause") {
			gameState = "playing"
		}
	}
}