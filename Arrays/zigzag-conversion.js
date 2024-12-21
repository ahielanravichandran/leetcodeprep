// Leetcode
// https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Not solved yet

var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let res = "";
  let cycle = 2 * numRows - 2;
  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < s.length; j = j + cycle) {
      res += s[j];
      if (i !== 0 && i !== numRows - 1) {
        let index = j + cycle - 2 * i;
        if (index < s.length) {
          res += s[index];
        }
      }
    }
  }
  return res;
};

console.log(convert("PAYPALISHIRING", 4));
