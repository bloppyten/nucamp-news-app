function getComputerChoice() {
	let random = Math.floor(Math.random() * 3 + 1);

	switch (random) {
		case 1:
			return "rock";
			break;
		case 2:
			return "paper";
			break;
		case 3:
			return "scissors";
			break;
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "rock") {
		return "It's a tie";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		return "You lose!";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		return "You win!";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		return "You win!";
	} else if (playerSelection === "paper" && computerSelection === "paper") {
		return "It's a tie!";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		return "You lose!";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		return "You lose!";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		return "You win!";
	} else if (playerSelection === "scissors" && computerSelection === "scissors") {
		return "It's a tie!";
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;

	while (playerScore < 5 && computerScore < 5) {
		let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
		let computerSelection = getComputerChoice().toLowerCase();

		console.log(`Computer chose: ${computerSelection}`);
		const result = playRound(playerSelection, computerSelection);
		console.log(result);

		if (result === "You win!") {
			playerScore++;
		} else if (result === "You lose!") {
			computerScore++;
		}

		console.log(`Player Score: ${playerScore}`);
		console.log(`Computer Score: ${computerScore}`);
	}

	if (playerScore >= 5) {
		console.log("You win the game!");
	} else {
		console.log("Computer wins the game.");
	}
}
game();
