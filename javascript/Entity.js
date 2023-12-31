class Entity {
	constructor() {
		this.side = int(random(4));
		this.homing = random(1) < 0.1;
		this.animationIndex = 0;
		this.animation = animations.basicEnemy;

		if (this.side === 0) {
			this.x = 0;
			this.y = int(random(height));
		} else if (this.side === 1) {
			this.x = int(random(width));
			this.y = 0;
		} else if (this.side === 2) {
			this.x = width;
			this.y = int(random(height));
		} else {
			this.x = int(random(width));
			this.y = height;
		}

		this.r = 12 * entitySizeMultiplier;
		this.updateTarget();
	}

	display() {
		push();
		noStroke();
		if (frameCount % 12 === 0) {
			if (this.animationIndex < this.animation.length - 1) {
				this.animationIndex++;
			} else {
				this.animationIndex = 0;
			}
		}

		angleMode(DEGREES);
		let a = atan2(this.ySpd, this.xSpd);
		translate(this.x, this.y);
		rotate(a);

		image(this.animation[this.animationIndex], -this.r / 2, -this.r / 2, this.r, this.r); // Adjust image positioning
		pop();
	}

	update() {
		if (this.homing) {
			this.updateTarget();
		}
		this.x += this.xSpd;
		this.y += this.ySpd;
	}

	outOfBounds() {
		return (this.x > width + 10 || this.x < -10 || this.y > height + 10 || this.y < -10);
	}

	myX() {
		return this.x;
	}

	myY() {
		return this.y;
	}

	myR() {
		return this.r;
	}

	updateTarget() {
		this.targetDir = createVector(playerPos.x - this.x, playerPos.y - this.y);
		this.targetDir.normalize();
		this.ySpd = this.targetDir.y * entitySpawnMultiplier;
		this.xSpd = this.targetDir.x * entitySpawnMultiplier;
	}
}
