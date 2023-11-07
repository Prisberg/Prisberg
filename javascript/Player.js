class Player {
	constructor() {
		this.speed = 2;
		this.stamina = 50;
		this.mana = 0;
		this.animationFrame = animations.idle;
		this.idle = true;
		this.animationIndex = 0;
	}

	display() {
		push();
		angleMode(DEGREES);
		let a = atan2(mouseY - playerPos.y, mouseX - playerPos.x);
		translate(playerPos.x, playerPos.y)
		rotate(a);

		if (!this.idle && frameCount % 5 === 0) {
			if (this.animationIndex < this.animationFrame.length - 1) {
				this.animationIndex++;
			} else {
				this.animationIndex = frameCount % 3;
				this.idle = true;
				this.animationFrame = animations.idle;
			}
		}

		image(this.animationFrame[this.animationIndex], -30, -39 / 2, 60, 39)
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
		if (keyIsDown(32) && this.mana >= 10) {
			playerPos.x = mouseX;
			playerPos.y = mouseY;
			this.mana -= 10;
			fill(111, 0, 57);
			rect(center.x, center.y, width, height);
		}
		if (keyIsDown(82) && this.mana === 25) {
			score += targetEnemies.length
			targetEnemies = [];
			this.mana = 0;
		}
	}

	drawStaminaBar() {
		stroke(215, 237, 250);
		fill(6, 8, 11, 225);
		rect(10, height - 30, 200, 16);

		noStroke();
		fill(111, 0, 57);
		rect(10, height - 30, this.stamina * 4, 16)

		fill(215, 237, 250);
		textAlign(LEFT)
		textSize(16);
		text('Stamina', 10, height - 40,)
	}

	drawManaBar() {
		stroke(215, 237, 250);
		fill(6, 8, 11, 225);
		rect(10, height - 75, 200, 16);

		noStroke();
		fill(156, 229, 249);
		rect(10, height - 75, this.mana * 8, 16)

		fill(215, 237, 250);
		textAlign(LEFT)
		textSize(16);
		text('Mana', 10, height - 85,)
	}

	drawReticle() {
		noFill();
		strokeWeight(1.5);
		stroke(111, 0, 57);
		ellipse(mouseX, mouseY, 20);
		stroke(111, 0, 57);
		line(mouseX - 14, mouseY - 14, mouseX + 14, mouseY + 14);
		line(mouseX + 14, mouseY - 14, mouseX - 14, mouseY + 14);
		stroke(111, 0, 57);
		line(playerPos.x, playerPos.y, mouseX, mouseY);
		noStroke();
	}

	drawScore() {
		textAlign(RIGHT);
		textSize(32);
		fill(215, 237, 250);
		text(`Score: ${score}`, width - 16, 32);
	}

	updateMana(number) {
		if (number > 0) {
			if (this.mana < 25)
				this.mana += number;
		} else {
			this.mana = number;
		}
	}

	playerAnimation(animation) {
		this.animationIndex = 0;
		this.animationFrame = animation;
		this.idle = false;
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
