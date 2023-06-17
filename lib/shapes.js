class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  render() {
    return "code for shape";
  }
}

class Circle extends Shape {
  constructor(color) {
    super("", color);
    this.name = "circle";
  }

  render() {
    return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`

  }
}

class Triangle extends Shape {
  constructor(color) {
    super("", color);
    this.name = "Triangle";
  }
  render() {
    return `<polygon points="50 0, 100 80, 0 80" fill="${this.color}" />`
  ;
  }
}

class Square extends Shape {
  constructor(color) {
    super("", color);
    this.name = "Square";
  }
  render() {
    return `<rect width="100" height="100" fill="${this.color}" />`

  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
