/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  if (matrix.length === 0) {
    return matrix;
  }
  const rows = new Set();
  const cols = new Set();

  for (let i = 0, len = matrix.length; i < len; i++) {
    for (let j = 0, l = matrix[i].length; j < l; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let i = 0, len = matrix.length; i < len; i++) {
    if (rows.has(i)) {
      for (let j = 0, l = matrix[i].length; j < l; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 0, len = matrix[0].length; j < len; j++) {
    if (cols.has(j)) {
      for (let i = 0, l = matrix.length; i < l; i++) {
        matrix[i][j] = 0;
      }
    }
  }
};
