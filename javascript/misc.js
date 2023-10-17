function getMouseVector() {
	let mouseXalt = mouseX - playerPos.x;
	let mouseYalt = mouseY - playerPos.y;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
}

function drawReticle() {
	noFill();
	strokeWeight(1.5);
	stroke(0, 100, 125, 125);
	ellipse(mouseX, mouseY, 20);
	stroke(80, 160, 200, 125);
	line(mouseX - 14, mouseY - 14, mouseX + 14, mouseY + 14);
	line(mouseX + 14, mouseY - 14, mouseX - 14, mouseY + 14);
	stroke(80, 160, 200, 125);
	line(playerPos.x, playerPos.y, mouseX, mouseY);
}

function gameOver() {
	push()
	noStroke();
	fill(20)
	rect(center.x - 150, center.y - 100, 300, 200)

	textFont('Georgia');
	textAlign(CENTER);
	textSize(50);
	fill(170, 20, 20);
	text("YOU DIED", center.x, center.y - 25)

	textFont('Helvetica');
	textSize(18);
	fill(235);
	let scoreString = "score: " + score;
	text(scoreString, center.x, center.y);

	if (score > highScore) {
		highScore = score;
		// Cookies.remove('highscore');
		// Cookies.set('highscore', highScore);
	}

	let highScoreString = "highscore: " + highScore;
	text(highScoreString, center.x, center.y + 25);

	Retry.show();
	Retry.position(center.x - 50, center.y + 50);
	Retry.size(100, 30);
	Retry.style('background-color', '#202020');
	Retry.style('color', '#FFFFFF');
	Retry.mousePressed(reset);
	Retry.elt.width

	gameState = 'playing'
	pop();
	noLoop();
}

function reset() {
	Retry.hide();
	blastsFired = [];
	targetEnemies = [];
	playerPos.x = center.x;
	playerPos.y = center.y;
	targetTimer = 0;
	entitySpawnMultiplier = 2;
	entitySizeMultiplier = 2;
	score = 0;

	loop();
}