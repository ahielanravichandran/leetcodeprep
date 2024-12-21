// Leetcode
// https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      if (Math.abs(hashMap.get(nums[i]) - i) <= k) {
        return true;
      } else {
        hashMap.set(nums[i], Math.abs(i));
      }
    } else {
      hashMap.set(nums[i], i);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([0, 2, 1, 3, 4, 1, 1], 1));
