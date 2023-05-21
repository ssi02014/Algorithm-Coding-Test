function solution(board) {
  const HEIGHT = board.length;
  const WIDTH = board[0].length;
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const visited = Array.from({ length: HEIGHT }, () =>
    Array(WIDTH).fill(false)
  );

  const findStartPosition = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === "R") return [i, j];
      }
    }
  };

  const getIsValid = (y, x) => {
    if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT || board[y][x] === "D") {
      return false;
    }
    return true;
  };

  const bfs = (startNode, count) => {
    const queue = [[...startNode, count]];

    while (queue.length) {
      const [curY, curX, curCount] = queue.shift();

      if (board[curY][curX] === "G") return curCount;

      // 상, 하, 좌, 우 네 방향 탐색
      moves.forEach((move) => {
        const [dy, dx] = move;
        let [ny, nx] = [curY, curX];

        // 미끄러지면서 이동
        while (getIsValid(ny + dy, nx + dx)) {
          ny += dy;
          nx += dx;
        }

        // 방문 상태 확인 후 queue에 push
        if (!visited[ny][nx]) {
          visited[ny][nx] = true;
          queue.push([ny, nx, curCount + 1]);
        }
      });
    }
  };

  return bfs(findStartPosition(), 0) ?? -1;
}
