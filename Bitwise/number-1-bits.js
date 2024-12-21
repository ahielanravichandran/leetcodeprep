// Leetcode
// https://leetcode.com/problems/number-of-1-bits/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    count = count + (n & 1);
    n = n >> 1;
  }
  return count;
};

console.log(hammingWeight(128));
