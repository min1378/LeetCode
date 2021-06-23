/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const orderMap = {};
    order.split("").map((char, index) => orderMap[char] = index)
    const cloneWords = [...words];
    words.sort((a, b) =>{
        return compareWords(b, a, orderMap)
    })
    return words.toString() === cloneWords.toString()
};
const compareWords = (a, b, orderMap) => {
    const length = Math.min(a.length, b.length);
    for(let i = 0; i<length; i++){
        const aChar = a[i];
        const bChar = b[i];
        const aIndex = orderMap[aChar];
        const bIndex = orderMap[bChar];
        if(aIndex > bIndex) return -1;
        if(aIndex < bIndex) return 1;
    }
    if(a.length > b.length) return -1;
    if(a.length === b.length) return 0;
    if(a.length < b.length) return 1;
}