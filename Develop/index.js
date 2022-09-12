// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const ulil = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        default: 'Dhabi966',
    },  
    {
        type: 'input',
        message: 'What is your GitHub repo?',
        name: 'repo',
        default: 'JimsREADMEGen',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        default: 'Project Title',
    },
    {
        type: 'input',
        message: 'Write a description of your project',
        name: 'description',
        default: 'Project Description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'install',
        default: 'Project Installation',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
        default: 'Project Usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contribution',
        default: 'Project contributions',
    },
    {
        type: 'input',
        message: 'Enter test questions',
        name: 'tests',
        default: 'Project Tests',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License'],
        name: 'license'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
    err ? console.error(err) : 
    console.log('Success! Your README file has been generated'),

// TODO: Create a function to initialize app
function init() {
    try {
    const userResponses = inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);

    }


// Function call to initialize app
init()})}
