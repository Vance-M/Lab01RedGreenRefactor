// const capAndFilter = (strings) => { 
//     const newStrings = [];
//     for(let string of strings) {

//         // string = string.toString();
//         console.log(string);
//         string = string.toUpperCase();
//         if(!string.startsWith('F')){
//             newStrings.push(string);
//         }

            
//     }

//     return (newStrings);
// };

const capAndFilter = (strings) => { 
    const allCapStrings = strings.map(string => string.toUpperCase());
    const newstrings = allCapStrings.filter(string => !(string.charAt(0).startsWith('F')));
    return (newstrings);
};


module.exports = capAndFilter;
