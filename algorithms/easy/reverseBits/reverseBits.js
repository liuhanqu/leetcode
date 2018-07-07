// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/66/
// 颠倒二进制位

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  return parseInt(
    n
      .toString(2)
      .padStart(32, '0')
      .split('')
      .reverse()
      .join(''),
    2
  );
};
