class Player {
	constructor() {
		this.speed = 2;
		this.stamina = 50;
	}

	display() {
		push();
		angleMode(DEGREES); // Change the mode to DEGREES
		let a = atan2(mouseY - playerPos.y, mouseX - playerPos.x);
		translate(playerPos.x, playerPos.y)
		rotate(a);
		image(images.player, -30, -39 / 2, 60, 39)
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
				this.speed = 5;
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
		if (keyIsPressed && keyIsDown(32)) {
			console.log('space');
		}
	}

	drawStaminaBar() {
		fill(6, 8, 11, 225);
		rect(10, height - 30, 200, 16);

		fill(111, 0, 57);
		rect(10, height - 30, this.stamina * 4, 16)

		noStroke();
		fill(215, 237, 250);
		textAlign(LEFT)
		text('Stamina', 10, height - 40,)

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
