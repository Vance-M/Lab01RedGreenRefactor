const copyAndPush = require('./copy-push');

describe('copyAndPush function', () => {
    it('copies an array and pushes a number to the end', () => {
        const numbers = [1, 2, 3];
        const newArray = copyAndPush(numbers);
  
        expect(newArray).toEqual([1, 2, 3, 4]);

    });
});


