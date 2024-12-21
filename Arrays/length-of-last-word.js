// Leetcode
// https://leetcode.com/problems/length-of-last-word/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function (s) {
//   let count = 0;
//   let isSpaceEncountered = false;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== " ") {
//       if (isSpaceEncountered) {
//         count = 1;
//         isSpaceEncountered = false;
//       } else {
//         count++;
//       }
//     } else {
//       isSpaceEncountered = true;
//     }
//   }
//   return count;
// };

// Better solution
var lengthOfLastWord = function (s) {
  let sArr = s.split(" ");
  sArr = sArr.filter((a) => a !== "");
  return sArr[sArr.length - 1].length;
};

console.log(lengthOfLastWord("luffy is still joyboy"));
