// TODO: Include packages needed for this application

const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


console.log('Welcome to the README GENERATOR!')
console.log ("Please answer the questions to generate your README file!")


// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt ([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of you project?',
          validate: title => {
              if (title) {
                  return true;
                }
              else{
                 console.log('Please enter a title!');
                 return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username',
            validate: gitHubInput => {
                if(gitHubInput) {
                    return true;
                } else{
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project',
            validate: description => {
                if(description){
                    return true;
                }else{
                    console.log('Please enter information about your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email',
            validate: userEmail => {
                if(userEmail){
                    return true;
                }else{
                    console.log('Please enter an Email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What steps are required to install your project?',
            validate: install => {
                if(install){
                    return true;
                }else{
                    console.log('Please enter information about installing your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How does someone use this project?',
            validate: usage => {
                if(usage){
                    return true;
                }else{
                    console.log('Please enter information about how to use your project');
                    return false;
                }
            }
        }

    ])
};

const promptProject = data => {
    console.log (data)
}

// TODO: Create a function to write README file
// function writeToFile(README,data) {
    
const writeFile = data => {
    fs.writeFile('./README.md', data, err =>{
    if (err) {
        console.log (err);
        return;
    } else {
        console.log ('Your README generated!');
}});
};


// TODO: Create a function to initialize app
// function init (questions) {
//     inquirer.prompt()
//     .then(function(userInput) {
//         console.log (userInput)
//         writeToFile('README.md', generateMarkdown(userInput));
//     });
// };


// Function call to initialize app 

// init();

questions()
.then(promptProject)
.then(portfolioData => {
    console.log (portfolioData);

});