// Leetcode
// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // Method 1
  //   let leftProductArr = Array(nums.length).fill(1);
  //   let rightProductArr = Array(nums.length).fill(1);
  //   let leftProduct = 1;
  //   let rightProduct = 1;
  //   let outputArr = Array(nums.length).fill(1);
  //   for (let i = 0; i < nums.length; i++) {
  //     let j = nums.length - 1 - i;
  //     leftProduct = leftProduct * nums[i];
  //     rightProduct = rightProduct * nums[j];
  //     leftProductArr[i] = leftProduct;
  //     rightProductArr[j] = rightProduct;
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     outputArr[i] =
  //       (i - 1 < 0 ? 1 : leftProductArr[i - 1]) *
  //       (i + 1 >= nums.length ? 1 : rightProductArr[i + 1]);
  //   }
  //   return outputArr;

  // Method2

  let res = Array(nums.length).fill(1);
  let prefix = 1,
    postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix = prefix * nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * postfix;
    postfix = postfix * nums[i];
  }
  return res;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
