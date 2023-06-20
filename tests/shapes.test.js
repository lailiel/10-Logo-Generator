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

