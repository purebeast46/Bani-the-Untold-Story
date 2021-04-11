/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'Bani The Untold Story',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'home': 'home.jpg',
	'start': 'start_news.png',
	'market': 'market.jpg'
    
});


// Define the Characters
monogatari.characters ({
	'w': {
		name: 'Wills',
		color: '#5bcaff',
		directory: 'wills',
		sprites: {
            normal: 'normal.png'
		}
	},

	'p':{
		name: '{{player.name}}',
		color: '#ffff00',
		directory: 'Player',
		sprites: {
			normal: 'normal.png'
		}

	},
	
	'po':{
		name: 'Inspector Serjos',
		color: '#ff0000',
		directory: 'police',
		sprites: {
			normal: 'normal.png'
		}
	}


});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show notification Welcome',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'show scene start with fadeIn',
		'That was the first headline I found after getting the newspaper today.',
		'show scene home with fadeIn',
		'show character p normal right with fadeIn',
		'p Only murder news over the days, not a single piece of good news to brighten my mood.',
		'hide character p',
		
		'show character w normal left with fadeIn',
		'That\'s the fault of your mood not the newspaper\'s.',
		'By the way, I forgot to introduce Myself',
		'show character p normal right with fadeIn',
		'w I am Wills and the person over there is {{player.name}}',
		'w who is famous detective and the laziest one I have ever known.',
		'w I don\'t know how he became famous but I am his assistant. Or you can also say his caretaker.',
		'w You might think a well-known detective must run after myteries.',
		'w But he is not like that.',
		'hide character w',
		'show character p normal right with fadeIn',
		'p Give me money and I will solve any mysteries for you because solving mysteries free won\'t fill my stomach.',
		'hide character p',
		'show character w normal left fadeIn',
		'w Those murder news have been giving me headache over the past days',
		'w 10 persons have been murdered in total.',
		'hide character w',
		'show character p normal right fadeIn',
		'p Isn\'t that normal ?',
		'p Beside the local police are investegating.',
		'hide character p',
		'show scene market with fadeIn',
		'show character w normal left with fadeIn',
		'w So, he was lazing around doing nothing and I went to the market to by the necessities.',
		'w Before that, our currency system: 50 coppers = 25 silvers = 1 gold coin.',
		'w One gold coin is a big amount, with 2 gold coins you can pass a month easily.',
		'show scene home with fadeIn',
		'At the evening an unexpected guest happened to visit.',
		'show character po normal left with fadeIn',
		'po Hey there, Sir. How\'re ya doing ?',
		'hide character po',
		'show character p normal right with fadeIn',
		'p Not so great, specially after seeing your face.',
		'hide character p',
		'show character po normal left with fadeIn',
		'po You\'re so mean.',
		'hide character po',
		'show character p normal right with fadeIn',
		'p So, what\'s the matter?',
		'hide character p',
		'show character po normal left with fadeIn',
		'po I want you...',
		'hide character po',
		'show character p normal right with fadeIn',
		'p First thing first, name the amount you\'re willing to pay.',
		'hide character p',
		'show character po normal left with fadeIn',
		'po Your time is 4 week and 2 gold coins a week',
		'hide character po',
		
		{
			'Choice': {
				'Dialog': 'Bargain to increase the price',
				'Yes': {
					'Text': 'Bargain',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'Accept Current Price',
					'Do': 'jump No'
				}
			}
		}
		
	],

	'Yes': [
		'show character p normal right with fadeIn',
		'p Make it 4 coins.',
		'hide character p',
		'show character po normal left with fadeIn',
		'po Are you planning to rob me?',
		'hide character po',
		'show character p normal right with fadeIn',
		'p You can look for another ditective if you want',
		'end'
	],

	'No': [
		'show character p normal right with fadeIn',
		'p I am okay with that.',
		'end'

		
	],


});