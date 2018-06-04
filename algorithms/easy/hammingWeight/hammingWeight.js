// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/64/
// 位1的个数

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var sn = n.toString(2);
  var count = 0;
  for (var i = 0, len = sn.length; i < len; i++) {
    if (sn.charAt(i) === "1") {
      count = count + 1;
    }
  }
  return count;
};
