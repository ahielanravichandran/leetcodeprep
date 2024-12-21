// Leetcode
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150

var removeDuplicates = (nums) => {
  let firstPointer = 0;

  for (let secondPointer = 0; secondPointer < nums.length; secondPointer++) {
    if (nums[firstPointer] !== nums[secondPointer]) {
      firstPointer++;
      nums[firstPointer] = nums[secondPointer];
    }
  }
  return firstPointer + 1;
};

console.log(removeDuplicates([0,0,0]))
