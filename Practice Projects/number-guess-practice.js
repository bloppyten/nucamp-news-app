function runGame() {
	let target = Math.floor(Math.random() * 100 + 1);
	console.log(target);
	let playerGuess = "";
	let playerGuessNum = 0;
	let numTries = 0;
	let correct = false;

	let guessHistoryArr = [];

	do {
		playerGuess = prompt("Please guess a number between 1-100");

		playerGuessNum = +playerGuess;
		numTries++;
		guessHistoryArr.push(playerGuessNum);
		console.log(guessHistoryArr);
		if (playerGuess === null) {
			return;
		}
		correct = checkGuess(playerGuessNum, target);
	} while (!correct);

	alert("Congrats you've guessed the right number in " + numTries + " tries.");

	function checkGuess(playerGuessNum, target) {
		correct = false;
		if (isNaN(playerGuessNum)) {
			alert("You must enter a number between 1-100");
		} else if (playerGuessNum < 1 || playerGuessNum > 100) {
			alert("You must enter a number between 1-100");
		} else if (playerGuessNum > target) {
			alert(
				"The number you entered is HIGHER than the target number. Here are you previous guesses: " +
					guessHistoryArr.join(", ")
			);
		} else if (playerGuessNum < target) {
			alert(
				"The number you've entered is LOWER than the target number. Here are you previous guesses: " +
					guessHistoryArr.join(", ")
			);
		} else {
			correct = true;
		}

		const difference = Math.abs(playerGuessNum - target);

		// Challenge - Hotter or Colder Range
		if (difference <= 10 && difference >= 1) {
			alert("You're getting warmer!");
		} else if (difference > 10) {
			alert("You're getting colder!");
		} else {
			correct = true;
		}

		// Challenge - Hint System
		if (numTries > 3) {
			alert("Your number is " + target);
		}

		return correct;
	}
}
