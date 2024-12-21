// Leetcode
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // Method1
  let stringArr = s.split(" ");
  console.log(`stringArr`, stringArr);
  let reverseString = "";
  for (let i = stringArr.length - 1; i >= 0; i--) {
    if (stringArr[i] === "") continue;
    reverseString = `${
      reverseString === ""
        ? `${stringArr[i]}`
        : `${reverseString} ${stringArr[i]}`
    }`;
  }
  return reverseString;

  // Method 2
  //   let res = "";
  //   let word = "";
  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] != " ") {
  //       word = `${word}${s[i]}`;
  //     } else if (word) {
  //       res = `${word}${res === "" ? res : ` ${res}`}`;
  //       word = "";
  //     }
  //   }
  //   return word ? `${word}${res === "" ? res : ` ${res}`}` : res;
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world   "));
console.log(reverseWords("a good   example"));
