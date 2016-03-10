
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var input = document.getElementById("#userGuess");
  	// or?
  	.find()

 // start a new game when the user clicks the "New Game" button


 // create a newGame function that does everything necessary to start a new game.

 var newGame = function() {
 	numGen();
 	whatUserGuess();
 		// button does not currently do anything. write code that allows users to start a new game 
 	$(".new").click(function() {
 		newGame();
 	});
 		// Clicking "New Game" should trigger the JavaScript function that starts a new game.

	// without making additional calls to the server. 
	preventDefault();

 	$( "#userGuess").click();
 	};
 }

 


 // named function that generates a number between 1 and 100 that the user will have to guess. 
var numGen = function() {
	hiddenNum = Math.floor((Math.random() * 100) + 1);
};

 // write a named function that takes a user guess and determines which feedback to provide.

 var whatUserGuess = function() {



 // give feedback about each guess – if it was too low, too high, or just right. 

	// use absolute values, if 50 or further away from the secret number, they are "Ice cold", 
	// between 30 and 50 they are "cold", between 20 and 30 they are warm, between 10 and 20 hot, 
	// and between 1 and 10 "very hot". choose what the ranges are and what feedback you provide.

			if (hiddenNum === userGuess) {
				return "You Win!!)"
			} else if (hiddenNum - userGuess >= 50) {
				return "Ice cold";
			} else if (numGen - userGuess > 30 && numGen - userGuess < 50 ) {
				return "Cold";
			} else if (numGen - userGuess > 20 && numGen - userGuess < 30 ) {
				return "Warm";
			} else if (numGen - userGuess > 10 && numGen - userGuess < 20 ) {
				return "Hot";
			} else if (numGen - userGuess > 1 && numGen - userGuess < 10 ) {
				return "Very Hot!";
			

		// Feedback about the guess should appear in div#feedback. 

			// By default, when the page loads, the text in this field is set to "Make Your Guess!"



 }; 
// track how many guesses the user has made. Feedback about this should appear in span#count 
	// (which defaults to 0, when the page loads).

//  supply users with a list of the numbers they have guessed so far. The CSS for this game is set up 
// in such a way that you can simply add each guessed number as an <li> to ul#guessList.

// ensure that users provide valid inputs. Note that the guess text input field has the HTML 5 required flag set,
// don't worry about blank guesses being submitted (if the user submits a blank guess, they'll be prompted to supply an input).
// you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.


 // start a new game without refreshing or reloading the page.







});


