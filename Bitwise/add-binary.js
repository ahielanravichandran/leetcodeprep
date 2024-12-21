// Leetcode
// https://leetcode.com/problems/add-binary/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;
  let res = "";

  while (i >= 0 || j >= 0) {
    let sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
    if (sum >= 2) {
      carry = 1;
      res = `${sum % 2}${res}`;
    } else {
      carry = 0;
      res = `${sum}${res}`;
    }
    i--;
    j--;
  }
  if (carry === 1) res = `1${res}`;
  return res;
};

// console.log(addBinary("11", "11"));
// console.log(addBinary("1010", "1011"));
console.log(addBinary("11", "1"));
