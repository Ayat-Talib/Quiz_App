import inquirer from "inquirer";
import axios from "axios";
import chalk from "chalk";
const greet = await inquirer.prompt({
    name: "greet",
    type: 'input',
    message: `Hye Dear!! What's Your good name ? \n`,
});
console.log(`hye ${greet.greet}, Let's start the Quiz \n`);
// Funstion to Fetch Question from API
async function fetchQuestions() {
    try {
        let response = await axios.get("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple");
        return response.data.results;
    }
    catch (error) {
        console.log(chalk.red('Failed to fetch questions from the API.'));
        throw error;
    }
}
// Function to Start Quiz
async function startQuiz() {
    let questions = await fetchQuestions();
    if (questions.length == 0) {
        console.log('No Question is Available');
        return;
    }
    let score = 0;
    for (const [index, question] of questions.entries()) {
        const answers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "response",
                message: chalk.blue(`${index + 1}. ${question.question}`),
                choices: answers
            }
        ]);
        if (answer.response === question.correct_answer) {
            console.log(chalk.green('Correct!'));
            score += 1;
        }
        else {
            console.log(chalk.red('Wrong!'));
        }
    }
    console.log(chalk.yellow(`You scored ${score} out of ${questions.length}`));
}
startQuiz();
