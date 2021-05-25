var romanToInt = function (s) {
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    result += romanMap[s[i]];
    if (i > 0 && romanMap[s[i]] > romanMap[s[i - 1]]) {
      result -= 2 * romanMap[s[i - 1]]
    }
  }
  return result;
};