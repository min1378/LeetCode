/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    const numberList = n.toString().split("").reverse();
    let result = '';
    for(let i = 0; i<numberList.length; i++){
        if(i % 3 === 0 && i !== 0) result += '.'
        result += numberList[i];
    }
    result = result.split("").reverse().join("");
    
    return result;
};