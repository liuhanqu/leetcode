/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  if (k > nums.length) {
    return;
  }

  const m = new Map();

  for (let num of nums) {
    const val = (m.get(num) || 0) + 1;
    m.set(num, val);
  }

  const sortNums = Array.from(m.keys(m)).sort((a, b) => m.get(b) - m.get(a));

  return sortNums.slice(0, k);
};
