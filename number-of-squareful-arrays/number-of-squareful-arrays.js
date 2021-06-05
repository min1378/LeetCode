/**
 * @param {number[]} nums
 * @return {number}
 */
const isSquare = (a, b) => {
    const root = Math.sqrt(a + b);
    const parseIntRoot = parseInt(root);
    return root === parseIntRoot;
}
var numSquarefulPerms = function(nums) {
    nums.sort((a, b) => a - b);
    let resultsCount = 0;
    let res = [];
    let used = {};
     const traverse = () => {
        if (res.length === nums.length) {
            return resultsCount++;
        }
		
        let lastPushed = null;
        for (let i = 0; i<nums.length; i++) {
            if (used[i] ||
                nums[i] === lastPushed ||
                (res.length && !isSquare(nums[i], res[res.length-1]))) {
                continue;
            }
  
            used[i] = true;
            lastPushed = nums[i];
            res.push(nums[i]);
            traverse();
            res.pop();
            used[i] = false;
        }
    }
    traverse();
    return resultsCount;
};