// description: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/67/
// 帕斯卡三角形

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const ret = [];
  for (let i = 1; i <= numRows; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      if (j === i - 1) {
        row.push(1);
      } else {
        const prev = ret[i - 2];
        row[j] = prev[j - 1] + prev[j];
      }
    }
    ret.push(row);
  }
  return ret;
};
