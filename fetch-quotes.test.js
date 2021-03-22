const getQuote = require('./fetch-quotes');

describe('getQuote function', () => {
    it('to return a list of futurama Quotes', async() => {
        const Quote = await getQuote();

        expect(Quote).toEqual(expect.anything());
    });
});
