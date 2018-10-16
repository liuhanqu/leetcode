/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const max = amount + 1;

  const dp = Array(amount + 1).fill(max);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

// https://leetcode.com/problems/coin-change/solution/

// 寻求子最优解
// 缓存子解

// F(S) = F(S−C) + 1
