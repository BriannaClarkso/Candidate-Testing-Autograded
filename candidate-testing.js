const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];



function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for(let i = 0; i < questions.length; i++){
  candidateAnswers[i] = input.question(questions[i]);
  };

};

function gradeQuiz(candidateAnswers) {
  
  let numOfCorrectAnswers = 0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  for(let i = 0; i < candidateAnswers.length; i++){
    if ((correctAnswers[i]).toLowerCase() === (candidateAnswers[i]).toLowerCase()){
      numOfCorrectAnswers += 1
    }

     console.log(`${i+1} ${questions[i]}`);
      console.log(`Candidate's response is ${candidateAnswers[i]} and the correct response was ${correctAnswers[i]}`);  
    
  }


  let grade = (numOfCorrectAnswers / questions.length) * 100;  

  if (grade >= 80){
    console.log(`Congrulations, you have passed with a ${grade}!`);
  } else {
    console.log(`You have failed with a ${grade}, better luck next time.`)
  }


  return grade;
 }


// Calculate the candidate’s score as a percentage,





function runProgram() {
  
  askForName();
      console.log("Greetings " + candidateName );
  
  // let answersAndQuestions = "";

  for(let i = 0; i < correctAnswers.length; i++){
    
    askQuestion();
    gradeQuiz(this.candidateAnswers);

    return;

   } 

}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};