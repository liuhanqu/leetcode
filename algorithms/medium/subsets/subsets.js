/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// https://leetcode.com/problems/subsets/discuss/27356/5-lines-of-python
var subsets = function(nums) {
  let ret = [[]];
  for (const num of nums) {
    for (let i = 0, len = ret.length; i < len; i++) {
      ret.push([...ret[i], num]);
    }
  }

  return ret;
};

var subsets = function(nums) {
  if (nums.length === 0) {
    return [[]];
  }

  const [tail, ...other] = nums.reverse();

  return subsets(other).concat(subsets(other).map(val => [...val, tail]));
};
