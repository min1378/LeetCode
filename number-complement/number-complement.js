/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let quot = 99999;
    let number = num;
    let binary = '';
    while(number > 0){
        const rest = number % 2
        console.log(rest);
        binary += rest === 0 ? '1' : '0';
        number = parseInt(number / 2);
    }
    console.log(binary, binary.split("").reverse(), binary.split("").reverse().map((number, index) => number * Math.pow(2, index)))
    return binary.split("").map((number, index) => number * Math.pow(2, index)).reduce((sum, number) => sum + number, 0)
};