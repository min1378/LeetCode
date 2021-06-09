/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    const originalWord = word;
    let findWord = originalWord;
    let count = 0;
    let index = sequence.indexOf(findWord);
    while(index !== -1){
        count += 1;
        findWord += word;
        index = sequence.indexOf(findWord);
    }
    return count;
};