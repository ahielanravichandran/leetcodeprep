// Leetcode
// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < t.length) {
    if (t[pointer1] === s[pointer2]) {
      pointer2++;
      if (pointer2 === s.length) return true;
    }
    pointer1++;
  }
  return false;
};

console.log(isSubsequence("axc", "ahbgdc"));
