// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


// Things in the readme



const inquirer = require('inquirer');
const fs = require('fs');
// const { title } = require('process');

const generateReadMe = ({ title, description, installation, usage, license,
}) =>
`
# ${title}

* ${description}

## Table of Contents

* Description
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Installation

* ${installation}

## Usage

* ${usage}

## Questions

* ${license}
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please list any directions for installation.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Any reccomendations for project usage?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What type of license would you like?',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How would you like to handle contributions?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Would you like to run any tests for the project?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Do you have any quesions about the project?',
        },
    ])
    .then((answers) => {
        const readmePageContent = generateReadMe(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme.md!')
        );
    });
