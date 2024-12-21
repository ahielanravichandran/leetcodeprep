/*
 use to find the maximum sum of a subarray of size k
 use to find the maximum avg of a subarray of size k
 use to find the smallest subarray with a given sum
 use to find the longest substring of a given length
 use to find the longest substring with no repeating characters
*/

// Leetcode:
// https://leetcode.com/problems/maximum-average-subarray-i/

// [1, 12, -5, -6, 50, 3], k = 4
export const findMaxAverage = (arr, k) => {
  let sum = 0;
  let maxSum = 0;

  // Handle first k elements
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // When we reach k elements, update maxSum
    if (i === k - 1) {
      maxSum = sum;
    }
    // Once window size exceeds k, start sliding
    else if (i >= k) {
      sum -= arr[i - k]; // Remove the element outside window
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum / k;
};

console.log(findMaxAverage([-6662, 5432, -8558, -8935, 8731, -3083, 4115, 9931, -4006, -3284, -3024, 1714, -2825, -2374, -2750, -959, 6516, 9356, 8040, -2169, -9490, -3068, 6299, 7823, -9767, 5751, -7897, 6680, -1293, -3486, -6785, 6337, -9158, -4183, 6240, -2846, -2588, -5458, -9576, -1501, -908, -5477, 7596, -8863, -4088, 7922, 8231, -4928, 7636, -3994, -243, -1327, 8425, -3468, -4218, -364, 4257, 5690, 1035, 6217, 8880, 4127, -6299, -1831, 2854, -4498, -6983, -677, 2216, -1938, 3348, 4099, 3591, 9076, 942, 4571, -4200, 7271, -6920, -1886, 662, 7844, 3658, -6562, -2106, -296, -3280, 8909, -8352, -9413, 3513, 1352, -8825], 90));
console.log(findMaxAverage([-1], 1));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([5, 2, 3], 2));
console.log(findMaxAverage([5, 2], 3));
console.log(findMaxAverage([5, 2], 1));
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
