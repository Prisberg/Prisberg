class Blast {
	constructor(mouseVectorX, mouseVectorY) {
		this.x = playerPos.x;
		this.y = playerPos.y;
		this.mouseVectorX = 12 * mouseVectorX;
		this.mouseVectorY = 12 * mouseVectorY;
		this.trail = [];
	}

	display() {
		push();
		fill(255);
		ellipse(this.x, this.y, 12);

		// Display the trail ellipses.
		for (let i = 0; i < this.trail.length; i++) {
			fill(156, 229, 249, (255 - (40 * (this.trail.length - i))));
			ellipse(this.trail[i].x, this.trail[i].y, 10 - (this.trail.length - i));
		}
		pop();
	}

	update() {
		this.x += this.mouseVectorX;
		this.y += this.mouseVectorY;
		this.mouseVectorX *= 0.994;
		this.mouseVectorY *= 0.994;

		// Add the current position to the trail array.
		this.trail.push({ x: this.x, y: this.y });

		// Limit the length of the trail to avoid excessive memory usage.
		if (this.trail.length > 10) {
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
				return true;
			}
		}
		return false;
	}
}