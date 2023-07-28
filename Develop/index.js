// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate READMe with template literals
const generateReadMe = (data) =>
`
# ${data.title}  ${whichLicense(data.license)}

## Description
* ${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

* ${data.installation}

## Usage

* ${data.usage}

## License

* This application is protected under ${data.license} licensing. ${whichLicense(data.license)}

## Contributing

* ${data.contributions}

## Tests

* ${data.tests}

## Questions

* Please email ${data.email} with any questions or visit the GitHub repository [${data.github}](https://github.com/Aidan-Windebank/professional-readme-generator).
`;

// Then block of questions to ask user for input into the README
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
            err ? console.log(err) : console.log('Successfully created README!')
            
        );
    });

// Function to set license badges to the license that is selected
function whichLicense(license){
    if(license === "MIT"){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === "Apache 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else {
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    }
}