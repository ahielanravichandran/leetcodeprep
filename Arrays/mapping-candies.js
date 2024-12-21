// Leetcode:
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

export const mappingCandies = (candies, extraCandies) => {
  const maxCandyValue = Math.max(...candies);
  return candies.map((candy) => candy >= maxCandyValue - extraCandies);
};
