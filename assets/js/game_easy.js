// Guide referenced in creation of this quiz:
// https://simplestepscode.com/javascript-quiz-tutorial/

// The HTML file includes a simple container for the quiz. It contains the
// elements necessary for the quiz, namely the containing div itself, a div for
// both the question and answer selections, a button for the user to submit
// their answers and finally a div to display the user's score. The content of
// this quiz will be displayed via JavaScript functions.

/** 
 * This function will generate the quiz content. It requires input from the quiz
 * questions, the container for the question and answers, the submit button and
 * a container for the results of the quiz. The main function 'createQuiz()' has
 * helper functions nested inside to perform the actions of their semantic
 * meaning.
 */

function createQuiz(questions, quizQuestions, submitButton, quizResults) {

  function displayQuestions(questions, quizQuestions) {
    // code goes here
  };

  function displayResults(questions, quizQuestions, quizResults) {
    // code goes here
  };

  // Display the questions
  displayQuestions(questions, quizQuestions);

  // Display results where user clicks the submit button
  submitButton.onclick = function () {
    displayResults(questions, quizQuestions, quizResults);
  };
};