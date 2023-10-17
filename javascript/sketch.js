let bulletsFired = [];
let targetEnemies = [];
let playerCharacter;
let turPosX = 300;
let turPosY = 300;
let targetTimer = 0;
let entitySpawnMultiplier = 2;
let entitySizeMultiplier = 2;
let score = 0;
let Retry;

let highScore = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	playerCharacter = new Player(300, 300);
	Retry = createButton('retry');
	Retry.hide();

	// if (!Cookies.get('highscore')) {
	// 	Cookies.set('highscore', '0');
	// }
	// highScore = Cookies.get('highscore');
}

function windowResized() {
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

	//----------------------------------------ENTITYS-SPAWN--------------------------------------
	targetTimer += 1;
	let spawnInterval = int(100 / entitySpawnMultiplier);
	//print(spawnInterval)
	if (targetTimer % spawnInterval == 0) {
		let newEntity = new Entity();
		targetEnemies.push(newEntity);
		score += 5;
	}

	//----------------------------------------------BULLETS----------------------------------------
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

	//-------------------------------------------EVIL-ENTITIES----------------------------------------
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

	//------------------------------------------HERO-AND-HERO-DED---------------------------------------a
	playerCharacter.display();
	playerCharacter.move();
	if (playerCharacter.hitScan()) {
		gameOver();
	}

	//------------------------------------------TUTORIAL------------------------------------------------
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
	fill(60);
	textAlign(CENTER);
	text("version 1.06 by carrefinho", 300, 580);
}




























