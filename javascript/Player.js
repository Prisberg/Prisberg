class Player {
	constructor() {
	}

	display() {
		push();
		stroke(230, 255, 0);
		fill(255, 255, 255);
		ellipse(playerPos.x, playerPos.y, 30);
		pop();
	}

	move() {
		if ((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && playerPos.x > 5) {
			playerPos.x -= 2;
		}
		if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && playerPos.x < width - 5) {
			playerPos.x += 2;
		}
		if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && playerPos.y > 5) {
			playerPos.y -= 2;
		}
		if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && playerPos.y < height - 5) {
			playerPos.y += 2;
		}
	}

	hitScan() {
		for (let i = 0; i < targetEnemies.length; i++) {
			let collideOrNot = collideCircleCircle(playerPos.x, playerPos.y, 30, targetEnemies[i].myX(), targetEnemies[i].myY(), targetEnemies[i].myR());
			if (collideOrNot) {
				return true;
			}
		}
		return false;
	}
}
