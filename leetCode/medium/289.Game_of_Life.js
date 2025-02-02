/**
 * 289. Game of Life
 * topic: Array, Matrix, Simulation
 * @see https://leetcode.com/problems/game-of-life
 *
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const DEAD = 0;
  const ALIVE = 1;
  const DIRECTIONS = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  const height = board.length;
  const width = board[0].length;
  const cellsToChange = [];

  const isValidRange = (y, x) => {
    return y < 0 || x < 0 || y >= height || x >= width;
  };

  const getLiveNeighborCount = (y, x) => {
    let count = 0;

    for (let i = 0; i < DIRECTIONS.length; i++) {
      const [dy, dx] = DIRECTIONS[i];
      const [ny, nx] = [y + dy, x + dx];

      if (isValidRange(ny, nx)) {
        continue;
      }

      if (board[ny][nx] === ALIVE) {
        count++;
      }
    }

    return count;
  };

  const willCellChange = (currentState, liveNeighbors) => {
    if (currentState === DEAD) {
      return liveNeighbors === 3;
    }
    return liveNeighbors < 2 || liveNeighbors > 3;
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const liveNeighborCount = getLiveNeighborCount(i, j);

      if (willCellChange(board[i][j], liveNeighborCount)) {
        cellsToChange.push([i, j]);
      }
    }
  }

  for (let i = 0; i < cellsToChange.length; i++) {
    const [y, x] = cellsToChange[i];

    board[y][x] = board[y][x] === DEAD ? ALIVE : DEAD;
  }

  return board;
};
