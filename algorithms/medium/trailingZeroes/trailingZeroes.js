/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let res = 0;
  for (let i = 5; n / i > 0; i *= 5) {
    res += Math.floor(n / i);
  }
  return res;
};

// https://leetcode.com/problems/factorial-trailing-zeroes/discuss/52373/Simple-CC++-Solution-(with-detailed-explaination)
