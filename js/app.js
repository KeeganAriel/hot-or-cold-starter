// named function that generates a number between 1 and 100 that the user will have to guess. 
var numGen = function() {
	return Math.floor((Math.random() * 100) + 1);
};

// ensure that user has provided valid numberical inputs. 
function isInputValid(userInput) {
	if(isNaN(userInput)) {
		return false;
	} else if (userInput % 1 !== 0) {
		return false;
	} else if (userInput <= 0) {
		return false;
	} else if (userInput > 100) {
		return false;
	} else {
		return true;
	}
}

 // write a named function that takes a user guess and determines which feedback to provide.
 var whatsUserGuess = function(hiddenNum, userGuess) {

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
  	var $button = $("#guessButton");
  	var hiddenNum;
  	var $feedback = $("#feedback");
  	var $count = $("#count");
  	var guessCount;
  	var $List = $("#guessList");
  	var guessList;


 // create a newGame function that does everything necessary to start a new game.
 var newGame = function() {
 	hiddenNum = numGen();
 	guessCount = 0;
 	guessList = [];
 		$count.text(guessCount);
 		$feedback.text("Make your guess!");
 		$List.empty();
 		$input.val("");
 	};

  	newGame();
 // start a new game when the user clicks the "New Game" button
   	 	$("a.new").click(function() {
 		newGame();	
 	});


  	 	$( "#userGuess").click();


	// without making additional calls to the server. 

	$button.click(function() {
		console.log($input.val());
		event.preventDefault();
		var inputValue = $input.val();
		if (isInputValid(inputValue)) {

			if	(guessList.indexOf(inputValue) > -1) {
				$feedback.text("You already guessed that!");
			} else {
				var feedback = whatsUserGuess(hiddenNum, inputValue);
		// track how many guesses the user has made. Feedback about this should appear in span#count 
		// (which defaults to 0, when the page loads).			

		$feedback.text(feedback);
		guessCount++;
		$count.text(guessCount);
		guessList.push(inputValue);


		// add each guessed number as an <li> to ul#guessList.
		$List.append("<li>" + inputValue + "</li>");
		$input.val("");

	}

} else {
	$feedback.text("Unexceptable!!!");
}

});

});