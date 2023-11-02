// function to select random color
const randomColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorSelected = ["#"];
const container = document.getElementById("container");
const colorCode = document.getElementById("colorCode");
const colorBtn = document.getElementById("colorBtn");
const resetBtn = document.getElementById("resetBtn");

// Event listener that displays randomly generated color in both background and text
colorBtn.addEventListener("click", () => {
	const color = getRandom();
	container.style.backgroundColor = color;
	colorCode.textContent = color;
});

// On Mouseover color change button change to yellow
colorBtn.addEventListener("mouseover", () => {
	colorBtn.style.backgroundColor = "yellow";
});
// On Mouseout color change back to default
colorBtn.addEventListener("mouseout", () => {
	colorBtn.style.backgroundColor = "";
});

resetBtn.addEventListener("click", () => {
	container.style.backgroundColor = "#FFFFFF";
	colorCode.textContent = "#FFFFFF";
	colorSelected.length = 1;
});

function getRandom() {
	colorSelected.length = 1;
	for (let i = 1; i < 7; i++) {
		const random = randomColors[Math.floor(Math.random() * randomColors.length)];
		colorSelected.push(random);
	}

	const concatStr = colorSelected.join("");
	return concatStr;
}
