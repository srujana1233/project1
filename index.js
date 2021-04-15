var readLineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log
let userName  = readLineSync.question('What is your Name? ')
console.log('\n')
console.log(chalk.red(`Hello ${userName},,Welcome to the quiz!`));
console.log("\n");
let userAge=readLineSync.question(chalk.blue("How old are you? "));
console.log("\n");
if(userAge>=18){
  console.log(chalk.yellow("You are eligible to play this quiz"));
  console.log("\n");
  console.log(chalk.green("Rules for the game:"));
  console.log("\n");
  console.log(chalk.green('1. The are 10 question with 4 options, you need to select one option'))
  console.log("\n");
  console.log(chalk.green('2. You will be awarded 2 Points if it is correct'));
  console.log("\n");
  console.log(chalk.green('3. You will be penalized by 1 point you make a wrong guess'))
  console.log("\n");
  console.log(chalk.green('4. If you win the game there will be prices in online but the score should be above 18') );
  console.log("\n");
  console.log(chalk.green('5. your score will be displayed after answering the questions'))
  console.log(chalk.magenta('lets start the game in 5 seconds'))
  console.log("\n");
  for(i=5;i>0;i--){
    console.log(i);
  }
  console.log(chalk.magenta(`Here is your first      question with options`));
  var questionslist=[
    {
      question :chalk.red( "What is the official language of Iran?"),
      options:['Spanish','Croatian','Persian','Bamana'],
      answer:2
    },
    {
      question : chalk.red("What is the national bird of nepal?"),
      options:['Kiwis','Peacock','Red-crowned cane','Pheasant'],
      answer:3
    },
    {
      question :chalk.red("What is the national tree of India?"),
      options: ['Oak','Ficus','Ginkgo','Mango tree'],
      answer: 1
    },
    {
      question :chalk.red("What is the national game of srilanka?"),
      options:['Soccer','Tabletennis','Baseball',  'Volleyball'],
      answer:3
    },
    {
      question : chalk.red("What is the capital city of finland?"),
      options:['Delhi','Helsinki','Dublin','Ottawa'],
      answer:1
    },
    {
      question :chalk.red( "Which country has highest gold mines?"),
      options:['South Africa','Australia','Russia','Japan'],
      answer:1
    },
    {
      question : chalk.red("Which country has the    longest coastline in the world?"),
      options:['Australia','Canada','America','France'] ,
      answer:1
    },
    {
      question :chalk.red( "which country has the highest land mass in the world?"),
      options:['Russia','China','USA','Australia'],
      answer:0
    },
    {
      question :chalk.red( "Who is the richest man of world?"),
      options:['Warren Buffet','Bill Gates','Ambani','Elon musk'],
      answer:3
    },
    {
      question : chalk.red("What is the national animal of scotland?"),
      options:['Siberian tiger','Cow','Unicorn','Markhor'],
      answer:2
    },
  ]
  let score=0;
  for(i=0;i<questionslist.length;i++){
    var op= questionslist[i].options;
    var opt=readLineSync.keyInSelect(op,questionslist[i].question);
    if(opt===questionslist[i].answer){
      console.log("your answer is correct");
      console.log(`score = ${score+=2}`);
    }else{
      console.log(chalk.blue("Your answer is wrong"));
      console.log(`The correct answer is ${op[questionslist[i].answer]}`);
      console.log(`score = ${score-=1}`);console.log("\n");
    }
  }
  if(score<=0){
    score=0;
  }
  console.log(chalk.cyan(`Your total score is ${score}`));
  if(score>=18){
    console.log(chalk.cyan("Congratulations!!! You have won the coupon..."));
  }else{
    console.log(chalk.cyan(`Sorry your score is ${score} you lost the coupon!!!`));
  }
  console.log(chalk.cyan(`Game completed`));
  console.log(chalk.cyan("Thank you for playing this game"));
}else{
  console.log("You are not eligible to play this game")
}