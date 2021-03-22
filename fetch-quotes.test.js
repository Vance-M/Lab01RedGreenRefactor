const getQuote = require('./fetch-quotes');

describe('getQuote function', () => {
    it('to return a list of futurama Quotes', async() => {
        const Quote = await getQuote();

        expect(Quote).toEqual(expect.any(String));
    });
});

describe('mock of getQuote function', () => {
    const fetch = require('node-fetch');

    jest.mock('node-fetch');
    it('to return a list of futurama Quotes', async() => {
        fetch.mockImplementation(() => {
            const res =  fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
            const body =  res.json();
            console.log(body[0].quote);
            return body[0].quote;
        });
    });
});
