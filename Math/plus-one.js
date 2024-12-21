// Leetcode

// https://leetcode.com/problems/plus-one/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let isCarried = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (i !== digits.length - 1 && !isCarried) {
      return digits;
    }
    if (digits[i] + 1 === 10) {
      isCarried = true;
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      isCarried = false;
    }
  }
  if (isCarried) {
    digits.unshift(1);
  }
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9]));
console.log(plusOne([8, 9, 9, 9]));
