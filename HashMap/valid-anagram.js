// Leetcode
// https://leetcode.com/problems/valid-anagram/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //   if (s.length !== t.length) return false;
  //   let i = 0;
  //   while (i < t.length) {
  //     s = s.replace(t[i], "");
  //     i++;
  //   }
  //   return !s;
  if (s.length !== t.length) return false;
  let i = 0;
  const hashMap = new Map();
  while (i < t.length) {
    if (!hashMap.has(t[i])) {
      hashMap.set(t[i], 1);
    } else {
      hashMap.set(t[i], hashMap.get(t[i]) + 1);
    }
    if (!hashMap.has(s[i])) {
      hashMap.set(s[i], -1);
    } else {
      hashMap.set(s[i], hashMap.get(s[i]) - 1);
    }
    i++;
  }
  for (const [_, value] of hashMap.entries()) {
    if (value !== 0) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("anagram", "cards"));
console.log(isAnagram("", ""));
console.log(isAnagram("ac", "bb"));
console.log(isAnagram("aa", "bb"));
