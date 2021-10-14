// Application dependencies, modules required for application to function
const inquirer = require("inquirer");
// const validator = require("email-validator");
const fs = require("fs");
const generateMarkdown = require("./lib/generateMarkdown.js");

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
        name: "contributing",
    },
    {
        // Test Instructions
        type: "input",
        message: "Provide instructions for testing.",
        name: "test",
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
        name: "email",
        // validate: async ("email") => {
        //     if (function validator.validate("email")) {

        //     }    
        // };
    },
]

// Function to run inquirer module for command line prompts, then do something with user input values
function initialize(){
    inquirer
    .prompt(questions)
    //asynchronous code syncronization to write the question responses to a new file. If response, write to readme file otherwise callback
    .then((response) => buildReadMe("TESTREADME.md", response))
}

// Using formatting in markdownGenerator.js, generate README file from user data, else throw error
// THIS FORMATTING NEEDS TLC -------------------------------------------
function buildReadMe(file, data) {
    //create a file called TESTREADME.md, adding the input data transformed by markdown, and notify user of success. If error, notify user.
    fs.writeFile("TESTREADME.md", generateMarkdown(data), function(error) {
        if(error) {
            console.log("An unknown error occurred.")
        } else {
            console.log("Your README was created!")
        }
    })
}

// Initialize app
initialize ();