function isValid(board, x, y) {
  if (
    x < 0 ||
    y < 0 ||
    x > board.length - 1 ||
    y > board.length - 1 ||
    board[x][y] === 1 ||
    board[x][y] === 2
  ) {
    return false;
  }
  return true;
}

function changeDangerArea(dangerAreaCount, board, x, y) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [1, 0, -1, 1, -1, 1, 0, -1];

  for (let i = 0; i < dx.length; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (isValid(board, nx, ny)) {
      board[nx][ny] = 2;
      dangerAreaCount++;
    }
  }

  return dangerAreaCount;
}

function solution(board) {
  let boardSize = 0;
  let dangerAreaCount = 0;

  for (let i = 0; i < board.length; i++) {
    boardSize += board[i].length;

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        dangerAreaCount = changeDangerArea(++dangerAreaCount, board, i, j);
      }
    }
  }

  return boardSize - dangerAreaCount;
}
