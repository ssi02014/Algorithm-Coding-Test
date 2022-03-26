function solution(m, n, board) {
  let result = 0;

  board = board.map((el) => el.split(""));

  while (true) {
    const removeBlocks = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = board[i][j];

        if (
          current &&
          current === board[i + 1][j] &&
          current === board[i][j + 1] &&
          current === board[i + 1][j + 1]
        ) {
          removeBlocks.push([i, j]);
        }
      }
    }
    if (!removeBlocks.length) {
      [...board].map((row) => row.forEach((column) => !column && result++));
      break;
    }

    for (let i = 0; i < removeBlocks.length; i++) {
      const [row, col] = removeBlocks[i];
      board[row][col] = 0;
      board[row][col + 1] = 0;
      board[row + 1][col] = 0;
      board[row + 1][col + 1] = 0;
    }

    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((v) => !v)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0; k--) {
          if (!board[i][j] && board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
  return result;
}
