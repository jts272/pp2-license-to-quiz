/* jshint esversion:6 */
/* jshint multistr: true */

// Guide referenced in creation of this quiz:
// https://simplestepscode.com/javascript-quiz-tutorial/

// The HTML file includes a simple container for the quiz. It contains the
// elements necessary for the quiz, namely the containing div itself, a div for
// both the question and answer selections, a button for the user to submit
// their answers and finally a div to display the user's score. The content of
// this quiz will be displayed via JavaScript functions.

// The questions used for the easy quiz:

const questionsEasy = [{
  question: "The James Bond movies are based on the novels by which British\
author?",
  answers: {
    A: "J. R. R. Tolkien",
    B: "Ian Fleming",
    C: "George Orwell"
  },
  correctAnswer: "B"
},
{
  question: "Which artist sang the theme song 'Skyfall'?",
  answers: {
    A: "Adele",
    B: "Sam Smith",
    C: "Shirley Bassey"
  },
  correctAnswer: "A"
},
{
  question: "Which secret service agency does 007 work for?",
  answers: {
    A: "NCA",
    B: "MI6",
    C: "CIA"
  },
  correctAnswer: "B"
},
{
  question: "Which actor made his first appearance as James Bond in 1995's\
'GoldenEye'?",
  answers: {
    A: "Sean Bean",
    B: "Pierce Brosnan",
    C: "Sean Connery"
  },
  correctAnswer: "B"
},
{
  question: "What was the first James Bond movie?",
  answers: {
    A: "Goldfinger",
    B: "Casino Royale",
    C: "Dr. No"
  },
  correctAnswer: "C"
}
];

// 'Get' elements used in the quiz to store as variables

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

/** 
* This function will generate the quiz content. It requires input from the quiz
* questions, the container for the question and answers, the submit button and
* a container for the results of the quiz. The main function 'createQuiz()' has
* helper functions nested inside to perform the actions of their semantic
* meaning.
*/

generateQuiz(questionsEasy, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer) {
  // Vars to store the output and answer choices
  let output = [];
  let answers;

  // For loop to address each question
  for (let i = 0; i < questions.length; i++) {

    // Reset the list of answers
    answers = [];

    // For each available answer
    for (let letter in questions[i].answers) {

      // Add a radio button in HTML
      if ( answers.push(
        '<label>' +
        '<input type="radio" name="question' + i + '" value="' + letter +
        '">' + letter + ': ' + questions[i].answers[letter] + '</label>'
      ));
    }

    // Add the question and its answers to the output
    output.push(
      '<div class="question">' + questions[i].question + '</div>' +
      '<div class="answers">' + answers.join(' ') + '</div>'
    );
  }

  // Combine the output list into on string of HTML
  quizContainer.innerHTML = output.join(' ');
}

function showResults(questions, quizContainer, resultsContainer) {

  // Get the answer containers from the quiz
  let answerContainers = quizContainer.querySelectorAll('.answers');

  // Keep track of user's answers
  let userAnswer = '';
  let numCorrect = 0;

  // For loop to address each question
  for (let i = 0; i < questions.length; i++) {

    // Find the selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question' +
    i + ']:checked') || {}).value;

    // If the answer is correct
    if (userAnswer === questions[i].correctAnswer) {
      // Increase the counter for correct answers
      numCorrect++;

      // Colour them green
      answerContainers[i].style.color = "#003d00";
    }
    // If the answer is wrong or not submitted
    else {
      // Colour them red
      answerContainers[i].style.color = "#660000";
    }
  }

  // Show the number of correct answers out of the total questions
  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// Show questions function call
showQuestions(questions, quizContainer);

// Show the results when the submit button is clicked
submitButton.onclick = function () {
  showResults(questions, quizContainer, resultsContainer);
};

}