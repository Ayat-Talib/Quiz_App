#! /usr/bin/env node 
import inquirer from "inquirer";
import axios from "axios";
import  chalk  from "chalk";

// Defines the structure of a quiz question object.
interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

// Greeting Variable 
const greet= await inquirer.prompt({
    name: "greet",
    type:'input',
    message: `Hye Dear!! What's Your good name ? \n`,
})

console.log (`hye ${greet.greet}, Let's start the Quiz \n`)

// Funstion to Fetch Questions from API
async function fetchQuestions(): Promise<Question[]> {
    try{
        //If the request is successful, it returns the array of quiz questions (response.data.results).
        let response = await axios.get("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
        return response.data.results;
    }
    catch(error){
        console.log(chalk.red('Failed to fetch questions from the API.'))
        throw error;
    }
    
}
// Function to Start Quiz

async function startQuiz() {

    // Calls fetchQuestions to get the questions from the API.
    let questions = await fetchQuestions();
    
    if (questions.length == 0 ){
        console.log ('No Question is Available')
        return;
    }
    let score = 0;

    // terates over each question using questions.entries(), which provides both the index and the quiz question.
     for (const [index, question] of questions.entries()){

        // Combines the correct answer and incorrect answers, then shuffles them using sort(() => Math.random() - 0.5) to randomize the order.
        const answers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random()- 0.5)
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "response",
            message: chalk.blue(`${index + 1}. ${question.question}`),
            choices: answers
        }
    ]);
    if (answer.response === question.correct_answer){
        console.log(chalk.green('Correct!'));
        score += 1;
    }
    else {
        console.log(chalk.red('Wrong!'));
    }
    }
    console.log(chalk.yellow(`You scored ${score} out of ${questions.length}`));
    }
    //Call the start Quiz Function

startQuiz()