// Leetcode
// https://leetcode.com/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  //   const magazineMap = {};
  //   let i = 0;
  //   while (i < magazine.length) {
  //     if (!magazineMap[magazine[i]]) {
  //       magazineMap[magazine[i]] = 1;
  //     } else {
  //       magazineMap[magazine[i]] = magazineMap[magazine[i]] + 1;
  //     }
  //     i++;
  //   }
  //   i = 0;
  //   while (i < ransomNote.length) {
  //     if (magazineMap[ransomNote[i]] === 0 || !magazineMap[ransomNote[i]]) {
  //       return false;
  //     } else {
  //       magazineMap[ransomNote[i]] = magazineMap[ransomNote[i]] - 1;
  //     }
  //     i++;
  //   }
  //   return true;
  // Better solution
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }

  if (!ransomNote) return true;
  else return false;
};

console.log(canConstruct("aab", "baa"));
