const inquirer = require("inquirer");
const fs = require("fs");
const logoSVG = require("./lib/generateLogo");
const { Circle, Triangle, Square, Diamond } = require("./lib/shapes");


function main() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select a logo shape",
        choices: ["circle", "triangle", "square", "diamond"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter logo shape color(keyword or #code)",
        name: "shapeColor",
      },
      {
        type: "input",
        message: "Enter your 3 character logo text",
        name: "text",
        validate: (input) => {
          if (input.length <= 3) {
            return true;
          }
          return `Text limited to 3 characters`;
        },
      },
      {
        type: "input",
        message: "Enter text color(keyword or #code)",
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

      if (answers.shape == "diamond") {
        shape = new Diamond(answers.shapeColor)
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
