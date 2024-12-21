// Leetcode
// https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var reverseByStartEnd = function (nums, start, end) {
  while (start < end) {
    nums[start] = nums[start] + nums[end];
    nums[end] = nums[start] - nums[end];
    nums[start] = nums[start] - nums[end];
    start++;
    end--;
  }
  return nums;
};

var rotate = function (nums, k) {
  k = k % nums.length;
  // Method 1
  //   const dupe = [...nums];

  //   for (let i = 0; i < nums.length; i++) {
  //     let index = i + k;
  //     if (index >= nums.length) index = index - nums.length;
  //     nums[index] = dupe[i];
  //   }
  //   return nums;

  // Method 2
  //   nums = nums.reverse();
  //   nums = reverseByStartEnd(nums, 0, k - 1);
  //   nums = reverseByStartEnd(nums, k, nums.length - 1);
  //   return nums;

  // Method 3
  nums.unshift(...nums.splice(nums.length - k, k));
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));
