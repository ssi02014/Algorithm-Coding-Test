function solution(board) {
  const [height, width] = [board.length, board[0].length];
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  const countCheckObj = {
    O: 0,
    X: 0,
  };
  const winCheckObj = {
    O: false,
    X: false,
  };

  const getIsValid = (y, x, curNode) => {
    if (y < 0 || x < 0 || y >= 3 || x >= 3 || board[y][x] !== curNode) {
      return false;
    }
    return true;
  };

  const dfs = (y, x, curNode, count, direction) => {
    // count가 3이되면 승리했음을 의미
    if (count === 3) {
      winCheckObj[curNode] = true;
      return;
    }

    // direction이 있는 경우에는 해당 방향으로만 체크
    if (direction) {
      const [dy, dx] = direction;
      const [ny, nx] = [y + dy, x + dx];

      if (getIsValid(ny, nx, curNode)) {
        dfs(ny, nx, curNode, count + 1, direction);
      }
      return;
    }

    // direction이 없는 경우 모든 방향 체크
    moves.forEach((move) => {
      const [dy, dx] = move;
      const [ny, nx] = [y + dy, x + dx];

      if (getIsValid(ny, nx, curNode)) {
        dfs(ny, nx, curNode, count + 1, move);
      }
    });
  };

  // board 순회
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (board[i][j] !== ".") {
        dfs(i, j, board[i][j], 1, null);
        countCheckObj[board[i][j]]++; // count 체크
      }
    }
  }

  // 실패 case
  if (countCheckObj.X > countCheckObj.O) return 0;
  if (countCheckObj.O - countCheckObj.X > 1) return 0;
  if (winCheckObj.O && winCheckObj.X) return 0;
  if (winCheckObj.O && countCheckObj.O === countCheckObj.X) return 0;
  if (winCheckObj.X && countCheckObj.O > countCheckObj.X) return 0;

  return 1;
}
