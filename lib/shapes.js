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
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`

  }
}

class Triangle extends Shape {
  constructor(color) {
    super("", color);
    this.name = "Triangle";
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  ;
  }
}

class Square extends Shape {
  constructor(color) {
    super("", color);
    this.name = "Square";
  }
  render() {
    return `<polygon points="50 0, 250 0, 250 200, 50 200" fill="${this.color}" />`

  }
}


class Diamond extends Shape {
  constructor(color) {
    super("", color);
    this.name = "Diamond";
  }
  render() {
    return `<polygon points="50 100, 150 0, 250 100, 150 200" fill="${this.color}" />`
  ;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
  Diamond
};
