// // Guide referenced in creation of this quiz:
// // https://simplestepscode.com/javascript-quiz-tutorial/

// // The HTML file includes a simple container for the quiz. It contains the
// // elements necessary for the quiz, namely the containing div itself, a div for
// // both the question and answer selections, a button for the user to submit
// // their answers and finally a div to display the user's score. The content of
// // this quiz will be displayed via JavaScript functions.

// // The questions used for the easy quiz. 

// const questionsEasy = [{
//     question: "The James Bond movies are based on the novels by which British\
//     author?",
//     answers: {
//       A: "J. R. R. Tolkien",
//       B: "Ian Fleming",
//       C: "George Orwell"
//     },
//     correctAnswer: "B"
//   },
//   {
//     question: "Which artist sang the theme song 'Skyfall'?",
//     answers: {
//       A: "Adele",
//       B: "Sam Smith",
//       C: "Shirley Bassey"
//     },
//     correctAnswer: "A"
//   },
//   {
//     question: "Which secret service agency does 007 work for?",
//     answers: {
//       A: "NCA",
//       B: "MI6",
//       C: "CIA"
//     },
//     correctAnswer: "B"
//   },
//   {
//     question: "Which actor made his first appearance as James Bond in 1995's\
//     'GoldenEye'?",
//     answers: {
//       A: "Sean Bean",
//       B: "Pierce Brosnan",
//       C: "Sean Connery"
//     },
//     correctAnswer: "B"
//   },
//   {
//     question: "What was the first James Bond movie?",
//     answers: {
//       A: "Goldfinger",
//       B: "Casino Royale",
//       C: "Dr. No"
//     },
//     correctAnswer: "C"
//   }
// ];

// // 'Get' elements used in the quiz to store as variables

// const quizQuestions = document.getElementById("quiz-questions");
// const submitButton = document.getElementById("submit");
// const quizResults = document.getElementById("quiz-results");

// console.log(quizQuestions);
// console.log(submitButton);
// console.log(quizResults);

// /** 
//  * This function will generate the quiz content. It requires input from the quiz
//  * questions, the container for the question and answers, the submit button and
//  * a container for the results of the quiz. The main function 'createQuiz()' has
//  * helper functions nested inside to perform the actions of their semantic
//  * meaning.
//  */

// generateQuiz(questionsEasy, quizContainer, resultsContainer, submitButton);

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		// we'll need a place to store the output and the answer choices
// 		var output = [];
// 		var answers;

// 		// for each question...
// 		for(var i=0; i<questions.length; i++){
			
// 			// first reset the list of answers
// 			answers = [];

// 			// for each available answer...
// 			for(letter in questions[i].answers){

// 				// ...add an html radio button
// 				answers.push(
// 					'<label>'
// 						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 						+ letter + ': '
// 						+ questions[i].answers[letter]
// 					+ '</label>'
// 				);
// 			}

// 			// add this question and its answers to the output
// 			output.push(
// 				'<div class="question">' + questions[i].question + '</div>'
// 				+ '<div class="answers">' + answers.join('') + '</div>'
// 			);
// 		}

// 		// finally combine our output list into one string of html and put it on the page
// 		quizContainer.innerHTML = output.join('');
// 	}


// 	function showResults(questions, quizContainer, resultsContainer){
		
// 		// gather answer containers from our quiz
// 		var answerContainers = quizContainer.querySelectorAll('.answers');
		
// 		// keep track of user's answers
// 		var userAnswer = '';
// 		var numCorrect = 0;
		
// 		// for each question...
// 		for(var i=0; i<questions.length; i++){

// 			// find selected answer
// 			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
// 			// if answer is correct
// 			if(userAnswer===questions[i].correctAnswer){
// 				// add to the number of correct answers
// 				numCorrect++;
				
// 				// color the answers green
// 				answerContainers[i].style.color = 'lightgreen';
// 			}
// 			// if answer is wrong or blank
// 			else{
// 				// color the answers red
// 				answerContainers[i].style.color = 'red';
// 			}
// 		}

