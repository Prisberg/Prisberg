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
let Retry;
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
	Retry = createButton('Try again');
	Retry.elt.type = "button"
	Retry.hide();

	// if (!Cookies.get('highscore')) {
	// 	Cookies.set('highscore', '0');
	// }
	// highScore = Cookies.get('highscore');
}

function windowResized() {
	// TODO, Fix: Repeatedly resizing when dead increases your score indefinitely.
	center.x = windowWidth / 2;
	center.y = windowHeight / 2;
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	let mouseVector = getMouseVector();
	oneBlast = new Blast(mouseVector.x, mouseVector.y);
	blastsFired.push(oneBlast);
}

function draw() {
	background(20);

	if (gameState === "start") {
		gameState = "playing"
	} else if (gameState === "playing") {
		const game = new GameEngine()
		game.play();
	} else if (gameState === "pause") {

	} else if (gameState === "dead") {
		gameOver();
	}

}

function keyPressed() {
	if (keyCode === ESCAPE) {
		if (gameState === 'playing') {
			gameState = 'pause'
		} else {
			gameState = 'playing'
		}
	}
}