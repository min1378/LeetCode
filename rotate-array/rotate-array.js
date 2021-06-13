/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const newNums = [];
    for(let i=nums.length - 1; i>=0; i--){
        nums[i + k] = nums[i];
    }
    for(let i=0; i < k; i++){
        nums[k - i - 1] = nums.pop();
    }
};