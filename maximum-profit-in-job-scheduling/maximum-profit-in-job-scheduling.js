/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
const binarySearch = (left, right, i, jobs) => {
    
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        if(jobs[mid][0] < jobs[i][1]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}
var jobScheduling = function(startTime, endTime, profit) {
    const n = profit.length;
    const dp = new Array(n + 1).fill(0);
    const jobs = [];
    for(let i = 0; i < n; i++){
        jobs.push([startTime[i], endTime[i], profit[i]])
    }
    jobs.sort((a, b) => a[0] - b[0]);
    for(let i = n - 1; i >=0; i--){
        let left = i + 1;
        let right = n;
        left = binarySearch(left, right, i, jobs);
        dp[i] = Math.max(dp[i+1], jobs[i][2] + dp[left])
    }
    return dp[0];
    
};