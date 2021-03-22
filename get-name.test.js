const getName = require('./get-name');

describe('getName function', () => {
    it('looks into an object and pulls out the name', () => {

        const spot = { name: 'spot', age: 5, weight: '20 lbs' };
        const name = getName(spot);
  
        expect(name).toEqual('spot');

    });
});




