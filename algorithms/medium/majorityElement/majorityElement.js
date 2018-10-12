/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const len = nums.length;
  const obj = {};
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }
  let ret;
  Object.keys(obj).some(k => {
    if (obj[k] > Math.floor(len / 2)) {
      ret = +k;
      return true;
    }
  });

  return ret;
};
