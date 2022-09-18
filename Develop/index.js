// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
.prompt ([
    {
        type: 'input',
        message: 'What is your GitHub repo?',
        name: 'repo', 
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a brief description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide command to install the project',
        name: 'install',    
    },
    {
        type: 'input',
        message: 'Provide instructions to use the project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide guidelines on how someone can contribute to project',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test questions',
        name: 'tests',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License'],
        name: 'choices'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },  
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
    },  
])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('Generated-README.md', data, err =>
    err ? console.error(err) : 
    console.log('Success! Your README file has been generated.'),

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then((data) => {
       writeToFile('Generated-README.md', generateMarkdown(data));
});

})

}
// Function call to initialize app