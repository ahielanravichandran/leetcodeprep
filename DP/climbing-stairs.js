// Leetcode
// https://leetcode.com/problems/climbing-stairs/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    one = one + two;
    two = one - two;
  }
  return one;
};

console.log(climbStairs(1));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
