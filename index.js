const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your project title.' }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter a description.' }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are installation instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter instructions.' }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter usage information.' }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your contribution guidelines.' }
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter testing instructions.' }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ["MIT", "ISC", "GNU GPLv3", "Apache License 2.0"],
        validate: (value) => {
            if (value) { return true } else { return 'Please choose a license.' }
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {
            if (value) { return true } else { return 'Please enter your username.' }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: "What email would you like to use so that others can reach out you about question on this project?",
        validate: (value) => {
            if (emailValidator.validate(value)) {
                return true
            } else { return 'Please enter a valid email address' }
        },
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            fs.writeFile("README.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();
