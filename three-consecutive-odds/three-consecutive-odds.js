/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    const isOdd = (number) => number % 2 === 1;
    for(let i = 0; i<arr.length - 2; i++){
        const first = arr[i];
        if(!isOdd(first)) continue;
        const second = arr[i + 1];
        if(!isOdd(second)) continue;
        const third = arr[i + 2];
        if(!isOdd(third)) continue;
        return true;
    }
    return false;
};