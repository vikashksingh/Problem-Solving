/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
  const len =
    matrix.length < matrix[0].length ? matrix.length : matrix[0].length;
  const mins = [];
  for (let i = 0; i < matrix.length; i++) {
    mins[i] = Math.min(...matrix[i]);
  }
  const maxs = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
      max = Math.max(max, matrix[i][j]);
    }
    max[j] = max;
  }
  const result = [];
  for (let i = 0; i < len; i++) {
    if (mins[i] == maxs[i]) result.push(mins[i]);
  }
  return result;
};

luckyNumbers([
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17]
]);
