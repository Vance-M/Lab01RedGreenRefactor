const copyAndPush = (numbers) => { 
    const newNumbers = [...numbers];
    newNumbers.push(4);
    return (newNumbers);
};

module.exports = copyAndPush;
