// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/54/
// 爬楼梯

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const tmps = [1, 2];
  for (let i = 2; i < n; i++) {
    tmps[i] = tmps[i - 2] + tmps[i - 1];
  }
  return tmps[n - 1];
};
