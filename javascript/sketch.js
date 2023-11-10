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
 * States: start, playing, pause, dead.
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
let images = {
	battlemap: undefined
};
let animations = {
	start: [],
	idle: [],
	basicAttack: [],
	ultimate: [],
	basicEnemy: []
};
let font;


function preload() {
	images.battlemap = loadImage('./assets/battlemap/floorTexture1.jpg')
	font = loadFont('./assets/fonts/GrenzeGotisch.ttf')

	loadAnimationLoop(15, animations.start, 'animatedMenuHero')
	loadAnimationLoop(3, animations.idle, 'idle')
	loadAnimationLoop(2, animations.basicAttack, 'basicAttack')
	loadAnimationLoop(4, animations.ultimate, 'ultimate')
	loadAnimationLoop(2, animations.basicEnemy, 'enemies/basic')
}

function setup() {
	// Making the start animation loop without adding more images.
	animations.start.push(...animations.start.slice(7).reverse())
	animations.start.unshift(...animations.start.slice(undefined, 7).reverse())

	createCanvas(windowWidth, windowHeight);
	textFont(font);
	center.x = windowWidth / 2;
	center.y = windowHeight / 2;
	playerPos.x = center.x;
	playerPos.y = center.y;
	playerCharacter = new Player();
	angleMode();

}

function windowResized() {
	center.x = windowWidth / 2;
	center.y = windowHeight / 2;
	playerPos.x = center.x;
	playerPos.y = center.y;
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	const canvas = document.getElementsByTagName('canvas')[0]

	background(13, 17, 23);
	// Background image
	if (width > height) {
		for (let x = 0; x < width; x += height) {
			for (let y = 0; y < height; y += height) {
				image(images.battlemap, x, y, height, height);
			}
		}
	} else {
		for (let x = 0; x < width; x += width) {
			for (let y = 0; y < height; y += width) {
				image(images.battlemap, x, y, width, width);
			}
		}

	}

	let game;
	if (gameState === "start") {
		frameRate(6);
		canvas.classList.remove('noCursor')
		game = new Start();
		game.menu();
	} else if (gameState === "playing") {
		canvas.classList.add('noCursor')
		frameRate(60);
		game = new GameEngine();
		game.play();
	} else if (gameState === "pause") {
		canvas.classList.remove('noCursor')
		game = new Pause();
		game.menu();
	} else if (gameState === "dead") {
		canvas.classList.remove('noCursor')
		game = new GameOver();
		game.menu();
	}
}