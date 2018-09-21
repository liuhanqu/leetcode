/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const len = strs.length;
  if (len === 0) {
    return [];
  }
  if (len === 1) {
    return [strs];
  }
  const obj = {};

  for (let i = 0; i < len; i++) {
    const str = strs[i];
    const key = str
      .split('')
      .sort((a, b) => a > b)
      .join('');
    obj[key] = (obj[key] || []).concat(strs[i]);
  }
  const ret = [];
  Object.keys(obj).forEach(key => {
    ret.push(obj[key]);
  });
  return ret;
};
