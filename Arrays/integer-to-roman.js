// Leetcode
// https://leetcode.com/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanMap = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);

  let res = "";

  romanMap.forEach((value, key) => {
    res = `${res}${value.repeat(Math.floor(num / key))}`;
    num = num % key;
  });
  return res;
};

console.log(intToRoman(3999));
