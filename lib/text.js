class LogoText {
    constructor(text, color) {
      this.text = text;
      this.color = color;
    }
    render() {
      return `<text x="0" y="15" dominant-baseline="middle" text-anchor= "middle" fill="${this.color}">${this.text}</text>`
    }
  }
    
  module.exports = LogoText
  