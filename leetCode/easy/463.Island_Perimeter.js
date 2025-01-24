/**
 * topic: Array, Depth-First Search, Breadth-First Search, Matrix
 * @see https://leetcode.com/problems/island-perimeter
 *
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const hight = grid.length;
  const width = grid[0].length;
  let count = 0;

  for (let i = 0; i < hight; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 1) {
        // 동
        if (j === width - 1 || (j < width - 1 && grid[i][j + 1] === 0)) {
          count++;
        }

        // 서
        if (j === 0 || (j > 0 && grid[i][j - 1] === 0)) {
          count++;
        }
        // 남
        if (i === hight - 1 || (i < hight - 1 && grid[i + 1][j] === 0)) {
          count++;
        }

        // 북
        if (i === 0 || (i > 0 && grid[i - 1][j] === 0)) {
          count++;
        }
      }
    }
  }
  return count;
};
