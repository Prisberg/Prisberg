function getMouseVector() {
	let mouseXalt = mouseX - playerPosX;
	let mouseYalt = mouseY - playerPosY;
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
	line(playerPosX, playerPosY, mouseX, mouseY);
}

function gameOver() {
	push()
	noStroke();
	fill(20)
	rect(0, 200, 600, 200)

	textFont('Georgia');
	textAlign(CENTER);
	textSize(50);
	fill(170, 20, 20);
	text("YOU DIED", xCenter, yCenter)

	textFont('Helvetica');
	textSize(18);
	fill(235);
	let scoreString = "score: " + score;
	text(scoreString, xCenter, yCenter);

	if (score > highScore) {
		highScore = score;
		// Cookies.remove('highscore');
		// Cookies.set('highscore', highScore);
	}

	let highScoreString = "highscore: " + highScore;
	text(highScoreString, xCenter, yCenter);

	Retry.show();
	Retry.position(xCenter, yCenter);
	Retry.size(100, 30);
	Retry.style('background-color', '#202020');
	Retry.style('color', '#FFFFFF');
	Retry.mousePressed(reset);

	pop();
	noLoop();

}

function reset() {
	Retry.hide();
	bulletsFired = [];
	targetEnemies = [];
	playerPosX = xCenter;
	playerPosY = yCenter;
	targetTimer = 0;
	entitySpawnMultiplier = 2;
	entitySizeMultiplier = 2;
	score = 0;

	loop();
}