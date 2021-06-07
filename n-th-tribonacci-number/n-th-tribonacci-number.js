/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const triMap = {0: 0, 1: 1, 2: 1};
    const recursion = (number) => {
        if( number === n) return;
        const T0 = triMap[number];
        const T1 = triMap[number + 1];
        const T2 = triMap[number + 2];
        triMap[number + 3] = T0 + T1 + T2;
        recursion(number + 1);
    }
    recursion(0);
    return triMap[n];
};