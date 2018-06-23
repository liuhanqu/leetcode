// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/26/
// 两个数组的交集 II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  const ret = [];

  const len1 = nums1.length;
  const len2 = nums2.length;

  let k = 0;

  for (let i = 0; i < len1; i++) {
    for (let j = k; j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        k = j + 1;
        ret.push(nums1[i]);
        break;
      }
    }
  }

  return ret;
};
