const fetch = require('node-fetch');

const getQuote = async() => {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
    const body = await res.json();
    console.log(body[0].quote);
    return body[0].quote;
};

module.exports = getQuote;
