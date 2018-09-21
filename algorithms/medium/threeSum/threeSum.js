// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-medium/29/array-and-strings/75/
// 三数之和

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ret = [];
  const len = nums.length;
  if (len < 3) {
    return ret;
  }
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < l - 2; i++) {
    if (nums[i] > 0) {
      return ret;
    }
    for (let j = i + 1, k = len - 1; j < k; ) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ret.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
};
