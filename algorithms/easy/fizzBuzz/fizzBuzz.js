// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/60/
// Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var ret = [];
  var tmp = "";
  for (var i = 1; i <= n; i++) {
    tmp = "" + i;
    if (i % 3 === 0) {
      tmp = "Fizz";
    } else if (i % 5 === 0) {
      tmp = "Buzz";
    }
    if (i % 3 === 0 && i % 5 === 0) {
      tmp = "FizzBuzz";
    }
    ret.push(tmp);
  }
  return ret;
};
