/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0) return 0;
    const calSqrt = (x, guess) => {
        if(!guess){
            guess = x / 2.0;
        }
        const divided = x / guess;
        const newGuess = (divided + guess) / 2.0;
        if( guess === newGuess){
            return newGuess;
        }
        return calSqrt(x, newGuess);
    }
    return parseInt(calSqrt(x))
};