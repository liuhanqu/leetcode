// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/63/
// 罗马数字转整数

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let len = s.length;
  let prev = 0;
  let sum = 0;
  while (len--) {
    const roman = s.charAt(len);
    const integer = romanMap[roman];
    if (integer < prev) {
      sum -= integer;
    } else {
      sum += integer;
    }
    prev = integer;
  }
  return sum;
};
