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
		drawReticle();

		// ENTITY SPAWN 
		targetTimer += 1;
		let spawnInterval = int(100 / entitySpawnMultiplier);
		if (targetTimer % spawnInterval == 0) {
			let newEntity = new Entity();
			targetEnemies.push(newEntity);
			score += 5;
		}

		// BLASTS 
		for (let i = 0; i < blastsFired.length; i++) {
			blastsFired[i].display();
			blastsFired[i].update();
			if (blastsFired[i].outOfBounds()) {
				blastsFired.splice(i, 1);
			}
			else if (blastsFired[i].hitScan()) {
				blastsFired.splice(i, 1);
			}
		}

		// EVIL ENTITIES 
		for (let i = 0; i < targetEnemies.length; i++) {
			targetEnemies[i].display();
			targetEnemies[i].update();
			if (targetEnemies[i].outOfBounds()) {
				targetEnemies.splice(i, 1);
			}
		}

		entitySpawnMultiplier += 0.001;
		if (entitySizeMultiplier < 5) {
			entitySizeMultiplier += 0.001;
		}

		// HERO AND HERO DEAD 
		playerCharacter.display();
		playerCharacter.move();
		if (playerCharacter.hitScan()) {
			gameState = "dead"
		}

		// TUTORIAL 
		noStroke();
		if (targetTimer < 500) {
			textAlign(LEFT);
			textFont('Helvetica');
			textSize(14);
			fill(235);
			text("Arrow keys or wasd: Move", 35, 35);
			text("Mouse: Aim", 35, 50);
			text("Left click: Fire", 35, 65);
		}
	} else if (gameState === "pause") {

	} else if (gameState === "dead") {
		gameOver();
	}

}

function keyPressed() {
	if (keyCode === ESCAPE) gameState = 'pause'
}