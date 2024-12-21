// Leetcode
// https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let pointer = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= pointer) {
      pointer = i;
    }
  }
  return pointer === 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 5, 0, 0]));
