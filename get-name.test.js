const getName = require('./get-name');

describe('get name from an object function', () => {
    it('looks into an object and pulls out the name', () => {
        const Object = {
            name: 'john',
            age: 30,
        };
        const name = getName(Object);
  
        expect(name).toEqual('john');

    });
});




