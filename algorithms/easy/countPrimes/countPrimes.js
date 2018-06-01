// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/61/
// 计数质数

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (var i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var count = 0;
  for (var i = 1; i < n; i++) {
    if (isPrime(i)) {
      count = count + 1;
    }
  }
  return count;
};
