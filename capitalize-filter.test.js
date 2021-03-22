const capAndFilter = require('./capitalize-filter');

describe('capitalizeAndFilter function', () => {
    it('takes an array of strings, capitalizes everyting then filters all that begin with f', () => {
        const strings = [
            'four scores and seven years ago',
            'our fathers brought forth, upon this continent',
            'a new nation, conceived in liberty,',
            'and dedicated to the proposition that all men are created equal.',
            'first line of the Gettysburg Address'
        ];
        const newArray = capAndFilter(strings);
        const endStrings = [
            'OUR FATHERS BROUGHT FORTH, UPON THIS CONTINENT',
            'A NEW NATION, CONCEIVED IN LIBERTY,',
            'AND DEDICATED TO THE PROPOSITION THAT ALL MEN ARE CREATED EQUAL.',
        ];
        expect(newArray).toEqual(endStrings);

    });
});
