/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    const half = sum / 2;
    if(!Number.isInteger(half)) return false;
    const dp = [];
    dp[0] = true;
    for(let i = 0; i<nums.length; i++){
        const num = nums[i];
        for(let j = half; j>=num; j--){
            dp[j] = dp[j] || dp[j-num];
        }
    }
    return dp[half] || false;
};