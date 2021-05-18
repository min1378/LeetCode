/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const stringXList = x.toString().split("");
  const reversedX = [...stringXList].reverse().join("");
  const isSameChar = (char, index) => char === reversedX[index];
  return stringXList.every(isSameChar);
};