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


function mousePressed() {
	let withinButtonXCoords = mouseX <= center.x + 100 && mouseX >= center.x - 100;

	if (gameState === "start") {
		// This seems to me like the most readable approach for clicking canvas buttons.
		if (withinButtonXCoords)
			if (mouseY <= center.y + 16 && mouseY >= center.y - 16) {
				gameState = "playing";
				console.log(gameState);
			}
	} else if (gameState === "playing") {
		let mouseVector = getMouseVector();
		oneBlast = new Blast(mouseVector.x, mouseVector.y);
		blastsFired.push(oneBlast);
	} else if (gameState === "pause") {

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