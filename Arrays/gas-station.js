// Leetcode
// https://leetcode.com/problems/gas-station/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var findSum = (arr) => {
  return arr.reduce((acc, value) => {
    return acc + value;
  }, 0);
};

var canCompleteCircuit = function (gas, cost) {
  if (findSum(gas) < findSum(cost)) return -1;

  let total = 0;
  let index = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    if (total < 0) {
      total = 0;
      index = i + 1;
    }
  }
  return index;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
