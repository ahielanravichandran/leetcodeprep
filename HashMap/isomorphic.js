// Leetcode
// https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hashMap = {};
  const alreadyMapped = {};
  let i = 0;
  while (i < s.length) {
    if (!hashMap[s[i]] && !alreadyMapped[t[i]]) {
      hashMap[s[i]] = t[i];
      alreadyMapped[t[i]] = true;
    } else if (hashMap[s[i]] !== t[i]) {
      return false;
    }
    i++;
  }
  return true;
};

console.log(isIsomorphic("badc", "baba"));
console.log(isIsomorphic("bbbaaaba", "aaabbbba"));
