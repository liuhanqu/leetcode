// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-medium/50/sorting-and-searching/99/
// 寻找峰值

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  for (var i = 0, len = nums.length; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) return i;
  }
  return nums.length - 1;
};
