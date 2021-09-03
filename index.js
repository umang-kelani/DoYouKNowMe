// Game to know how well you know me?

var readLineSync = require('readline-sync');

var userName = readLineSync.question("Please enter your name: ")

console.log("Hello " +userName +", " +"Welcome to Umang's game")

var score = 0;

function myGame(question,answer)
{
  var userAns = readLineSync.question(question)
  if (userAns===answer)
  {
    console.log("Your answer is correct")
    score = score+1;
  }
  else
  {
    console.log("Your answer is wrong")
    score = score-1;
  }
console.log("Your current score is: "+score)
}

var questions = [
  {
    question: "What is my birth year? ",
    answer: "1995"
  },
  {
    question: "In which city I stay? ",
    answer: "Pune"
  },
  {
    question: "Where do I work? ",
    answer: "Accenture"
  },
  {
    question: "What is my favourite sport? ",
    answer: "Football"
  }
]

var highScores = [
  {
    user: "Umang",
    score: 4
  },
  {
    user: "Amit",
    score: 3
  },
  {
    user: "Vishwajeet",
    score: 2
  }
]

for (i=0;i<questions.length;i++)
{
  currentQuestion = questions[i]
  myGame(currentQuestion.question,currentQuestion.answer)
}

console.log("Congratulations!! Your total score is: " +score+"\n")

console.log("Following are the highscores for this game:")
for(i=0;i<highScores.length;i++)
{
  currentScore = highScores[i]
  console.log("User: "+currentScore.user +" Score: " +currentScore.score)
  
}
console.log("\n")
console.log("Did you beat that score? If yes, send me a screenshot so that I can update the database accordingly.")