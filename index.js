const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("Hello User!! Kindly enter your name?? ");
console.log(chalk.magenta("\nWelcome "+chalk.italic( userName)+ " Let's play the quiz!!" ));
console.log(chalk.blue.bold("\n**** HOW MUCH DO YOU KNOW ABOUT SRI HARSHA ****\n"));

console.log(chalk.bgGreen("<<< Here you go >>>\n"));

var highScores = [
  {
    name: "Sri Harsha",
    score: "7"
  },
  {
    name: "Sunil",
    score: "6"
  }
]

 function game(question,answer){
  var userAnswer =readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.yellow("you are right :)"));
    score = score+1;
  }else{
    console.log(chalk.red("you are wrong :("));
    console.log("the right answer is:" + answer);
  }
  console.log("Your current score is: " + score);
  console.log("---------------------------------")
}

var quesnAns = [
  {
  question: chalk.green("Where do I live?? "),
  answer: "Hassan"
  },
  {
  question : chalk.green("Where did I graduated from?? "),
  answer: "BIT"
  },
  {
    question: chalk.green("Who's my favorite Hero??  "),
    answer:"Yash"
  },
  {
    question:chalk.green("Which is my birthyear?? "),
    answer:"1998"
  },
  {
    question:chalk.green("Which is my favorite outdoor activity?? "),
    answer: "Trekking"
  },
  {
    question:chalk.green("Which is my favorite comedy show?? "),
    answer: "Dhee"
  },
  {
    question:chalk.green("Which is my favorite web series?? "),
    answer: "Money Heist"
  }

]

for(i=0;i<quesnAns.length;i++){
  var currentquestion = quesnAns[i];
game(currentquestion.question,currentquestion.answer)

}

console.log("YAY!! " + userName + " you have successfully completed the quiz...\n");
console.log(chalk.bgCyan(" Your final score is: " + score));

console.log("----------------------")
console.log("Current HighScores Are ")
for(var i=0 ; i<highScores.length ; i++){
  var currentHighScore = highScores[i];
 console.log(currentHighScore.name + ":" + currentHighScore.score)
}

console.log("----------------------")
console.log("If you scored more than the current highscores, kindly inform me .")
