// Get all of the answer buttons
let answerButtons = document.querySelectorAll(".answer-btn");

// Store the user's answers
let answers = [];


// Loop through every answer button
for (let button of answerButtons) {

    button.addEventListener("click", function() {

        // Find the question this button belongs to
        let question = button.closest(".question-block");

        // Get all buttons inside that question
        let questionButtons = question.querySelectorAll(".answer-btn");

        // Remove selected from all buttons in this question
        for (let otherButton of questionButtons) {
            otherButton.classList.remove("selected");
        }

        // Add selected to the button that was clicked
        button.classList.add("selected");

        // Get the answer letter
        let answer = button.dataset.answer;

        // Get the question number
        let questionContainer = button.closest(".container");
        let questionNumber = questionContainer.id;

        // Save the answer
        answers[questionNumber] = answer;
    });
}


// Function to display the final result
function displayResult() {

    // Count each answer
    let counts = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    // Go through the saved answers
    for (let question in answers) {
        let answer = answers[question];
        counts[answer]++;
    }


    // Find which answer was selected the most
    let highestAnswer = "A";

    if (counts.B > counts[highestAnswer]) {
        highestAnswer = "B";
    }

    if (counts.C > counts[highestAnswer]) {
        highestAnswer = "C";
    }

    if (counts.D > counts[highestAnswer]) {
        highestAnswer = "D";
    }


    // Decide which superhero matches the answer
    let result = "";

    if (highestAnswer === "A") {
        result = "You are Batman! You are intelligent, strategic, and always prepared.";
    }
    else if (highestAnswer === "B") {
        result = "You are Spider-Man! You are funny, energetic, adaptable, and caring.";
    }
    else if (highestAnswer === "C") {
        result = "You are Superman! You are brave, loyal, dependable, and always willing to help others.";
    }
    else if (highestAnswer === "D") {
        result = "You are Iron Man! You are confident, creative, ambitious, and always full of new ideas.";
    }


    // Display the result on the webpage
    let resultContainer = document.getElementById("result-container");
    let resultText = document.getElementById("result-text");

    resultText.textContent = result;
    resultContainer.style.display = "block";
}


// Get the Show Results button
let showResultButton = document.getElementById("show-result");


// Run displayResult when Show Results is clicked
showResultButton.addEventListener("click", displayResult);