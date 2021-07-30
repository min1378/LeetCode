/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(const line of grid){
        for(const number of line){
            if(number < 0){
                count += 1;
            }
        }
    }
    return count;
};