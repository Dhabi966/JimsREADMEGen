// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
var generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

  // TODO: Create an array of questions for user input
  const questions = [
    {
      type: "input",
      message: "What is your GitHub repo?",
      name: "repo",
    },
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a brief description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Provide instructions to install the project:",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions to use the project:",
      name: "usage",
    },
    {
      type: "input",
      message: "Provide guidelines on how someone can contribute to project:",
      name: "contributions",
    },
    {
      type: "input",
      message: "Enter test questions:",
      name: "tests",
    },
    {
      type: "list",
      message: "Choose a license used on your project:",
      choices: [
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "Enter your email address:",
      name: "email",
    },
  ];
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions)
    .then(function (data) {
      console.log("Your README file is being generated...");
      writeToFile("sampleREADME.md", generateMarkdown({ ...data }));
      console.log("Check your GitHub repo for your new README file!");
    });
  }

// Function call to initialize app
init();
