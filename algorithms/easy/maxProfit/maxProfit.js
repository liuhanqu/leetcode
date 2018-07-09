// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/55/
// 买卖股票的最佳时机 I

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let buy = prices[0];
  const len = price.length;
  for (let i = 1; i < len; i++) {
    const price = prices[i];
    if (price > buy) {
      profit = Math.max(profit, price - buy);
    } else {
      buy = price;
    }
  }
  return profit;
};

// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/
// 买卖股票的最佳时机 II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var pro = 0;
  var len = prices.length;
  for (var i = 0; i < len; i++) {
    if (prices[i] < prices[i + 1]) {
      pro += prices[i + 1] - prices[i];
    }
  }
  return pro;
};
