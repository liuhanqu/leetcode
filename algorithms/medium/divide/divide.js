/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const pdividend = Math.abs(dividend);
  const pdivisor = Math.abs(divisor);

  if (pdivisor > pdividend) {
    return 0;
  }

  let i = 1;
  let tmp = pdivisor;

  if (pdivisor === 1) {
    i = pdividend;
  } else {
    for (; i < Number.MAX_SAFE_INTEGER; i++) {
      if (tmp === pdividend) {
        break;
      }
      if (tmp > pdividend) {
        i--;
        break;
      }
      tmp += pdivisor;
    }
  }

  if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) {
    return i < Math.pow(2, 31) - 1 ? i : Math.pow(2, 31) - 1;
  }

  return -i >= -Math.pow(2, 31) ? -i : Math.pow(2, 31) - 1;
};
