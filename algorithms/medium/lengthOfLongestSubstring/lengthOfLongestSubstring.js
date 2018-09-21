/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length;
  }
  let substr1 = '';
  let substr2 = '';
  for (let i = 0, len = s.length; i < len; i++) {
    const char = s[i];
    if (!substr2.includes(char)) {
      substr2 += char;
      continue;
    }
    if (substr1.length < substr2.length) {
      substr1 = substr2;
    }
    substr2 += char;
    substr2 = substr2.slice(substr2.indexOf(char) + 1);
  }

  return Math.max(substr2.length, substr1.length);
};
