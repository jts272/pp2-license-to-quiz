/* jshint esversion: 6 */

// Get elements

let qNum = document.querySelector("#question-number");
let qOf = document.querySelector("#question-of");

let score = document.querySelector("#score");

let question = document.querySelector(".question");

let choiceButtons = document.querySelectorAll(".answer-choice");
let choiceButtonsArray = Array.from(choiceButtons);
console.log(choiceButtons);

let choiceA = document.querySelector(".btn-a");
let choiceB = document.querySelector(".btn-b");
let choiceC = document.querySelector(".btn-c");

let next = document.querySelector(".next");

let questionsMedium = [
  {
    question: 
    "What initials are on the coffin at the beginning of Thunderball?",
    answerA: "A.C",
    answerB: "E.L",
    answerC: "J.B",
    correct: "C"
  },
  {
    question: "What was the first Bond film NOT based on a book?",
    answerA: "Moonraker",
    answerB: "The Spy Who Loved Me",
    answerC: "You Only Live Twice",
    correct: "B"
  }
];

// Guide: https://gamedevacademy.org/javascript-quiz-tutorial/

// This single question is an object. Its index 1 is an array of choices for the
// user.
let singleQuestion = {
  title: "Who was the second actor to portray James Bond in a feature film?",
  alternatives: ["Roger Moore", "Timothy Dalton", "George Lazenby"],
  correctAnswer: 2
};

// This function is 'ready to receive' the placeholder of 'q'. When the function
// is called, I can substitute the q in the function parentheses for the actual
// singleQuestion object as its argument. In other words, the parameters are in
// the function definition and the arguments are in the actual call.
function showQuestion(q) {
  // Display the question text in the question container
  question.textContent = q.title;
  // Display the answer text in 'each' container. See Array.forEach(); syntax
  choiceButtons.forEach(function (element, index) {
    element.textContent = q.alternatives[index];
  });
};

// The actual function call. Where the function definition would have used the
// placeholder of 'q', it will use the object assigned in the argument.
showQuestion(singleQuestion);
