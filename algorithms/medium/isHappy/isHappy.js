/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  function getSum(n) {
    let sum = 0;
    while (n / 10) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    return sum;
  }

  const nset = new Set();

  while (!nset.has(n)) {
    nset.add(n);
    n = getSum(n);
    if (n === 1) {
      return true;
    }
  }
  return false;
};
