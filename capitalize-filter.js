// const capAndFilter = (strings) => { 
    
//     for(let string of strings) {

//         // string = string.toString();
//         string = string.toUppercase();
//         // if(string.startsWith('f')){
//         //     string.remove();
//         // }
//     }

//     return (strings);
// };

const capAndFilter = (strings) => { 
    const allCapStrings = strings.map(string => string.toUpperCase());
    const newstrings = allCapStrings.filter(string => !(string.charAt(0).startsWith('F')));
    return (newstrings);
};


module.exports = capAndFilter;
