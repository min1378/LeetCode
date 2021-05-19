/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x === 0) return 0;
    if(x < 0){
        const absX = Math.abs(x).toString();
        return checkRange(Number("-" + absX.split("").reverse().join("")));
    }
    return checkRange(Number(x.toString().split("").reverse().join("")));
};
const checkRange = (number) => {
    if(number > 2 ** 31 - 1) return 0;
    if(number < -(2 ** 31)) return 0;
    return number;
}