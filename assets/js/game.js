/**
 * Guide used for creating quiz:
 * https://www.youtube.com/
 * watch?v=zZdQGs62cR8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=5
 */

// Declare constants for elements required to display quiz questions and answer
// choices

// Get p element to display the question
const question = document.querySelector(".question");
// Get choice buttons and convert from NodeList to array 
const choices = Array.from(document.querySelectorAll(".answer-choice"));
console.log(question);
console.log(choices);

// Create variables required for game to function

// Object for the current question
let currentQuestion = {};
// Create delay state for when game is accepting an answer
let acceptingAnswers = true;
// Starting point for score
let score = 0;
// Counter for which question the player is on
let questionCounter = 0;
// Array of available questions. Question is removed once it has been displayed
let availableQuestions = [];

// Questions for Easy Difficulty

// Array of Ojects for the game questions. Contains the question and 3 possible
// answers. Contains key:value pairs for the correct answer and one to remove
// when the 50/50 function is used 
let questionsEasy = [
  {
    question: "The James Bond movie are based on the novels by which British\
    author?",
    choice1: "J. R. R. Tolkien",
    choice2: "Ian Fleming",
    choice3: "George Orwell",
    answer: 2,
    remove: 1
  },
  {
    question: "Which artist sang the theme song 'Skyfall'?",
    choice1: "Adele",
    choice2: "Sam Smith",
    choice3: "Shirley Bassey",
    answer: 1,
    remove: 3
  },
  {
    question: "Which secret service agency does 007 work for?",
    choice1: "NCA",
    choice2: "MI6",
    choice3: "CIA",
    answer: 2,
    remove: 3
  },
  {
    question: "Which actor made his first appearance as James Bond in 1995's\
    'GoldenEye'?",
    choice1: "Sean Bean",
    choice2: "Pierce Brosnan",
    choice3: "Sean Connery",
    answer: 2,
    remove: 1
  },
  {
    question: "What was the first James Bond movie?",
    choice1: "Goldfinger",
    choice2: "Casino Royale",
    choice3: "Dr. No",
    answer: 3,
    remove: 2
  }
];