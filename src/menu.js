var menuState = {

	create: function () {

		// Here we display the name of the game. When defining text, the
		// first two parameters are x and y positional values, then the
		// actual text, and then the 'font' defines the font (of course)
		// and 'fill' refers to the font color.
		var nameLabel = game.add.text(80, 80, 'My First Game', { font: '50px Arial', fill: '#ffffff' });

		// We give the player instructions on how to start the game
		var startLabel = game.add.text(80, game.world.height-80, 'press the "Space" key to start', {font: '25px Arial', fill: '#ffffff' });

		// We define the starKey as Phaser.Keyboard.W so that we can act
		// when the player presses it
		var starKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		// When the player presses the W key, we call the start function
		starKey.onDown.addOnce(this.start, this);
	},

	// The start function calls the play state
	start: function () {
		game.state.start('play');
	},
};
