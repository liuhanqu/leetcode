// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/24/design/58/
// Shuffle an Array

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const nums = this.nums.slice();
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    const idx = Math.floor(Math.random() * (len - i));
    const tmp = nums[idx];
    nums[idx] = nums[len - 1 - i];
    nums[len - 1 - i] = tmp;
  }
  return nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
