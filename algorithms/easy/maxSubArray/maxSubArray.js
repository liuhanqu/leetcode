// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/56/
// 最大子序和

//只要前面的和小于0，那么后面的数加上前面的和就一定比自身小，所以又重新求和，并和之前的最大子序和比较，取最大值

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let tmp = 0;
  let max = Number.MIN_SAFE_INTEGER;
  if (nums.length === 1) {
    return nums[0];
  }
  for (const num of nums) {
    if (tmp < 0) {
      tmp = num;
    } else {
      tmp += num;
    }
    max = Math.max(tmp, max);
  }
  return max;
};
