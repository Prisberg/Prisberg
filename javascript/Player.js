class Player {
	constructor() {
		this.speed = 2;
		this.stamina = 50;
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
			playerPos.x -= this.speed;
		}
		if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && playerPos.x < width - 5) {
			playerPos.x += this.speed;
		}
		if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && playerPos.y > 5) {
			playerPos.y -= this.speed;
		}
		if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && playerPos.y < height - 5) {
			playerPos.y += this.speed;
		}
		if ((keyIsDown(16) || keyIsDown(SHIFT))) {
			if (this.stamina > 0) {
				this.speed = 4;
				this.stamina--;
			} else {
				this.speed = 2;
			}
		} else {
			if (this.stamina < 50) {
				this.stamina++;
			}
			this.speed = 2;
		}
	}

	drawReticle() {
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
