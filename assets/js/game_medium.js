/* jshint esversion: 6 */

// Get elements

let qNum = document.querySelector("#question-number");
let qOf = document.querySelector("#question-of");

let score = document.querySelector("#score");

let question = document.querySelector(".question");

let choiceButtons = document.querySelectorAll(".answer-choice");
let choiceButtonsArray = Array.from(choiceButtons);

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

let singleQuestion = {
  title: "Who was the second actor to portray James Bond in a feature film?",
  alternatives: ["Roger Moore", "Timothy Dalton", "George Lazenby"],
  correctAnswer: 2
};