// 		// show number of correct answers out of total
// 		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// 	}

// 	// show questions right away
// 	showQuestions(questions, quizContainer);
	
// 	// on submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}

// }

// // function createQuiz(questions, quizQuestions, submitButton, quizResults) {

// //   /** 
// //    * The function will show the questions. In general, it will show the question,
// //    * as well as its answer choices.
// //    */

// //   function displayQuestions(questions, quizQuestions) {

// //     // Create vars to store the output and answer choices:
// //     let output = [];
// //     let answers;

// //     // For loop to address each question:
// //     for (let i = 0; i < questions.length; i++) {
// //       // Firstly, reset the answers list to empy array:
// //       answers = [];
// //       // For loop to address each available answer:
// //       for (letter in questions[i].answers) {
// //         // Add a radio button for each available answer:
// //         answers.push(
// //           '<label>' +
// //           '<input type="radio" name="question' + i + '" value="' + letter +
// //           '">' + letter + ': ' + questions[i].answers[letter] + '</label>'
// //         );
// //       };
// //       // Add this question and its answers to the output:
// //       output.push(
// //         '<div class="question">' + questions[i].question + '</div>' +
// //         '<div class="answers">' + answers.join('') + '</div>'
// //       );
// //     };
// //     // Combine the output list into one HTML string and put it on the page:
// //     quizQuestions.innerHTML = output.join('');


// //   }
// // };

// // /**
// //  * In this function, it will find the selected answer for each question. It will
// //  * respond according to if the answer is correct or incorrect. It will also show
// //  * the number of correct answers out of the total questions.
// //  */

// // function displayResults(questions, quizQuestions, quizResults) {
// //   // Get the answer containers from the quiz:
// //   let answerContainers = quizQuestions.querySelectorAll(".answers");

// //   // Keep track of user's answers:
// //   let userAnswer = "";
// //   let numCorrect = 0;

// //   // For loop for each question:
// //   for (let i = 0; i < questions.length; i++) {
// //     // Find the selected answer:
// //     userAnswer =
// //     (answerContainers[i].querySelector('input[name=question'+ i +']:checked') ||
// //     {}).value;
// //     // If correct:
// //     if (userAnswer === questions[i].correctAnswer) {
// //       // Increase number of correct answers:
// //       numCorrect++
// //       // Colour answer green:
// //       answerContainers[i].style.color = "#003d00";
// //     } else {
// //       // Colour the answer red:
// //       answerContainers[i].style.color = "#660000";
// //     }
// //   }

// //   // Show the number of correct answers out of the total:
// //   quizResults.innerHTML = numCorrect + "out of" + questions.length + "!";
// // };

// // // Display the questions:
// // displayQuestions(questions, quizQuestions);

// // // Display results where user clicks the submit button:
// // submitButton.onclick = function () {
// //   displayResults(questions, quizQuestions, quizResults);
// // };

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

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(questionsEasy, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
  // we'll need a place to store the output and the answer choices
  var output = [];
  var answers;

  // for each question...
  for(var i=0; i<questions.length; i++){
    
    // first reset the list of answers
    answers = [];

    // for each available answer...
    for(letter in questions[i].answers){

      // ...add an html radio button
      answers.push(
        '<label>'
          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
          + letter + ': '
          + questions[i].answers[letter]
        + '</label>'
      );
    }

    // add this question and its answers to the output
    output.push(
      '<div class="question">' + questions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
    );
  }

  // finally combine our output list into one string of html and put it on the page
  quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer){
  
  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');
  
  // keep track of user's answers
  var userAnswer = '';
  var numCorrect = 0;
  
  // for each question...
  for(var i=0; i<questions.length; i++){

    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
    // if answer is correct
    if(userAnswer===questions[i].correctAnswer){
      // add to the number of correct answers
      numCorrect++;
      
      // color the answers green
      answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[i].style.color = 'red';
    }
  }

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// show questions right away
showQuestions(questions, quizContainer);

// on submit, show results
submitButton.onclick = function(){
  showResults(questions, quizContainer, resultsContainer);
}

}

