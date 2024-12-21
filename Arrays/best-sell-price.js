// Leetcode
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const sellPrice = prices[i];
    if (sellPrice > buyPrice) {
      const currentProfit = sellPrice - buyPrice;
      if (currentProfit > profit) profit = currentProfit;
    } else {
      buyPrice = sellPrice;
    }
  }
  return profit;
};
