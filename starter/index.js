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
        message: "Please enter commonly asked questions regarding your project:",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    // Q: What are the INPUTs and what (if any) are the OUTPUTS (?)
    // INPUTS --> filename: 'README.md'
    //        --> data: What we collected from the USER (inquirer)

    // using the FS library we want to WRITE the collected DATA (from inquirer) to a FILE (README.md)

    // OUTPUTS --> we would want to call our gerneratemarkdown() function 
    //           --> pass the USER collected data --> generateMarkdown(answers)

    var readmeData = generateMarkdown(data);
    console.log("Genereated Content: ", readmeData);

   // OUTPUT --> WRITING TEH MARKDOWN TO the File System
    fs.writeFile('README.md', readmeData, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

// function to initialize program
function init() {
    // lets explore hte INQUIERE LIB
    console.log("I am code BEFORE the ASYNC propmt method");
    inquirer.prompt(    // the prompt async method returns a PROMISE
        questions
    )
    .then(function(answers) {
       // console.log("Data: ", answers);
       // console.log("Repo Title: ", answers.title);
        // Where does this newxt function call belong?
        console.log("I am code INSIDE the ASYNC propmt method");
        writeToFile('READEME.md', answers)
    })
    .catch(function(error) {
        console.log(error);
    })
    
    // Where does this newxt function call belong?
    console.log("I am code AFTER the ASYNC propmt method");
}

// function call to initialize program
init();
