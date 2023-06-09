// const footwear1 = {
//   color: "blue",
//   price: 40,
// };

// const footwear2 = {
//   color: "red",
//   price: 50,
// };

class Footwear {
  // properties - things that this object has
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }

  // methods - actions that can be done or apply to the object
  onDiscountSale() {
    this.price = this.price / 2;
  }
}

// console.log(footwear1);
// console.log(footwear2);

const footwear3 = new Footwear("yellow", 60);
footwear3.onDiscountSale();

class Shoes extends Footwear {
  onDiscountSale() {
    this.price = (this.price / 4) * 3;
  }
}

const shoes1 = new Shoes("blue", 50);

console.log(shoes1);

shoes1.onDiscountSale();

console.log(shoes1);
