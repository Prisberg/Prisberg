/**
 * Represents the player in the game.
 * @class
 */
class Player {
	/**
	 * Initializes the player.
	 * @constructor
	 */
	constructor() {
	}

	/**
	 * Displays the player on the canvas.
	 */
	display() {
		push();
		stroke(230, 255, 0);
		fill(255, 255, 255);
		ellipse(playerPosX, playerPosY, 30);
		pop();
	}

	/**
	 * Moves the player based on user input.
	 */
	move() {
		if ((keyIsDown(65) || keyIsDown(LEFT_ARROW)) && playerPosX > 5) {
			playerPosX -= 2;
		}
		if ((keyIsDown(68) || keyIsDown(RIGHT_ARROW)) && playerPosX < width - 5) {
			playerPosX += 2;
		}
		if ((keyIsDown(87) || keyIsDown(UP_ARROW)) && playerPosY > 5) {
			playerPosY -= 2;
		}
		if ((keyIsDown(83) || keyIsDown(DOWN_ARROW)) && playerPosY < height - 5) {
			playerPosY += 2;
		}
	}

	/**
	 * Checks for collisions between the player and target enemies.
	 * @returns {boolean} - True if a collision is detected, otherwise false.
	 */
	hitScan() {
		for (let i = 0; i < targetEnemies.length; i++) {
			let collideOrNot = collideCircleCircle(playerPosX, playerPosY, 30, targetEnemies[i].myX(), targetEnemies[i].myY(), targetEnemies[i].myR());
			if (collideOrNot) {
				return true;
			}
		}
		return false;
	}
}
