/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const max = nums.length;
    const maxSum = (max * (max + 1) / 2);
    const numsSum = nums.reduce((sum, num) => sum + num, 0);
    return maxSum - numsSum;
};