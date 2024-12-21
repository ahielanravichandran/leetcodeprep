// Leetcode
// https://leetcode.com/problems/longest-common-prefix/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let commonPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (commonPrefix.length === 0) return "";
    for (let j = 0; j < commonPrefix.length; j++) {
      if (commonPrefix[j] !== strs[i][j]) {
        commonPrefix = commonPrefix.substring(0, j);
        continue;
      }
    }
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["ab", "a"]));
