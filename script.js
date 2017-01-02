
/*

//////////////////////////
// SIMPLE QUIZ CHALLENGE


//7. Use IIFE(immediately invoked expression) so the code doesn't interfer with other programmers code ie. if it was a plugin
(function() {


// 1. Build a function constructer called Question

function Question(question, answers, correct){
	//a. Question itself
	this.question = question;
	//b. the answer from which the player can choose the correct one eg array or object
	this.answers = answers;
	//c. correct answer (numbers)
	this.correct = correct;
};

/// allow method to be unattached to the object ///

Question.prototype.displayQuestion = 
function() {
	console.log(this.question);

	// Loop through answers to display them //
	for (var i = 0; i < this.answers.length; i++){
		console.log(i + ': ' + this.answers[i]);
	}
}

//6. check if answer is correct and print to console if correct or Not (another method)
Question.prototype.checkAnswer = function(ans){
	if (ans === this.correct){
		console.log('Correct answer!');
	} else {
		console.log('Wrong answer! Try Again :)');
	}
}

// 2. create a couple of questions usings the constructer
var q1 = new Question("Are programmers wizards?", 
						['Yes', 'No'],
						0);

var q2 = new Question ("Best County in Ireland?", 
						['Dublin', 
						'Meath', 
						'Mayo'], 
						1);

var q3 = new Question ('What does best describe coding?',
						['Boring',
						'Hard',
						'Fun',
						'Lame'],
						2);

//3. Store them all inside an array
var questions = [q1, q2, q3];

//4. Select one random question and log to console plus possible answers (write method for the question object)
var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();

//5. use 'prompt' to ask users for the correct answer.
var answer = parseInt(prompt('Please select the correct answer.'));

//6. check if answer is correct and print to console if correct or Not (another method)
 questions[n].checkAnswer(answer);


//7. Use IIFE(immediately invoked expression) so the code doesn't interfer with other programmers code ie. if it was a plugin
})();

*/

/***********   EXPERT LEVEL  ************/

//8. After you display the result, display next random question, so the game never ends. (right function for and call it right after displaying the results)

//9. so you can leave the game say 'exit' in the prompt window.

//10. Track you score each time its correct add 1 point.

//11. display score in console. Use method



//7. Use IIFE(immediately invoked expression) so the code doesn't interfer with other programmers code ie. if it was a plugin
(function() {


// 1. Build a function constructer called Question

function Question(question, answers, correct){
	//a. Question itself
	this.question = question;
	//b. the answer from which the player can choose the correct one eg array or object
	this.answers = answers;
	//c. correct answer (numbers)
	this.correct = correct;
};

/* allow method to be unattached to the object */

Question.prototype.displayQuestion = 
function() {
	console.log(this.question);

	/* Loop through answers to display them */
	for (var i = 0; i < this.answers.length; i++){
		console.log(i + ': ' + this.answers[i]);
	}
}

//6. check if answer is correct and print to console if correct or Not (another method)
Question.prototype.checkAnswer = function(ans, callback){ /* callback = keepScore */
	var sc;

	if (ans === this.correct){
		console.log('Correct answer!');
		sc = callback(true);
	} else {
		console.log('Wrong answer! Try Again :)');
		sc = callback(false);
	}
	
	this.displayScore(sc);
}

//11. display score in console. Use method

Question.prototype.displayScore = function(score){
	console.log('Your current score = ' + score);
	console.log('-----------------------');
}



// 2. create a couple of questions usings the constructer
var q1 = new Question("Are programmers wizards?", 
						['Yes', 'No'],
						0);

var q2 = new Question ("Best County in Ireland?", 
						['Dublin', 
						'Meath', 
						'Mayo'], 
						1);

var q3 = new Question ('What does best describe coding?',
						['Boring',
						'Hard',
						'Fun',
						'Lame'],
						2);

	//3. Store them all inside an array
	var questions = [q1, q2, q3];

	//10. CLOSURES Track you score each time its correct add 1 point.
	function score() {
		var sc = 0;
		return function(correct){
			if (correct){
				sc++;
			}
			return sc;
		}
	}

	var keepScore = score();

	//8. After you display the result, display next random question, so the game never ends.(right function for and call it right after displaying the results)
	function nextQuestion() {

		//4. Select one random question and log to console plus possible answers (write method for the question object)
		var n = Math.floor(Math.random() * questions.length);
		questions[n].displayQuestion();

		//5. use 'prompt' to ask users for the correct answer.
		var answer = prompt('Please select the correct answer.');

		

		//9. so you can leave the game say 'exit' in the prompt window.

		if (answer !== 'exit') {
			//6. check if answer is correct and print to console if correct or Not (another method)
			questions[n].checkAnswer(parseInt(answer),
				keepScore);

			nextQuestion();
		}		
	}

	nextQuestion();


//7. Use IIFE(immediately invoked expression) so the code doesn't interfer with other programmers code ie. if it was a plugin
})();




















