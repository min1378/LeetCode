/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const numberMap = {};

  const countNumber = (number) => {
    if (numberMap[number]) numberMap[number] += 1;
    else numberMap[number] = 1;
  };
  arr.map(countNumber);
  if (k === 0) return Object.keys(numberMap).length;
  let endIndex = 0;
  const result = Object.entries(numberMap)
    .sort((a, b) => {
      if (a[1] > b[1]) return 1;
      else return -1;
    })
    .reduce((sum, el, index, arr) => {
      if (sum + el[1] <= k) {
        sum += el[1];
      } else {
        endIndex = index - 1;
        arr.splice(1);
      }
      return sum;
    }, 0);
  if (result === arr.length) return 0;
  return Object.keys(numberMap).length - (endIndex + 1);
};