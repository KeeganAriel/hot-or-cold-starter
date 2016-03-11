// named function that generates a number between 1 and 100 that the user will have to guess. 
var numGen = function() {
	return Math.floor((Math.random() * 100) + 1);
};


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var $input = $("#userGuess");
  	var hiddenNum;
  	// or?
  	// .find()

 // create a newGame function that does everything necessary to start a new game.

 var newGame = function() {
 	hiddenNum = numGen();
 		

 		// button does not currently do anything. write code that allows users to start a new game 

 		// Clicking "New Game" should trigger the JavaScript function that starts a new game.

 	};

  	newGame();
 // start a new game when the user clicks the "New Game" button
  	 	$(".new").click(function() {
 		newGame();
 	});

  	 	$( "#userGuess").click();


	// without making additional calls to the server. 

 
 


 // write a named function that takes a user guess and determines which feedback to provide.

 var whatUserGuess = function(hiddenNum, userGuess) {



 // give feedback about each guess – if it was too low, too high, or just right. 

var absoluteDiff = Math.abs(userGuess - hiddenNum);

			if (absoluteDiff === 0){
				return "You Win!!";
			} else if (absoluteDiff >= 50) {
				return "Ice cold";
			} else if (absoluteDiff >= 30) {
				return "Cold";
			} else if (absoluteDiff >= 20 ) {
				return "Warm";
			} else if (absoluteDiff >= 10) {
				return "Hot";
			} else {
				return "Very Hot!";
 			}
};

		// Feedback about the guess should appear in div#feedback. 

			// By default, when the page loads, the text in this field is set to "Make Your Guess!"



// track how many guesses the user has made. Feedback about this should appear in span#count 
	// (which defaults to 0, when the page loads).

//  supply users with a list of the numbers they have guessed so far. The CSS for this game is set up 
// in such a way that you can simply add each guessed number as an <li> to ul#guessList.




// ensure that user has provided valid numberical inputs. 

function isInputValid($input) {
	if(isNaN($input)) {
		return false;
	} else if ($input % 1 !== 0) {
		return false;
	} else if ($input <= 0) {
		return false;
	} else if ($input > 100) {
		return false;
	} else {
		return true;
	}
	}
	


 // start a new game without refreshing or reloading the page.

});