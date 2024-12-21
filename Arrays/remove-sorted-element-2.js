// Leetcode
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  let prev = nums[1];
  let prevOfPrev = nums[0];
  let pivot = 2;

  for (let i = 2; i < nums.length; i++) {
    if (prev != nums[i] || prevOfPrev != nums[i]) {
      nums[pivot] = nums[i];
      pivot += 1;
    }
    prevOfPrev = prev;
    prev = nums[i];
  }
  return pivot;
};

console.log(removeDuplicates([0, 0, 1, 1]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
