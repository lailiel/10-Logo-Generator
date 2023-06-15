// const CLI = require('./lib/cli.js');

// const cli = new CLI();

// cli.run();

const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const LogoText = require("./lib/text")

function main() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select a logo shape",
        choices: ["circle", "triangle", "square"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter logo shape color",
        name: "shapeColor",
      },
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
    ])
    .then((answers) => {
      let shape;

      if (answers.shape == "circle") {
        shape = new Circle(answers.shapeColor);
      }

      if (answers.shape == "triangle") {
        shape = new Triangle(answers.shapeColor);
      }

      if (answers.shape == "square") {
        shape = new Square(answers.shapeColor);
      }

      console.log(shape);
      console.log(shape.render());

      
    })
    .then((answers) => {
    let text; 
    text = new LogoText(answers.text, answers.textColor)
});
      
}

main();
