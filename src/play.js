var playState = {

	preload: function() {

	},

	create: function() {

		// Prepare the keyboard so that the human player can move the
		// player sprite around
		this.keyboard = game.input.keyboard;

		// Create the player sprite and anable physics
		this.player = game.add.sprite(16, 16, 'player');
		game.physics.enable(this.player, Phaser.Physics.ARCADE);

		// Create the player sprite and anable physics
		this.win = game.add.sprite(256, 256, 'win');
		game.physics.enable(this.win, Phaser.Physics.ARCADE);

	},

	update: function() {

		game.physics.arcade.overlap(this.player, this.win, this.uWin, null, this);

		// Finally, we give the human player a means of moving the 'player' sprite (W,A,S,D
		// in this case)
		// Enabling movement along the x axis
		if (this.keyboard.isDown(Phaser.Keyboard.A)) {
			this.player.body.velocity.x = -175;
		} else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
			this.player.body.velocity.x = 175;
		} else {
			this.player.body.velocity.x = 0;
		}

		// Enabling movement along the y axis
		if (this.keyboard.isDown(Phaser.Keyboard.W)) {
			this.player.body.velocity.y = -175;
		} else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
			this.player.body.velocity.y = 175;
		} else {
			this.player.body.velocity.y = 0;
		}
	},

	// We start the win state
	uWin: function(){
		game.state.start('win');
	}
}