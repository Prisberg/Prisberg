class Entity {
	// Constructor for the Entity class
	constructor() {
		// Randomly choose a side (0, 1, 2, or 3) where the entity spawns
		this.side = int(random(4));

		// Depending on the chosen side, set the initial position of the entity
		switch (this.side) {
			case 0:
				this.x = 0;
				this.y = int(random(height));
				break;
			case 1:
				this.x = int(random(width));
				this.y = 0;
				break;
			case 2:
				this.x = width;
				this.y = int(random(height));
				break;
			case 3:
				this.x = int(random(width));
				this.y = height;
				break;
		}

		// Calculate the direction vector towards the player's position
		this.targetDir = createVector(playerPos.x - this.x, playerPos.y - this.y);
		this.targetDir.normalize();

		// Calculate the horizontal and vertical speeds based on the direction vector
		this.ySpd = this.targetDir.y * entitySpawnMultiplier;
		this.xSpd = this.targetDir.x * entitySpawnMultiplier;

		// Set the entity's radius
		this.r = 12 * entitySizeMultiplier;

		if (random(1) < 0.1) {
			this.homing = true;
		} else {
			this.homing = false;
		}
	}

	// Display the entity as a colored ellipse
	display() {
		push();
		noStroke();
		if (this.homing) {
			fill(255, 0, 0);
		} else {
			fill(111, 12, 0);
		}
		ellipse(this.x, this.y, this.r);
		pop();
	}

	// Update the entity's position based on its speed
	update() {
		if (this.homing) {
			this.targetDir = createVector(playerPos.x - this.x, playerPos.y - this.y);
			this.targetDir.normalize();

			// Calculate the horizontal and vertical speeds based on the direction vector
			this.ySpd = this.targetDir.y * entitySpawnMultiplier;
			this.xSpd = this.targetDir.x * entitySpawnMultiplier;
		}
		this.x += this.xSpd;
		this.y += this.ySpd;
	}

	// Check if the entity is out of the canvas bounds
	outOfBounds() {
		return (this.x > width + 10 || this.x < -10 || this.y > height + 10 || this.y < -10);
	}

	// Get the x-coordinate of the entity
	myX() {
		return this.x;
	}

	// Get the y-coordinate of the entity
	myY() {
		return this.y;
	}

	// Get the radius of the entity
	myR() {
		return this.r;
	}
}
