const inquirer = require("inquirer");
const fs = require("fs");
const logoSVG = require("./utils/generateLogo");

const promptUser = () => {
    return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter your 3 character logo text',
      name: 'text',
      maxLength:3
    },
    {
       type: 'input',
       message: 'Enter text color',
       name: 'textColor' 
    },
    {
        type: 'list',
        message: "Select a logo shape",
        choices: [
            'circle',
            'triange',
            'square'
        ],
        name: 'shape'
    },
    {
        type: 'input',
        message: "Enter logo shape color",
        name: 'shapeColor'
    }
  ])
}




const init = () => {
    promptUser()
      .then((answers) => fs.writeFile('logo.svg', logoSVG({...answers}), (err)=> console.log(err))) 
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => console.error(err));
  };


init();