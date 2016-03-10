 var whatsUserGuess = function(hiddenNum, userGuess) {



 // give feedback about each guess – if it was too low, too high, or just right. 

	// use absolute values, if 50 or further away from the secret number, they are "Ice cold", 
	// between 30 and 50 they are "cold", between 20 and 30 they are warm, between 10 and 20 hot, 
	// and between 1 and 10 "very hot". choose what the ranges are and what feedback you provide.

			if (hiddenNum === userGuess) {
				return "You Win!!";
			} else if (hiddenNum - userGuess >= 50) {
				return "Ice cold";
			} else if (hiddenNum - userGuess > 30 && hiddenNum - userGuess < 50 ) {
				return "Cold";
			} else if (hiddenNum - userGuess > 20 && hiddenNum - userGuess < 30 ) {
				return "Warm";
			} else if (hiddenNum - userGuess > 10 && hiddenNum - userGuess < 20 ) {
				return "Hot";
			} else if (hiddenNum - userGuess > 1 && hiddenNum - userGuess < 10 ) {
				return "Very Hot!";
 			}
};
 console.log(whatsUserGuess(33, 33));