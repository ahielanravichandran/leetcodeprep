// Leetcode
// https://leetcode.com/problems/palindrome-number/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //   if (x < 0) return false;
  //   let string = `${x}`;

  //   let pointer2 = string.length - 1;

  //   for (let i = 0; i < string.length / 2; i++) {
  //     if (string[i] !== string[pointer2]) {
  //       return false;
  //     }
  //     pointer2--;
  //   }
  //   return true;
  if (x < 0) return false;
  if (x === 0) return true;
  let i = x;
  let reversed;
  while (i > 0) {
    reversed = !!reversed ? `${reversed}${i % 10}` : `${i % 10}`;
    i = Math.floor(i / 10);
  }
  return x === Number(reversed);
};

console.log(isPalindrome(11211));
console.log(isPalindrome(743));
