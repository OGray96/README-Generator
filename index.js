// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter project description',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the install instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ['mit','apache','apgl', 'No License'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please enter contributing guidelines',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter test information',
      }
])};

// TODO: Create a function to write README file
function writeToFile(data) {
fs.writeFileSync('README.md',generateMarkdown(data))
}




// TODO: Create a function to initialize app
function init() {
    questions()
      .then((data) => writeToFile(data))
      .then(() => console.log('Successfully created README'))
      .catch((err) => console.error(err));
}

// Function call to initialize app
init();
