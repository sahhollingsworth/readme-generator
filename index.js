// Application dependencies, modules required for application to function
const inquirer = require("inquirer");
const validator = require("email-validator");
const fs = require("fs");
const generateMarkdown = require("./markdownGenerator.js");

// Questions for user input
const questions = [
    {
        // Title of project
        type: "input",
        message: "What is the title of the project?",
        name: "title",
    },
    {
        // Description of project
        type: "input",
        message: "Provide a description of the project.",
        name: "description",
    },
    {
        // Installation Instructions
        type: "input",
        message: "Provide instructions for installation.",
        name: "installation-instruct",
    },
    {
        // Usage Information
        type: "input",
        message: "Provide information for usage.",
        name: "usage",
    },
    {
        // Contribution Guidelines
        type: "input",
        message: "Provide contribution guidelines.",
        name: "contributing-instruct",
    },
    {
        // Test Instructions
        type: "input",
        message: "Provide instructions for testing.",
        name: "test-instruct",
    },
    {
        // License declaration
        type: "list",
        message: "Select a license for this project.",
        choices: [
            "MIT",
            "ISC",
            "Apache 2.0",
            "Mozilla Public 2.0",
            "GNU GPLv2",
            "GNU GPLv3",
            "The Unlicense",
            "None",
        ],
        name: "license",
    },
    {
        // User's GitHub username
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        // User's email address 
        type: "input",
        message: "What is your email address?",
        name: "github",
        // validate: validator,
    },
]

// Function to run inquirer module for command line prompts, then do something with user input values
function initialize(){
    inquirer
    .prompt(questions)
    //asynchronous code syncronization to write the question responses to a new file. If response, write to readme file otherwise callback
    .then((response) => ("TESTREADME.md", response))
}

// Initialize app
initialize ();