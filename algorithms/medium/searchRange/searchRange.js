/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const targetRange = [-1, -1];

  const left = nums.indexOf(target);
  if (left === -1) {
    return targetRange;
  }

  const right = nums.lastIndexOf(target);
  return [left, right];
};
