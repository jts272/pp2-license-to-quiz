/* jshint esversion: 6 */

// Get elements

let qNum = document.querySelector("#question-number");
let qOf = document.querySelector("#question-of");

let score = document.querySelector("#score");

let question = document.querySelector(".question");

let choiceButtons = document.querySelectorAll(".answer-choice");
let choiceButtonsArray = Array.from(choiceButtons);
// console.log(choiceButtons);

let choiceA = document.querySelector(".btn-a");
let choiceB = document.querySelector(".btn-b");
let choiceC = document.querySelector(".btn-c");

let next = document.querySelector(".next");

let questionsMedium = [
  {
    title: "What initials are on the coffin at the beginning of Thunderball?",
    alternatives: ["A.C", "E.L", "J.B"],
    correctAnswer: 2
  },
  {
    title: "What was the first Bond film NOT based on a book?",
    alternatives: ["Moonraker", "The Spy Who Loved Me", "You Only Live Twice"],
    correctAnswer: 1
  },
  {
    title: "Who is the villain in 'The Man with the Golden Gun?",
    alternatives: ["Scaramanga", "Nick Nack", "Baron Samedi"],
    correctAnswer: 0
  },
  {
    title: "How did James Bond's parents die?",
    alternatives: ["Car crash", "Armed robbery shooting", "Climbing accident"],
    correctAnswer: 2
  },
  {
    title: "What type of car does Bond drive in Moonraker?",
    alternatives: ["Lotus", "Aston Martin", "None"],
    correctAnswer: 2
  },
  {
    title: "What alias does Bond use in 'SPECTRE'?",
    alternatives: ["Charles Darwin", "Mickey Mouse", "Felix Leiter"],
    correctAnswer: 1
  },
  {
    title: "What was the initial title for 'License to Kill'?",
    alternatives: ["License to Thrill", "License to Spy", "License Revoked"],
    correctAnswer: 2
  },
  {
    title: "Which of these titles was NOT produced by Eon Productions?",
    alternatives: ["Never Say Never Again", "Thunderball", "Live and Let Die"],
    correctAnswer: 0
  },
  {
    title: "For which film did Sean Connery return?",
    alternatives: ["Diamonds are Forever", "Goldfinger", "Octopussy"],
    correctAnswer: 0
  },
  {
    title: "Which children's song featured in the opening of 'Dr. No'?",
    alternatives: ["Baa Baa Black Sheep", "Jack and Jill", "Three Blind Mice"],
    correctAnswer: 2
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

// Create Object for game logic, where the functions become methods of the
// object.
let app = {

  /*
  This function adds the event listeners for clicks only once upon game start.
  The forEach method from the showQuestion function can be re-used to add the 
  event listeners to each element. bind(this) is used to ensure the context of
  'this' is not lost after the forEach method.
  */
  startGame: function () {
    // Add event listeners to the choice buttons
    choiceButtons.forEach(function (element, index) {
      element.addEventListener("click", function () { 
        console.log("Check Correct Answer");
        // Call the checkAnswer method and pass in the index of choiceButtons
        this.checkAnswer(index);
      }.bind(this));
    }.bind(this));
    // 'this' refers to the 'app' object. See below that showQuestion is now a
    // method of the app object.
    this.showQuestion(singleQuestion);
  },

  /*
  This function is 'ready to receive' the placeholder of 'q'. When the function
  is called, I can substitute the q in the function parentheses for the actual
  singleQuestion object as its argument. In other words, the parameters are in
  the function definition and the arguments are in the actual call.
  */
  showQuestion: function (q) {
    // Keep track of the current question by storing it in the context of the
    // app object
    this.currentQuestion = q;
    // Display the question text in the question container
    question.textContent = q.title;
    // Display the answer text in 'each' container. See Array.forEach(); syntax
    choiceButtons.forEach(function (element, index) {
      element.textContent = q.alternatives[index];
    });

  },

  /*
  This is function can now be used outside of the startGame function, which is
  only run once at the start of the game. The currentQuestion has been stored in
  'q' inside the showQuestion function. The 'q' from the showQuestion parameter
  is now the question object passed in to the function call in the startGame
  method. From here, I can access its correctAnswer property from the original
  object. The userSelected placeholder takes the checkAnswer(index) from the
  startGame method.
   */
  checkAnswer: function(userSelected) {
    // This checks to see if the value of the correctAnswer in the question
    // array matches the value of the index of the user selected button
    if (this.currentQuestion.correctAnswer == userSelected) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }

  }

};

// Start game function is now a method of the app object and is called as shown
// here
app.startGame();