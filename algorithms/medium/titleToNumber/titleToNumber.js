/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  const m = {};
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((ch, idx) => {
    m[ch] = idx + 1;
  });

  let l = s.length,
    i = 0,
    res = 0;
  while (l--) {
    const num = m[s.charAt(l)];
    res = res + num * 26 ** i;
    i++;
  }

  return res;
};
