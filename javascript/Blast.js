class Blast {
	constructor(xSpd, ySpd) {
		this.x = playerPos.x;
		this.y = playerPos.y;
		this.xSpd = 12 * xSpd;
		this.ySpd = 12 * ySpd;
		this.trail = [];
	}

	display() {
		push();
		fill(255);
		ellipse(this.x, this.y, 11);

		// Display the trail ellipses.
		for (let i = 0; i < this.trail.length; i++) {
			fill(156, 229, 249, (255 - (40 * (this.trail.length - i))));
			ellipse(this.trail[i].x, this.trail[i].y, 10 - (this.trail.length - i));
			console.log((10 * (this.trail.length - i)));
		}
		pop();
	}

	update() {
		this.x += this.xSpd;
		this.y += this.ySpd;
		this.xSpd *= 0.994;
		this.ySpd *= 0.994;

		// Add the current position to the trail array.
		this.trail.push({ x: this.x, y: this.y });

		// Limit the length of the trail to avoid excessive memory usage.
		if (this.trail.length > 5) {
			this.trail.shift();
		}
	}

	outOfBounds() {
		return (this.x > width + 10 || this.x < -10 || this.y > height + 10 || this.y < -10);
	}

	hitScan() {
		for (let i = 0; i < targetEnemies.length; i++) {
			let collideOrNot = collideCircleCircle(this.x, this.y, 10, targetEnemies[i].myX(), targetEnemies[i].myY(), targetEnemies[i].myR())
			if (collideOrNot) {
				targetEnemies.splice(i, 1);
				if (mana < 25) mana++;
				score += 1;
				return true;
			}
		}
		return false;
	}
}