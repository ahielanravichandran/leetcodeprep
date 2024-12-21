// Leetcode
// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Note: Remove return before submitting
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1;
  let pointer1 = m - 1;
  let pointer2 = n - 1;

  while (pointer2 >= 0) {
    if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
      nums1[i--] = nums1[pointer1--];
    } else {
      nums1[i--] = nums2[pointer2--];
    }
  }
  return nums1;
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
