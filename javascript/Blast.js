class Blast {
	constructor(xSpd, ySpd) {
		this.x = playerPos.x;
		this.y = playerPos.y;
		this.xSpd = 12 * xSpd;
		this.ySpd = 12 * ySpd;
	}

	display() {
		push()
		stroke(230, 255, 0);
		fill(230, 255, 0, 135);
		ellipse(this.x, this.y, 10);
		pop();
	}

	update() {
		this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.994;
		this.ySpd *= 0.994;
	}

	outOfBounds() {
		return (this.x > width + 10 || this.x < -10 || this.y > height + 10 || this.y < -10);
	}

	hitScan() {
		for (let i = 0; i < targetEnemies.length; i++) {
			let collideOrNot = collideCircleCircle(this.x, this.y, 10, targetEnemies[i].myX(), targetEnemies[i].myY(), targetEnemies[i].myR())
			if (collideOrNot) {
				targetEnemies.splice(i, 1);
				score += 1;
				return true;
			}
		}
		return false;
	}
}