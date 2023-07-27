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

const generateReadMe = ({ title, description, installation, usage, license, contributions, tests, github, email}) =>
`
# ${title}

## Description of Project
* ${description}

## Table of Contents

* [Description](##Description of Project)
* [Installation]()
* [Usage]()
* [License]()
* [Contributing]()
* [Tests]()
* [Questions](#question-link)

## Installation

* ${installation}

## Usage

* ${usage}

## License

* [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
* This application is protected under ${license} licensing.

## Contributing

* ${contributions}

## Tests

* ${tests}

## Questions <a name="question-link"></a>

* Please email ${email} with any questions or visit my GitHub page [${github}](https://github.com/Aidan-Windebank).
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
            type: 'list',
            name: 'license',
            message: 'What type of licensing would you like?',
            choices: ['MIT', 'Perl', 'Apache 2.0'],
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
            name: 'github',
            message: 'Please enter your GitHub username?',
        },
        {
            type: 'email',
            name: 'email',
            message: 'Please enter an email for users to contact you with questions?',
        },
    ])
    .then((answers) => {
        const readmePageContent = generateReadMe(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created readme.md!')
        );
    });
