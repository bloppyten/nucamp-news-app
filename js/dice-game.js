function rollDice() {
	let goldCoins = 0;

	for (let i = 0; i < 10; i++) {
		const roll = Math.floor(Math.random() * 6 + 1);
		alert("You rolled a " + roll);

		if (roll === 1) {
			alert("Game over, no more rolls");
			break;
		} else if (roll < 5 && roll !== 4) {
			continue;
		} else if (roll === 4 && goldCoins > 0) {
			alert("You've Lost 1 Gold Coin");
			goldCoins = goldCoins - 1;
			alert("You currently have " + goldCoins + " gold coins.");
		} else if (roll === 5) {
			alert("Congrats you win 5 gold coins!");
			goldCoins += roll;
			alert("Your current coin count is " + goldCoins);
		} else if (roll === 6) {
			alert("Congrats you've won 6 gold coins!");
			goldCoins += roll;
			alert("Your current coin count is " + goldCoins);
		}
	}

	alert("You accumulated " + goldCoins + " gold coins");
}
