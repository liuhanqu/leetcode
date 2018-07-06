// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/65/
// 汉明距离

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).replace(/0/g, "").length;
};
