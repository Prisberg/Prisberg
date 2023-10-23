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
	mana = 0
	score = 0;
	targetTimer = 0;
	entitySpawnMultiplier = 2;
	entitySizeMultiplier = 2;
}

function mousePressed() {
	let withinButtonXCoords = mouseX <= center.x + 100 && mouseX >= center.x - 100;

	if (gameState === "start") {
		// This seems to me like the most readable approach for clicking canvas buttons.
		if (withinButtonXCoords)
			if (mouseY <= center.y + 32 && mouseY >= center.y - 32) {
				gameState = "playing";
			}
	} else if (gameState === "playing") {
		let mouseVector = getMouseVector();
		oneBlast = new Blast(mouseVector.x, mouseVector.y);
		blastsFired.push(oneBlast);
	} else if (gameState === "pause") {
		if (withinButtonXCoords)
			if (mouseY <= center.y + 32 && mouseY >= center.y - 32) {
				gameState = "playing";
			}
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