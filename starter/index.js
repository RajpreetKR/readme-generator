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
        message: "What does the user need for your project to work?:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions for use:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please chose your desired license:",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BS02", "BS03", "none"],
    },
    {
        type: "input",
        name: "contributors",
        message: "Please enter any collaborators you worked with:",
    },
    {
        type: "input",
        name: "tests",
        message: "Write anything the user can do to test your project:",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your Github username:",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
    },
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
