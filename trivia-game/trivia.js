const questionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");
const feedbackDiv = document.getElementById("feedback");
let currentQuestion = null;
const questionBtn = document.getElementById("questionBtn");
const answerBtn = document.getElementById("answerBtn");

function getTriviaQuestion() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Code to fetch random trivia
			const index = Math.floor(Math.random() * questions.length); // Get a random number
			const question = questions[index]; // use the random number as an index to get a random question from the array of questions
			if (index >= questions.length) {
				//handle potential errors
				reject("An error occured while fetching the trivia question");
			} else {
				resolve(question); //resolve the promise
			}
		}, 1000); //Delay for 1 second
	});
}

function displayQuestion(triviaQuestion) {
	questionDiv.textContent = triviaQuestion.question; //give new content to the div
	answerDiv.value = ""; //reset the answer field
	feedbackDiv.textContent = ""; //reset the feedback loop
}

questionBtn.addEventListener("click", () => {
	getTriviaQuestion()
		.then((question) => {
			//get a random question
			currentQuestion = question; //update the currentQuestion variable
			displayQuestion(question); //pass the question to the displayQuestion function
		})
		.catch((error) => {
			console.error(error); //log any errors
		});
});

answerBtn.addEventListener("click", () => {
	const userAnswer = answerDiv.value.trim().toLowerCase();
	console.log(userAnswer, currentQuestion.answer);
	if (currentQuestion && userAnswer === currentQuestion.answer.toLowerCase()) {
		feedbackDiv.style.color = "green";
		feedbackMessage = "Great job your answer is correct";
	} else {
		feedbackDiv.style.color = "red";
		feedbackMessage = `Sorry, that is incorrect. the correct answer is "#{currentQuestion.answer}". try another questions!`;
	}
	feedbackDiv.textContent = feedbackMessage;
});
