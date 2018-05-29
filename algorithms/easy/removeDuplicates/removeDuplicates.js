// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/
// 从排序数组中删除重复项

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = 1;
  for (var i = 1, nlen = nums.length; i < nlen; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[len] = nums[i];
      len++;
    }
  }

  return len;
};
