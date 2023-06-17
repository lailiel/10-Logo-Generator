function generateSVG(data) {
    const {
      text,
      textColor,
      shape,
    } = data;
    console.log(data)
    
    return {
      render() {
      return `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50%, 50%)"/>
      ${shape}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor= "middle" fill="${textColor}">${text}</text>
      </svg>
      `;
      }
    }
  }
  
  module.exports = generateSVG;
  