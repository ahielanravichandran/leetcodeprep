// Leetcode
// https://leetcode.com/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seenMap = new Map();

  while (n !== 1) {
    if (seenMap.has(n)) {
      return false;
    }
    seenMap.set(n, true);
    n = sumOfSquares(n);
  }
  return true;
};

var sumOfSquares = (n) => {
  let sum = 0;
  while (n > 0) {
    let reminder = n % 10;
    sum = sum + reminder * reminder;
    n = Math.floor(n / 10);
  }
  return sum;
};

console.log(isHappy(19));
console.log(isHappy(2));
