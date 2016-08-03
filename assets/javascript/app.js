//Trivia Game Pseudo Code//

//1. Create an 9 questions. Each questions will have 4 possible multiple choice answers. 
//2. All 9 questions will be formated as Objects. Each 4 answer object will be an array. There needs to be a function that marks 1 answer to be the right answer.  
//3. Only the begginning of the game will have a start button. There will be no start button after that ever. Game will initialize with start button. 
//4. Question will display at random. Answers for the questions will also be in random order. Each answer will have a mouse-enter, mouse-leave function. 
//5. If answer is right, right answer counter will go up 1. Will have a gif display of right answer. Will use giphy API. 
//6. If answer is wrong, wrong answer counter will go up by 1. Will have right answer gif still display regardless. 
//7. Whether answer is right or wrong, the next question will immediately show up. 

var questions = {
	MichaelCorleonesOldestBrother: {
		"Johnny Corleone": false,
		"Paulie Corleone": false,
		"Santino Corleone": true,
		"Alfredo Corleone": false,
	},
	
	WhowasVitoCorleonesclosestfriendItaly: {
		"Phillip Tattaglia": false,
		"Antonio Andolini": false,
		"Emilio Barzini": false,
		"Don Tommasino": true,
	}
};

var rightAnswer, wrongAnswer, noAnswer;
rightAnswer++
wrongAnswer++
noAnswer++

$(document).ready(function(){

	function initializeTrivia () {
		rightAnswer = 0;
		wrongAnswer = 0;
		noAnswer = 0;
		$('#start').append('<b>Start Game</b>');

	};

	initializeTrivia ();


});



