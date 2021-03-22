const copyAndPush = require('./copy-push');


const numbers = [1, 2, 3];

describe('copyAndPush function', () => {
    it('copies an array and pushes a number to the end', () => {

        const newArray = copyAndPush(numbers);
  
        expect(newArray).toEqual([1, 2, 3, 4]);

    });
});

describe('copyAndPush function', () => {
    it('tests that array stays the same', () => {

        expect(numbers).toEqual([1, 2, 3]);

    });
});

