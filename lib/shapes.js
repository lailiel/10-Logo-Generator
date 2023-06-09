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
    return `<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" fill="${this.color}" />
</svg>`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super("", color);
    this.name = "Triangle";
  }
  render() {
    return `<svg height="100" width="100">
    '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />'
  </svg>`;
  }
}

class Square extends Shape {
  constructor(color) {
    super("", color);
    this.name = "Square";
  }
  render() {
    return `<svg height="100" width="100">
    '<rect width="100" height="100" fill="${this.color}" />'
  </svg>`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
