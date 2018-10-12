/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  const isNegative = numerator * denominator < 0;

  let pnumerator = Math.abs(numerator);
  let pdenominator = Math.abs(denominator);

  const integer = Math.floor(pnumerator / pdenominator);

  let res = integer + '';

  if (isNegative) {
    res = '-' + res;
  }

  pnumerator = pnumerator % pdenominator;

  if (pnumerator === 0) {
    return res;
  }

  res += '.';

  let idx = res.length;
  let m = new Map();

  while (pnumerator !== 0) {
    m.set(pnumerator, idx++);
    pnumerator *= 10;
    res += Math.floor(pnumerator / pdenominator);
    pnumerator %= pdenominator;
    if (m.has(pnumerator)) {
      idx = m.get(pnumerator);
      res = res.slice(0, idx) + '(' + res.slice(idx) + ')';
      break;
    }
  }

  return res;
};

// 判断余数是否重复出现
// 是 -> 小数开始循环
