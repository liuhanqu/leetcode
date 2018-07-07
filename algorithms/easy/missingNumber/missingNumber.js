// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/69/
// 缺失数字

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length;
  const totalSum = ((1 + len) * len) / 2;
  const actualSum = nums.reduce((total, cur) => (total += cur), 0);
  return totalSum - actualSum;
};
