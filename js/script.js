

var quizQuestionsArray = [
  {
    id: 1,
    question: "Commonly used data-types DO NOT include:",
      a: "Strings",
      b: "Booleans",
      c: "alerts",
      d: "numbers",
    answer: "c: alerts"
  },
  {
    id: 2,
    question: "The condition in an if/else statement is enclosed within ____.",
    a: "quotes",
    b: "curly brackets",
    c: "parentheses",
    d: "square brackets",
  answer: "c: parentheses"
  },
  {
    id: 3,
    question: "Arrays in JavaScript can be used to store?",
    a: "numbers and strings",
    b: "other arrays",
    c: "booleans",
    d: "all of the above",
  answer: "d: all of the above"
  },
  {
    id: 4,
    question: "String values must be enclosed within _______ when being assigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parentheses",
  answer: "c: quotes"
  }
];



//Timer Elements
var startingMinutes = 5;
var time = startingMinutes * 60;
var countDownTimer = document.querySelector('#time-Counter');

//Quiz Elements
var startButton = document.getElementById('start-quiz-button');
var quizContent = document.querySelectorAll('.quiz-content');
var quizQuestions = document.querySelectorAll('.quiz-questions');


console.log(quizQuestions);
console.log("I am here");


//Start Button Event Listener
startButton.addEventListener("click", function(event){
//Quiz Countdown Timer - 5 minutes
var interval = setInterval(startTimer, 1000);
    function startTimer() {
      var minutes = Math.floor(time/60);
      var seconds = time % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;
      countDownTimer.innerHTML = `Time: ${minutes}:${seconds}`;
      time-- 
      if (time < 0){
        clearInterval(interval);
      } 
    }; 
    
    
    addQuestion();

})
//End of the Start Button code



  
 


  

//Hides quiz questions from the page
// for(i = 0; i <quizContent.length; i++){
//   quizContent[i].style.display = 'block';
// }









//Create the quiz questions
function addQuestion(){


  var nums = [15, 15, 14, 14, 13, 12, 12, 11, 11, 11, 28, 28];
  
  for (i = 0; i < arr.length; ++i) {
    arr[i].textContent = nums[i];
  }

  //var score = 0;

 
  // create the question elements
  //var quizQuestions = document.querySelectorAll('.quiz-questions');

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
}


function startQuiz(){
  // timer starts and I am presented with a question
  // need a function call to start the timer

  // need a function call to present the question

  //set display to either none or block*****  
}


/*{ <div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div>
<div class="score"></div> }*/





