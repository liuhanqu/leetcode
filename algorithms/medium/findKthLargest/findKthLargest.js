// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-medium/50/sorting-and-searching/98/
// 数组中的第K个最大元素

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  var snums = nums.sort((a, b) => a - b);
  return snums[nums.length - k];
};
