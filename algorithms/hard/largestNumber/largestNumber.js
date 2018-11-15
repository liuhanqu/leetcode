/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums = nums.sort((a, b) => {
    a = a + '';
    b = b + '';

    if (a + b < b + a) {
      return 1;
    } else if (a + b > b + a) {
      return -1;
    } else {
      return 0;
    }
  });
  return nums[0] === 0 ? '0' : nums.join('');
};
