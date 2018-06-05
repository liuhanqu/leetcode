// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-medium/50/sorting-and-searching/96/
// 分类颜色

// TODO: 一个仅使用常数空间的一趟扫描算法

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var counts = [0, 0, 0];
  var i, count;
  var j = 0;
  var len = nums.length;

  for (i = 0; i < len; i++) {
    counts[nums[i]] = counts[nums[i]] + 1;
  }

  for (i = 0, len = counts.length; i < len; i++) {
    count = counts[i];
    while (count--) {
      nums[j++] = i;
    }
  }
};
