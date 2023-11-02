function runGame() {
	// 1. Generate Random Number between 1-100 and store it in a variable
	let target = Math.floor(Math.random() * 100 + 1);
	console.log("Random Number:" + target);
	let guessString = ""; //Var for player guess in string form
	let guessNumber = 0; //Var for player guess converted to Number form
	let correct = false; //Var setup for when guess lands on target
	let numTries = 0; //Counter for number of guesses

	do {
		guessString = prompt("Guess a number between 1-100");
		if (guessString === null) {
			return;
		}
		numTries++;
		guessNumber = +guessString;
		correct = checkGuess(guessNumber, target);
	} while (!correct);

	alert(
		"You have guess correctly! It took you " + numTries + " attempts to get the number correct."
	);

	function checkGuess(guessNumber, target) {
		let correct = false;

		if (isNaN(guessNumber)) {
			alert("You did not enter a number");
		} else if (guessNumber < 1 || guessNumber > 100) {
			alert("You need to enter a number within the range of 1-100 only");
		} else if (guessNumber > target) {
			alert("Your guess is higher than the target number");
		} else if (guessNumber < target) {
			alert("Your guess is lower than the target number");
		} else {
			correct = true;
		}
		return correct;
	}
}
