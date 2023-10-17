class Player {
	constructor() {
	}

	display() {
		push()
		stroke(230, 255, 0);
		fill(255, 255, 255);
		ellipse(turPosX, turPosY, 30);
		pop();
	}

	move() {
		if ((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && turPosX > 5) {
			turPosX -= 2;
		}
		if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && turPosX < width - 5) {
			turPosX += 2;
		}
		if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && turPosY > 5) {
			turPosY -= 2;
		}
		if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && turPosY < height - 5) {
			turPosY += 2;
		}
	}

	hitScan() {
		for (var i = 0; i < targetEnemies.length; i++) {
			var collideOrNot = collideCircleCircle(turPosX, turPosY, 30, targetEnemies[i].myX(), targetEnemies[i].myY(), targetEnemies[i].myR())
			if (collideOrNot) {
				return true;
			}
		}
		return false;
	}
}