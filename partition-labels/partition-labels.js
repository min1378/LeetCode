/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const lastMap = {};
    s.split("").map((char, index) => lastMap[char] = index);
    const result = [];
    
    let startIndex = 0;
    let startChar = s[startIndex];
    let stopIndex = lastMap[startChar];
    
    while(startIndex < s.length){
        for(let i = startIndex; i< stopIndex; i++){
            const currentChar = s[i];
            const currentCharLastIndex = lastMap[currentChar];
            stopIndex = Math.max(stopIndex, currentCharLastIndex);
        }
        
        result.push(stopIndex - startIndex + 1);
        
        startIndex = stopIndex + 1;
        startChar = s[startIndex];
        stopIndex = lastMap[startChar]
    }
    return result;
};