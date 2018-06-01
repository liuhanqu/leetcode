// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/62/
// 3的幂

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 1) {
    return true;
  }
  if (n % 3 !== 0 || n === 0) {
    return false;
  }

  return isPowerOfThree(n / 3);
};
