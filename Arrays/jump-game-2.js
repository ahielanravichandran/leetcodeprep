// Leetcode
// https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0;
  let leftPointer = 0,
    rightPointer = 0;
  while (rightPointer < nums.length - 1) {
    let farthest = 0;
    for (let i = leftPointer; i < rightPointer + 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }
    leftPointer = rightPointer + 1;
    rightPointer = farthest;
    count = count + 1;
  }
  return count;
};

console.log(jump([2, 3, 1, 1, 1, 2, 7]));
// console.log(jump([2, 3, 0, 1, 4]));
