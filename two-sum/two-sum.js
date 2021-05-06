/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numberMap = {};
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const findNumber = target - number;
    if (numberMap[findNumber] > -1) {
      return [numberMap[findNumber], i];
    }
    numberMap[number] = i;
  }
};
