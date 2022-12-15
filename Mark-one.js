var readlineSync = require("readline-sync");

var score = 0;

var highScore = [
  {
    name : "prachi",
    score : 0,
  },
  {
    name : "bunny",
    score : 1,
  },
];

function welcome(){
var userName = readlineSync.question("May i know your name ? \n");
console.log ("welcome to my game ",userName);
console.log(" ");}

var questions = [{
    question : "Where i am from ?\n",
    answer : "delhi"
  },{
    question : "What is my Favouite racing game ?\n",
    answer : "nfs"
  },{
    question : "Who is my favourite music artist ?\n",
    answer : "The weelnd"
  },{
    question : "Am i single ?\n",
    answer : "no"
  },{
    question : "What do i enjoy more bike or car ?\n",
    answer : "bike"
  }];

function play(question, answer){
    var userAnswer = readlineSync.question(question);
    
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
      console.log("you are right");
      score = score + 1;
    } else{
      console.log ("you are wrong");
    }
    console.log("Score = ",score);
    console.log("------------------------");
  }
function game()
  {
    for (var i=0; i<questions.length; i++)
      {
        var currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.answer)
      }
  }

function showScores(){
  console.log("Yay you scored = ",score);
  console.log("Checkout the high score and send me yours too");
  highScore.map(score => console.log(score.name, ":", score.score))
}

welcome();
game();
console.log(" ");
showScores();