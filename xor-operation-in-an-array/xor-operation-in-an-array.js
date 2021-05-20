/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let XORValue = start;
    for(let i=start + 2; i<n * 2 + start; i += 2){
        XORValue = XORValue ^ i;
    }
    return XORValue;
};