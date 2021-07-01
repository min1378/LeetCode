/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    const n = nums.length;
    const dp = Array.from(Array(n), () => Array(3).fill(0))
    const pos = nums[0] % 3
    dp[0][pos] = Math.max(nums[0], dp[0][pos])
    for(let i = 1; i<n; i++){
        for(let j = 0; j<3; j++){
            const pos = (dp[i-1][j]+nums[i])%3; 
            dp[i][pos] = Math.max(dp[i][pos], dp[i-1][j]+nums[i]);
            dp[i][j] = Math.max(dp[i][j], dp[i-1][j]);
        }
    }
    return dp[n-1][0];
};