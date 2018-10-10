/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let res = 0;
  if (n >= 0) {
    res = x ** n;
  } else {
    res = 1 / x ** Math.abs(n);
  }

  return Math.round(res * Math.pow(10, 5)) / Math.pow(10, 5);
};
