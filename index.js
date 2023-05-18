// Required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const emailValidator = require('email-validator');

// Questions to ask user for README file for project creation
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (value) => {
            if (value) { return true } 
            else { return 'Please enter your project title.' }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
        validate: (value) => {
            if (value) { return true } 
            else { return 'Please enter a description.' }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are installation instructions?',
        validate: (value) => {
            if (value) { return true } 
            else { return 'Please enter instructions.' }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
        validate: (value) => {
            if (value) { return true } 
            else { return 'Please enter usage information.' }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for this project?',
        validate: (value) => {
            if (value) { return true } 
            else { return 'Please enter your contribution guidelines.' }
        },
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
        validate: (value) => {
            if (value) { return true } 
            else { return 'Please enter testing instructions.' }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project?',
        choices: ["MIT", "ISC", "GNU GPLv3", "Apache License 2.0"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: (value) => {
            if (value) { return true } 
            else { return 'Please enter your username.' }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: "What email would you like to use so that others can reach out you about question on this project?",
        validate: (value) => {
            if (emailValidator.validate(value)) { return true }
            else { return 'Please enter a valid email address' }
        },
    }
];

// Creates README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Succesfully created README.md!')
    )
}

// Initializes app by prompting user input for questions and then creates associated README.md and passes user input to generateMarkdown to then fill and format README based on user input
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data));
        })
}

// Calls for app initializing
init();
