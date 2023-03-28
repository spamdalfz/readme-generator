const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function init() {
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
                message: 'Please provide a description of your project:',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please provide installation instructions for your project:',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide usage information for your project:',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Please provide contribution guidelines for your project:',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please provide test instructions for your project:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Which license does your project use?',
                choices: ['MIT', 'GPLv3', 'Apache', 'BSD', 'Unlicense'],
            },
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
            },

        ])
        .then((answers) => {
            const readmeData = generateMarkdown(answers);
            writeToFile('README.md', readmeData);
            console.log(answers)
        });

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                throw err;
            }
            console.log('README file has been saved!');
        });
    }
}

// Function call to initialize app
init();
