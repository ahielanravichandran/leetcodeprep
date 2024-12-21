// Leetcode
// https://leetcode.com/problems/word-pattern/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const wordsArr = s.split(" ");
  if (pattern.length !== wordsArr.length) return false;
  const hashMap = new Map();
  const alreadyMapped = new Map();
  let i = 0;
  while (i < pattern.length) {
    if (alreadyMapped.has(wordsArr[i])) {
      if (alreadyMapped.get(wordsArr[i]) !== pattern[i]) {
        return false;
      }
    }
    if (!hashMap.has(pattern[i])) {
      hashMap.set(pattern[i], wordsArr[i]);
      alreadyMapped.set(wordsArr[i], pattern[i]);
    } else if (hashMap.get(pattern[i]) !== wordsArr[i]) {
      return false;
    }
    i++;
  }
  return true;
};

// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog constructor constructor dog"));
// console.log(wordPattern("aaa", "aa aa aa aa"));
