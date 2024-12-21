// Leetcode:
// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

// this logic failed for array with 1,2,3 lengths
// export const removeElement = (nums, val) => {

//   if (!nums || nums.length === 0 ) return 0
//   if (nums.length === 1 && nums[0] === val) return 0
//   if (nums.length === 1 && nums[0] !== val) return 1

//   // First element in the array
//   let head = 0;
//   // Last element in the array
//   let tail = nums.length - 1;

//   while ((head + 1 !== tail) && head !== tail) {
//     // Check if the current head value is equal to val
//     if (nums[head] === val) {
//       // If so, swap it with tail, if tail is not equal to val
//       if (nums[tail] !== val) {
//         // swap logic
//         nums[head] = nums[head] + nums[tail];
//         nums[tail] = nums[head] - nums[tail];
//         nums[head] = nums[head] - nums[tail];
//         tail--;
//       } else {
//         while (nums[tail] === val) {
//           tail--;
//         }
//         nums[head] = nums[head] + nums[tail];
//         nums[tail] = nums[head] - nums[tail];
//         nums[head] = nums[head] - nums[tail];
//         tail--;
//       }
//     } else {
//        head++;
//     }
//   }
//   return {nums, head, tail};
// };

const removeElement = (nums, val) => {
  if (!nums || nums.length === 0) return 0;

  let i = 0; // Pointer to place the next valid element

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  // The length of the array without the `val` elements
  return i;
}


const nums = [1, 2, 1];
const val = 1;
const { nums: res, head, tail } = removeElement(nums, val);
console.log(res);
console.log({ head, tail })
