// Declare constants for elements required to display quiz questions and answer
// choices

// Get p element to display the question
const question = document.querySelector(".question");
// Get choice buttons and convert from NodeList to array 
const choices = Array.from(document.querySelectorAll(".answer-choice"));
console.log(question);
console.log(choices);
