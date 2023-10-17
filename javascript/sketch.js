let bulletsFired = [];
let targetEnemies = [];
let playerCharacter;
let playerPosX;
let playerPosY;
let targetTimer = 0;
let entitySpawnMultiplier = 2;
let entitySizeMultiplier = 2;
let score = 0;
let Retry;
let xCenter;
let yCenter;

let highScore = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	xCenter = windowWidth / 2
	yCenter = windowHeight / 2
	playerPosX = xCenter;
	playerPosY = yCenter;
	playerCharacter = new Player();
	angleMode();
	Retry = createButton('Try again');
	Retry.hide();

	// if (!Cookies.get('highscore')) {
	// 	Cookies.set('highscore', '0');
	// }
	// highScore = Cookies.get('highscore');
}

function windowResized() {
	// TODO, Fix: Repeatedly resizing when dead increases your score slightly.
	xCenter = windowWidth / 2
	yCenter = windowHeight / 2
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	let mouseVector = getMouseVector();
	oneBullet = new Bullet(mouseVector.x, mouseVector.y);
	bulletsFired.push(oneBullet);
}

function draw() {
	background(20);
	drawReticle();

	// ENTITYS-SPAWN 
	targetTimer += 1;
	let spawnInterval = int(100 / entitySpawnMultiplier);
	if (targetTimer % spawnInterval == 0) {
		let newEntity = new Entity();
		targetEnemies.push(newEntity);
		score += 5;
	}

	// BULLETS 
	for (var i = 0; i < bulletsFired.length; i++) {
		bulletsFired[i].display();
		bulletsFired[i].update();
		if (bulletsFired[i].outOfBounds()) {
			bulletsFired.splice(i, 1);
		}
		else if (bulletsFired[i].hitScan()) {
			bulletsFired.splice(i, 1);
		}
	}

	// EVIL-ENTITIES 
	for (var i = 0; i < targetEnemies.length; i++) {
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

	// HERO-AND-HERO-DEAD 
	playerCharacter.display();
	playerCharacter.move();
	if (playerCharacter.hitScan()) {
		gameOver();
	}

	// TUTORIAL 
	noStroke();
	if (targetTimer < 500) {
		textAlign(LEFT);
		textFont('Helvetica');
		textSize(14);
		fill(235);
		text("arrow keys or wasd: move", 35, 35);
		text("mouse: aim", 35, 50);
		text("left click: fire", 35, 65);
	}
}




























