//Trivia Game Pseudo Code//

//1. Create an 9 questions. Each questions will have 4 possible multiple choice answers. 
//2. All 9 questions will be formated as Objects. Each 4 answer object will be an array. There needs to be a function that marks 1 answer to be the right answer.  
//3. Only the begginning of the game will have a start button. There will be no start button after that ever. Game will initialize with start button. 
//4. Question will display at random. Answers for the questions will also be in random order. Each answer will have a mouse-enter, mouse-leave function. 
//5. If answer is right, right answer counter will go up 1. Will have a gif display of right answer. Will use giphy API. 
//6. If answer is wrong, wrong answer counter will go up by 1. Will have right answer gif still display regardless. 
//7. Whether answer is right or wrong, the next question will immediately show up. 


// function submitQuiz() {
		console.log('submitted');

	// get each answer score
		function answerScore (name) {
			var radiosNo = document.getElementsByName(name);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
			// do something with radiosNo
					var answerValue = Number(radiosNo[i].value);
				}
			}
			// change NaNs to zero
			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;

      console.log(answerValue);
		}

	// calc score with answerScore function
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4')
			+ answerScore('q5') + answerScore('q6') + answerScore('q7'));
		
		console.log("CalcScore: " + calcScore); // it works!

	// function to return correct answer string
		function correctAnswer (correctNo, qNumber) {
			console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctNo).innerHTML) + "</strong>");
			}

	// print correct answers only if wrong (calls correctAnswer function)
		if (answerScore('q1') === 0) {
			document.getElementById('correct1').innerHTML = correctAnswer('correct1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correct2').innerHTML = correctAnswer('correct2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correct3').innerHTML = correctAnswer('correct3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correct4').innerHTML = correctAnswer('correct4', 4);
		}

		if (answerScore('q5') === 0) {
			document.getElementById('correct5').innerHTML = correctAnswer('correct5', 5);
		}

		if (answerScore('q6') === 0) {
			document.getElementById('correct6').innerHTML = correctAnswer('correct6', 6);
		}

		if (answerScore('q7') === 0) {
			document.getElementById('correct7').innerHTML = correctAnswer('correct7', 7);
		}

	// calculate "possible score" integer
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}

	// show score as "score/possible score"
		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	// if 4/4, "perfect score!"
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
		};
		// document.getElementById('userScore').innerHTML = showScore;

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});

});


		
	
		


	


	

	





