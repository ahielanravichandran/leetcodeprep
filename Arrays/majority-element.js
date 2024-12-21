/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   const map = {};
//   nums.forEach((num) => {
//     if (!map[num]) {
//       map[num] = 1;
//     } else {
//       map[num] = map[num] + 1;
//     }
//   });

//   let keys = Object.keys(map);
//   let majorityElement = keys[0];
//   let maxVal = map[majorityElement];

//   for (let i = 1; i < keys.length; i++) {
//     if (maxVal < map[keys[i]]) {
//       maxVal = map[keys[i]];
//       majorityElement = keys[i];
//     }
//   }
//   return Number(majorityElement);
// };

// Better version - Boyer-Moore

var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  let majorityElement = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majorityElement) {
      count++;
    } else if (count === 0) {
      majorityElement = nums[i];
    } else {
      count--;
    }
  }
  return majorityElement;
};

console.log(majorityElement([2, 1, 1, 1]));
