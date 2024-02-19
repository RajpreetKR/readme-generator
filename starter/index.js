const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter your project description:",
    },
    {
        type: "input",
        name: "installation",
        message: "What does the user need to do to install your project?:",
    },
    {
        type: "input",
        name: "license",
        message: "Please enter your desired license:",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please enter any collaborators you worked with:",
    },
    {
        type: "input",
        name: "tests",
        message: "What does the user need in order to test your project?",
    },
    {
        type: "input",
        name: "questions",
        message: "Not sure what to put here:",
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
