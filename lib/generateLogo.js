function generateSVG(data) {
    const {
      text,
      shape,
    } = data;
   
    return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">`

    `${shape}`
  
    `${text}`
  
     `</svg>`
  }
  
  module.exports = generateSVG;
  