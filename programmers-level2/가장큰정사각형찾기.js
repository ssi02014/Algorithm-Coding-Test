function solution(board) {
  const column = board.length;
  const row = board[0].length;
  let result = board[0][0];
  let min = 0;

  for (let i = 1; i < column; i++) {
    for (let j = 1; j < row; j++) {
      if (board[i][j] === 1) {
        min = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);
        board[i][j] = 1 + min;
        result = Math.max(result, board[i][j]);
      }
    }
  }
  return result * result;
}
