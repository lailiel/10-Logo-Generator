const inquirer = require("inquirer");
const fs = require("fs");
const logoSVG = require("./lib/generateLogo");
const { Circle, Triangle, Square } = require("./lib/shapes");


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
        type: "input",
        message: "Enter your 3 character logo text",
        name: "text",
        validate: (input) => {
          if (input.length === 3) {
            return true;
          }
          return `Logo must be 3 characters`;
        },
      },
      {
        type: "input",
        message: "Enter text color",
        name: "textColor",
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

      const svg = logoSVG({
        shape: shape.render(),
        text: answers.text,
        textColor: answers.textColor,
      });

      fs.writeFile("logo.svg", svg.render(), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    })

    .catch((err) => console.error(err));
}

main();
