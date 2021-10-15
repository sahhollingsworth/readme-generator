// Application dependencies, modules required for application to function
// Command line user input interface
const inquirer = require("inquirer");
// Access file system to write data to (or create) README.md file
const fs = require("fs");
// Responsible for formatting README.md output with user input values
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
    },
]

// Function to run inquirer module for command line prompts, then do something with user input values
function initialize(){
    inquirer
    // Launch the prompt interface (questions) in command line
    .prompt(questions)
    //access the user response array and run the buildReadMe function to write the response to a new file.
    .then((response) => buildReadMe("COMPLETEDREADME.md", response))
}

// Using formatting in markdownGenerator.js, generate README.md file with data from the user response array.
function buildReadMe(file, data) {
    // Create a file called COMPLETEDREADME.md, adding the input data transformed by generateMarkdown.js formatting.
    fs.writeFile("COMPLETEDREADME.md", generateMarkdown(data), function(error) {
        // If file created successfull, notify user of success in the command line interface. If error, notify user in the command line interface.
        if(error) {
            console.log("An unknown error occurred.")
        } else {
            console.log("Your README was created!")
        }
    })
}

// Start app logic
initialize ();