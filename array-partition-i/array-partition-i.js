/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a - b); // 정렬
    console.log(nums);
    let result = 0;
    nums.forEach((num, index) =>{
        if(index % 2 === 0){
            result += num;
        }
    })
    return result;
};