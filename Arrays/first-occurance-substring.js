// Leetcode
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (needle === haystack) return 0;
  const iterationCount = haystack.length - needle.length;

  for (let i = 0; i < iterationCount + 1; i++) {
    if (haystack[i] === needle[0]) {
      const substring = haystack.substring(i, i + needle.length);
      if (substring === needle) return i;
    }
  }
  return -1;
};

console.log(strStr("aabbs", "bs"));
