// Leetcode
// https://leetcode.com/problems/valid-parentheses/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parenthesesMap = new Map();
  parenthesesMap.set("}", "{");
  parenthesesMap.set("]", "[");
  parenthesesMap.set(")", "(");

  let stack = [];
  let i = 0;

  while (i < s.length) {
    if (parenthesesMap.has(s[i])) {
      if (parenthesesMap.get(s[i]) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
    i++;
  }
  return stack.length === 0;
};

console.log(isValid("({}[])"));
