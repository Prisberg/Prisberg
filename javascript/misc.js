function getMouseVector() {
	let mouseXalt = mouseX - playerPos.x;
	let mouseYalt = mouseY - playerPos.y;
	let mouseDir = createVector(mouseXalt, mouseYalt);
	mouseDir.normalize();
	return mouseDir;
}

function reset() {
	blastsFired = [];
	targetEnemies = [];
	playerPos.x = center.x;
	playerPos.y = center.y;
	targetTimer = 0;
	entitySpawnMultiplier = 2;
	entitySizeMultiplier = 2;
	score = 0;
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