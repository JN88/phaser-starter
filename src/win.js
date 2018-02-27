var winState = {

	create: function(){
		var nameLabel = game.add.text(80, 80, 'You Won !!!', { font: '50px Arial', fill: '#ffffff' });
		var startLabel = game.add.text(80, game.world.height-80, 'press the "Space" key to restart', {font: '25px Arial', fill: '#ffffff' });
		var reKey  = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		reKey .onDown.addOnce(this.restart, this);
	},

	// The restart function calls the menu state
	restart: function(){
		game.state.start('menu');
	}
}