// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/57/
// 打家劫舍

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if (len < 3) {
    return Math.max.call(null, 0, ...nums);
  }
  const tmps = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < len; i++) {
    tmps[i] = Math.max(tmps[i - 2] + nums[i], tmps[i - 1]);
  }

  return tmps[len - 1];
};
