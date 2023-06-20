const { Circle, Triangle, Square, Diamond } = require('../lib/shapes');

describe('Shapes', () => {
    describe('triangle', () => {
        it('Should produce a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
            
    })
})

describe('Shapes', () => {
    describe('circle', () => {
        it('Should produce a red circle', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="red" />`);
        })
            
    })
})

describe('Shapes', () => {
    describe('square', () => {
        it('Should produce a green square', () => {
            const shape = new Square();
            shape.setColor("green");
            expect(shape.render()).toEqual(`<polygon points="50 0, 250 0, 250 200, 50 200" fill="green" />`);
        })
            
    })
})

describe('Shapes', () => {
    describe('diamond', () => {
        it('Should produce a purple diamond', () => {
            const shape = new Diamond();
            shape.setColor("purple");
            expect(shape.render()).toEqual(`<polygon points="50 100, 150 0, 250 100, 150 200" fill="purple" />`);
        })
            
    })
})

