var loadState = {

	// The preload function is another standard Phaser function that we
	// use to define and laod our assets
	preload: function(){
		// Add a loading label on the screen
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		bgGame = game.load.image('background', 'assets/background.png');

        // Load all assets. The first parameter is the variable that
        // will point to the image, and the second parameter is the
        // image file itsself.
		game.load.image('player', 'assets/player.png');
		game.load.image('win', 'assets/win.png');

	},

	create: function(){
		bgGame = game.add.tileSprite(0, 0, 640, 480, "background");

		// Call the menu state
		game.state.start('menu');
	}
}