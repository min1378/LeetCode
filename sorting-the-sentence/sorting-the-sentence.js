/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const wordList = [];
    s.split(" ").forEach((word) => {
        const index = word.slice(-1)
        wordList[index - 1] = word.slice(0, word.length - 1);
    })
    return wordList.join(" ");
};