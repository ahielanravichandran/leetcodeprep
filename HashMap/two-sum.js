// Leetcode
// https://leetcode.com/problems/two-sum/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsMap = new Map();
  let diff;
  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];

    if (numsMap.has(diff)) {
      return [numsMap.get(diff), i];
    }

    numsMap.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
