// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/68/
// 有效的括号

var isValid = function(s) {
  const charMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const leftChars = ['(', '[', '{'];

  const stash = [];

  for (const char of s) {
    if (leftChars.indexOf(char) !== -1) {
      stash.push(char);
      continue;
    }
    const leftChar = charMap[char];
    if (leftChar !== stash[stash.length - 1]) {
      return false;
    }
    stash.pop();
  }
  return stash.length === 0;
};
