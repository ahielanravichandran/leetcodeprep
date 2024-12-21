// Leetcode
// https://leetcode.com/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let sum = 0;
  const vowelsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = s.length - 1; i >= 0; i--) {
    sum =
      sum +
      (vowelsMap[s[i + 1]] > vowelsMap[s[i]]
        ? -vowelsMap[s[i]]
        : vowelsMap[s[i]]);
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
