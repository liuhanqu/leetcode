/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const m = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let res = [];

  for (let i = 0, len = digits.length; i < len; i++) {
    const d = digits.charAt(i);
    const chars = m[d];

    if (res.length === 0) {
      res = chars.split('');
    } else {
      const tmp = [];
      for (let j = 0, rl = res.length; j < rl; j++) {
        for (let k = 0, cl = chars.length; k < cl; k++) {
          tmp.push(res[j] + chars[k]);
        }
      }
      res = tmp;
    }
  }

  return res;
};
