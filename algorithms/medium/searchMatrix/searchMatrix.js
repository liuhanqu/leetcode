/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  const row = matrix.length;
  const col = matrix[0].length;

  let x = 0,
    y = row - 1;

  while (x < col && y >= 0) {
    if (matrix[y][x] === target) {
      return true;
    }
    if (matrix[y][x] < target) {
      x++;
    } else {
      y--;
    }
  }

  return false;
};
