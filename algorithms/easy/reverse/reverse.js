// description: https://leetcode-cn.com/problems/reverse-integer/description/
// 反转整数

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var ret = 0;
  while (x) {
    ret = ret * 10 + x % 10;
    x = parseInt(x / 10);
  }
  if (ret > Math.pow(2, 31) - 1 || ret < Math.pow(-2, 31)) {
    ret = 0;
  }
  return ret;
};
