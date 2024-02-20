const fs = require("fs");   // Here we are BRINGING in REFERENCE to the File SYSTEM Library
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
        message: "What does the user for your project to work?:",
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
        message: "Please enter commonly asked questions regarding your project:",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    let readmeData = generateMarkdown(data);
    console.log("Genereated Content: ", readmeData);

    fs.writeFile('README.md', readmeData, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

// function to initialize program
function init() {
    inquirer.prompt(    // the prompt async method returns a PROMISE
        questions
    )
    .then(function(answers) {
        console.log("Creating README.md file......");
        writeToFile('READEME.md', answers)
    })
    .catch(function(error) {
        console.log(error);
    })
}

// function call to initialize program
init();
