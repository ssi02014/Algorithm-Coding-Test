/**
 * 999. Available Captures for Rook
 * topic: Array, Matrix, Simulation
 * @see https://leetcode.com/problems/available-captures-for-rook
 *
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const DIRECTIONS = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
  const length = 8;
  let count = 0;

  const search = (y, x, type) => {
    const [dy, dx] = DIRECTIONS[type];
    let [nextY, nextX] = [y + dy, x + dx];

    while (nextY >= 0 && nextY < length && nextX >= 0 && nextX < length) {
      if (board[nextY][nextX] === "B") break;
      if (board[nextY][nextX] === "p") {
        count++;
        break;
      }
      nextY += dy;
      nextX += dx;
    }
  };

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const isRook = board[i][j] === "R";

      if (isRook) {
        // 동
        search(i, j, "E");

        // 서
        search(i, j, "W");

        // 남
        search(i, j, "S");

        // 북
        search(i, j, "N");
      }
    }
  }
  return count;
};
