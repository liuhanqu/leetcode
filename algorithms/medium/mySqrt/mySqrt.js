/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // return Math.floor(Math.sqrt(x, 2));

  if (x <= 1) {
    return x;
  }

  let i = 1;

  for (; i <= x / 2; i++) {
    if (x === i ** 2) {
      return i;
    }
    if (x < i ** 2) {
      return i - 1;
    }
  }

  return i - 1;
};
