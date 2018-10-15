/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const tmp = [];

  for (let i = 0; i < m; i++) {
    tmp[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        tmp[i][j] = 1;
      } else {
        tmp[i][j] = tmp[i - 1][j] + tmp[i][j - 1];
      }
    }
  }

  return tmp[m - 1][n - 1];
};
