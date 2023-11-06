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
	playerCharacter.updateMana(0)
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
		playerCharacter.playerAnimation(animations.basicAttack);
		let mouseVector = getMouseVector();
		oneBlast = new Blast(mouseVector.x, mouseVector.y);
		blastsFired.push(oneBlast);
	} else if (gameState === "pause") {
		if (withinButtonXCoords) {
			if (mouseY <= center.y + 16 && mouseY >= center.y - 16) {
				gameState = "playing";
			}
			if (mouseY <= center.y + 64 && mouseY >= center.y + 32) {
				gameState = "start";
				reset();
			}
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

function drawHints() {
	textAlign(RIGHT);
	textSize(16);
	fill(215, 237, 250);
	text("Move using the arrow, or W A S D, keys.", width - 32, center.y / 2 + 32);
	text("Press R for an ultimate attack.", width - 32, center.y / 2 + 48);
	text("Press Spacebar to blink.", width - 32, center.y / 2 + 64);
	text("Use shift to dash.", width - 32, center.y / 2 + 80);
	text("Esc to pause.", width - 32, center.y / 2 + 96);
	text("Click to fire.", width - 32, center.y / 2 + 112);
}