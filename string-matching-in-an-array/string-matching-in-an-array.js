/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const result = [];
    words.forEach((subString) => {
        const parentList = words.filter((word) => word.includes(subString));
        if(parentList.length > 1) result.push(subString);
    })
    return result;
};