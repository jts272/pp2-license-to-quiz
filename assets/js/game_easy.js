/* jshint esversion: 6 */

// Get elements

let gameContainer = document.querySelector(".game-container");

let qNum = document.querySelector("#question-number");
let qOf = document.querySelector("#question-of");

let score = document.querySelector(".score");

let question = document.querySelector(".question");

let choiceButtons = document.querySelectorAll(".answer-choice");

let userFeedback = document.querySelector(".user-feedback");

let questionsEasy = [{
    title: "The James Bond movies are based on the novels by which British \
    author?",
    alternatives: ["J. R. R. Tolkien", "Ian Fleming", "George Orwell"],
    correctAnswer: 1
  },
  {
    title: "Which artist sang the theme song 'Skyfall'?",
    alternatives: ["Adele", "Sam Smith", "Shirley Bassey"],
    correctAnswer: 0
  },
  {
    title: "Which secret service agency does 007 work for?",
    alternatives: ["NCA", "MI6", "CIA"],
    correctAnswer: 1
  },
  {
    title: "Which actor made his first appearance as James Bond in 1995's\
  'GoldenEye'?",
    alternatives: ["Sean Bean", "Pierce Brosnan", "Sean Connery"],
    correctAnswer: 1
  },
  {
    title: "What was the first James Bond movie?",
    alternatives: ["Goldfinger", "Casino Royale", "Dr. No"],
    correctAnswer: 2
  }
];

let questionsMedium = [{
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
    // Create var to store the current position, initialized to 0
    this.currentPosition = 0;
    // Create var to store the current score, initialized to 0
    this.currentScore = 0;
    // Dynamically display the number of questions for quiz difficulty

    qOf.textContent = questionsEasy.length;

    // Add event listeners to the choice buttons
    choiceButtons.forEach(function (element, index) {
      element.addEventListener("click", function () {
        console.log("Check Correct Answer");
        // Call the checkAnswer method and pass in the index of choiceButtons
        this.checkAnswer(index);
        // bind instances allow methods to be borrowed between objects
      }.bind(this));
    }.bind(this));
    // Call to update the score on game start. It is 'updated' to its initial
    // value of 0 inside this startGame method
    this.updateScore();
    // 'this' refers to the 'app' object. See below that showQuestion is now a
    // method of the app object. The questionsEasy is given the index of 0,
    // which it gets from the var at the top of this method. Its value is
    // increased when the increasePosition method is called from inside the
    // checkAnswer method
    this.showQuestion(questionsEasy[this.currentPosition]);

  },

  /*
  This function is 'ready to receive' the placeholder of 'q'. When the function
  is called, I can substitute the q in the function parentheses for the actual
  singleQuestion object as its argument. In other words, the parameters are in
  the function definition and the arguments are in the actual call.
  */
  showQuestion: function (q) {
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
  checkAnswer: function (userSelected) {
    // Create local var for the current question, which comes from the
    // startGame method that gets incremented.
    let currentQuestion = questionsEasy[this.currentPosition];
    // This checks to see if the value of the correctAnswer in the question
    // array matches the value of the index of the user selected button
    if (currentQuestion.correctAnswer == userSelected) {
      console.log("Correct!");
      this.currentScore += 100;
      // Call the user feedback method when correct. Note the use of booleans
      // which relate to the isCorrect argument in the method declaration
      this.showFeedback(true);
    } else {
      console.log("Incorrect!");
      // Call the user feedback method when incorrect
      this.showFeedback(false);
    }
    // After checking the answer, refresh the current score by calling the
    // appropriate method
    this.updateScore();
    // After checking the answer, increase the value of currentPosition from the
    // startGame method, by calling the increasePosition method from below
    this.increasePosition();
    // Then, show the next question, after the above call increases position.
    // This is simply copied from the startGame function, which the method
    // directly above increments by 1
    this.showQuestion(questionsEasy[this.currentPosition]);

  },

  /*
  This method will increment the currentPosition value by 1. It will be called
  each time the checkAnswer method is used. An if statement is included to
  signal the end of the game when the current position is the same as the number
  of questions in the array. Also resets the current position back to 0.
  */
  increasePosition: function () {
    this.currentPosition++;
    // This simply displays the array number plus one to make sense to the user
    qNum.textContent = this.currentPosition + 1;


    // NTS: Check if the 'questionsEasy' can be changed with placeholder in
    // case I want to use a different question array!

    if (this.currentPosition == questionsEasy.length) {
      // Hide the game container upon game completion
      gameContainer.classList.add("hide");
      // Show score screen
      this.showScoreScreen();
      // Alert the final game score
      alert(`Game Over! You Scored ${this.currentScore} points!`);
      this.currentPosition = 0;
      // Fix the question counter going above the amount of questions
      qNum.textContent = "1";
      // Fix the score not resetting on automatic game restart
      score.textContent = "0";
      this.currentScore = 0;
    }


  },

  /*
  This method will show the updated score to the user. The score DOM element was
  declared globally at the top of the script and is used here to modify its text
  content.
  */

  updateScore: function () {
    // Set score element to the value of the currentScore var
    score.textContent = `Score: ${this.currentScore}`;
    // Set the question number element to the array index + 1
    qNum.textContent = this.currentPosition + 1;
    console.log(this.currentPosition);
  },

  /*
  This method will give feedback to the user when they answer a question. The
  result will vary depending on if the answer was correct or not. The method is
  called with a true or false value in the if statement of checkAnswer. If the
  answer is incorrect, the text content of the correct answer will be shown to
  the user. This is done by getting the current question, the index of its
  correct answer, then finally its text content. The current question code is
  simply reused from the checkAnswer method.
  */

  showFeedback: function (isCorrect) {
    // Create empty string for the user feedback result p element
    let result = "";
    // Checks if answer is correct or not, based on the if statement in the
    // checkAnswer method.
    if (isCorrect) {
      result = "Correct!";
    } else {
      // Get the current question
      let currentQuestion = questionsEasy[this.currentPosition];
      // Get the correct answer's index and store as local var
      let currentQuestionCorrectIndex = currentQuestion.correctAnswer;
      // Get the text content of the correct answer and store as local var
      let currentQuestionCorrectText =
        currentQuestion.alternatives[currentQuestionCorrectIndex];
        // Assign text with template string to the user feedback p element
        result = `Incorrect! The answer was: '${currentQuestionCorrectText}'`;
      
    }
    // Assign the text content of the result element to the value based on the
    // if statement
    userFeedback.textContent = result;

  },

  showScoreScreen: function() {
    // Create var for score screen div
    let scoreScreen = `
      <div class="score-screen text-center">
        <h2>Mission Over!</h2>
        <p>Your final score was ${this.currentScore}!</p>
        <a href="game_select.html" class="button link-default-reset">
          Mission Select
        </a>
        <a href="index.html" class="button link-default-reset">Home</a>
      
      </div>
    `;
    // Get main background element
    let background = document.querySelector(".background");
    // Inject the above HTML onto the background element
    background.innerHTML = scoreScreen;

  }
};

// Start game function is now a method of the app object and is called as shown
// here
app.startGame();