// TODO: Include packages needed for this application

const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


console.log('Welcome to the README GENERATOR!');
console.log ("Please answer the questions to generate your README file!");


// TODO: Create an array of questions for user input

const data = () => {
    return inquirer.prompt ([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of you project? ',
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
            message: 'Enter your Github Username: ',
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
            message: 'Enter a description of your project: ',
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
            message: 'Enter your Email: ',
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
            message: 'What steps are required to install your project? ',
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
            message: 'How does someone use this project? ',
            validate: usage => {
                if(usage){
                    return true;
                }else{
                    console.log('Please enter information about how to use your project');
                    return false;
                }
            }
        },
        
    ])
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.appendFile(`./README.md`, data, (err) => err ? console.error(err) : console.log (`README.md has been generated.`))};




// TODO: Create a function to initialize app
async function init() {
    let answers = await data();
    writeToFile((answers.fileName),(generateMarkdown(answers)))
};


// Function call to initialize app 
init()