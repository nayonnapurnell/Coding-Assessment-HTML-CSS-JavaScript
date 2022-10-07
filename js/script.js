//Timer Elements
var startingMinutes = 5;
var time = startingMinutes * 60;
var countDownTimer = document.querySelector('#time-Counter');

//Quiz Elements
var quizHomePage = document.querySelector('.quiz-home-page')
var startButton = document.getElementById('start-quiz-button');
var quizElements = document.getElementById('quiz');
var quizContainer = document.querySelector('.quiz-content');
quizContainer.style.color = "blue";
var quizQuestions = document.getElementById('quiz-question');
var answerElements = document.querySelectorAll('.answer');
var a_answerText = document.getElementById('a_answerText');
var b_answerText = document.getElementById('b_answerText');
var c_answerText = document.getElementById('c_answerText');
var d_answerText = document.getElementById('d_answerText');
var submitButton = document.getElementById('submit-quiz-button');
var scoreHistory = document.getElementByClassName('score-history');


//Quiz Questions
var quizQuestionsArray = [
  {
    question: "Commonly used data-types DO NOT include:",
      a: "Strings",
      b: "Booleans",
      c: "alerts",
      d: "numbers",
    answer: "c: alerts"
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    a: "quotes",
    b: "curly brackets",
    c: "parentheses",
    d: "square brackets",
  answer: "c: parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store?",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
  answer: "d: all of the above"
  },
  {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parentheses",
  answer: "c: quotes"
  }
];

/*showQuiz function*/
var currentQuiz = 0;
function showQuiz(){
  quizContainer.style.display = "block";
  var currentQuestion = quizQuestionsArray[currentQuiz];
  quizQuestions.innerText = currentQuestion.question;
  a_answerText.innerText = currentQuestion.a;
  b_answerText.innerText = currentQuestion.b;
  c_answerText.innerText = currentQuestion.c;
  d_answerText.innerText = currentQuestion.d;
}


//Start Button Event Listener
startButton.addEventListener("click", function(event){

  //Quiz Countdown Timer - 5 minutes
var interval = setInterval(startTimer, 1000);
    function startTimer() {    
      var minutes = Math.floor(time/60);
      var seconds = time % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds; 
      countDownTimer.innerText = `Time: ${minutes}:${seconds}`;
      if (time === 0){
        clearInterval(interval);
      } 
      time --;
    }; 
    
    quizHomePage.style.display = "none";
    showQuiz();
    submitButton.style.display = "none";
    scoreHistory.style.display = "none";
})
//End of the Start Button code


//Function to capture the selected answer
function getSelectedAnswer(){


}

//Selected Answer Event Listener
answerElements.addEventListener('click', getSelectedAnswer);




//Submit Button Event Listener
submitButton.addEventListener("click", function(event){
 //User selects an answer
//User selects the submit button
//answer is stored in the cache

})




  
 


  













  //var score = 0;

 
  // create the question elements
 

  // modify the text/attributes
  // modify one of the attributes to say right or wrong

  // append all elements to something on the page

  // for all the buttons, add event listener

    // WHEN I answer a question
    // if answered correctly
    // add points
    // show as correct
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // show as incorrect

    // after the answer, 
    // THEN I am presented with another question
    // need a function call to present the question

    // if no other questions,
    // go to highscore screen








