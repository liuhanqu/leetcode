/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var i1 = 0;
  var i2 = 0;
  var len1 = nums1.length;
  var len2 = nums2.length;

  var nums = [];

  while (i1 < len1 && i2 < len2) {
    if (nums1[i1] < nums2[i2]) {
      nums.push(nums1[i1]);
      i1 = i1 + 1;
    } else {
      nums.push(nums2[i2]);
      i2 = i2 + 1;
    }
  }
  nums = nums.concat(nums1.slice(i1), nums2.slice(i2));

  var mid = Math.floor((len1 + len2) / 2);

  return (len1 + len2) % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
};
