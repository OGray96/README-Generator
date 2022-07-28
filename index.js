

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");



const questions = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: readmeTitle => {
          if(readmeTitle){
            return true;
          } else {
            console.log('Please enter a project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter project description',
        validate: readmeDescription => {
          if(readmeDescription){
            return true;
          } else {
            console.log('Please enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the install instructions?',
        validate: readmeInstall => {
          if(readmeInstall){
            return true;
          } else {
            console.log('Please enter install instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information',
        validate: readmeUsage => {
          if(readmeUsage){
            return true;
          } else {
            console.log('Please enter usage instructions!');
            return false;
          }
        }
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
        validate: readmeInput => {
          if(readmeInput){
            return true;
          } else {
            console.log('Please enter some contributin guidelines');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter test information',
        validate: readmeTest => {
          if(readmeTest){
            return true;
          } else {
            console.log('Please enter test information!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username', 
        validate: readmeGithub => {
          if(readmeGithub){
            return true;
          } else {
            console.log('Please enter a GitHub username!');
            return false;
          }
        }      
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        validate: readmeEmail => {
          if(readmeEmail){
            return true;
          } else {
            console.log('Please enter a email address!');
            return false;
          }
        }    
      },
      
])};

function writeToFile(data) {
fs.writeFileSync(`README.MD`,generateMarkdown(data))
}





function init() {
    questions()
      .then((data) => writeToFile(data))
      .then(() => console.log('Successfully created README'))
      .catch((err) => console.error(err));
}

init();
