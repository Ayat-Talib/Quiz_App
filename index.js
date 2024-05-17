import inquirer from 'inquirer';
import chalk from 'chalk';
const Quiz = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: chalk.black('What is your name? ')
    },
    {
        type: 'list',
        name: 'Question1',
        message: 'What is the capital of France?',
        choices: ['Berlin', 'Madrid', 'Paris', 'Lisbon']
    },
    {
        type: 'list',
        name: 'Question2',
        message: 'Which planet is known as the Red Planet?',
        choices: ['Earth', 'Mars', 'Jupiter', 'Venus']
    },
    {
        type: 'list',
        name: 'Question3',
        message: 'What is the largest ocean on Earth?',
        choices: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean']
    },
    {
        type: 'list',
        name: 'Question4',
        message: 'Who wrote "Hamlet"?',
        choices: ['Charles Dickens', 'J.K. Rowling', 'William Shakespeare', 'Mark Twain']
    },
    {
        type: 'list',
        name: 'Question5',
        message: 'What is the smallest unit of life?',
        choices: ['Organ', 'Tissue', 'Cell', 'Atom']
    }
]);
let score = 0;
if (Quiz.Question1 === 'Paris') {
    console.log(chalk.green('Correct!'));
    score += 1;
}
else {
    console.log(chalk.red('OOPS, Wrong!'));
}
if (Quiz.Question2 === 'Mars') {
    console.log(chalk.green('Correct!'));
    score += 1;
}
else {
    console.log(chalk.red('OOPS, Wrong!'));
}
if (Quiz.Question3 === 'Pacific Ocean') {
    console.log(chalk.green('Correct!'));
    score += 1;
}
else {
    console.log(chalk.red('OOPS, Wrong!'));
}
if (Quiz.Question4 === 'William Shakespeare') {
    console.log(chalk.green('Correct!'));
    score += 1;
}
else {
    console.log(chalk.red('OOPS, Wrong!'));
}
if (Quiz.Question5 === 'Cell') {
    console.log(chalk.green('Correct!'));
    score += 1;
}
else {
    console.log(chalk.red('OOPS, Wrong!'));
}
console.log(chalk.blue(`You scored ${score}/5`));
