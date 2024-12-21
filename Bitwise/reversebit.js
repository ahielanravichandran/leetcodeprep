// Leetcode
// https://leetcode.com/problems/reverse-bits/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let lastBit = n & 1;
    let revBit = lastBit << (31 - i);
    ans = ans | revBit;
    n = n >>> 1;
  }
  return ans >>> 0;
};

console.log(reverseBits(parseInt("00000010100101000001111010011100"), 2));
