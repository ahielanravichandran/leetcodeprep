// Leetcode
// https://leetcode.com/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let endPointer = s.length - 1;
  let pointer = 0;

  while (pointer < s.length / 2) {
    if (s[pointer] !== s[endPointer]) return false;
    pointer++;
    endPointer--;
  }
  return true;
};

console.log(isPalindrome("a a as"));
