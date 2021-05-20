/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let topIndex = -1;
    let upCount = 0;
    let downCount = 0;
    for(let i = 0; i<arr.length - 1; i++){
        if(arr[i] === arr[i + 1]) return false;
        if(arr[i] > arr[i + 1]) {
            topIndex = i;
            break;
        }
        upCount += 1;
    }
    if(upCount === 0) return false;
    if(topIndex === -1) return false;
    
    for(let j = topIndex; j<arr.length - 1; j++){
        if(arr[j] === arr[j + 1]) return false;
        if(arr[j] < arr[j + 1]) return false;
        downCount += 1;
    }
    if(downCount === 0) return false;
    return true;
};