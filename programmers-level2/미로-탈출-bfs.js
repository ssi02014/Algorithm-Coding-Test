function solution(maps) {
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  // 유효한 범위인지 체크
  const isValidRange = (x, y) => {
    if (x < 0 || y < 0 || x >= maps.length || y >= maps[0].length) {
      return false;
    }
    return true;
  };

  const bfs = (x, y, target) => {
    const visited = Array.from({ length: maps.length }, () =>
      Array(maps[0].length).fill(0)
    );
    const queue = [[x, y, 0]];

    visited[x][y] = 1;

    while (queue.length) {
      const [curX, curY, curCnt] = queue.shift();

      if (maps[curX][curY] === target) return curCnt;

      moves.forEach(([dx, dy]) => {
        const [nx, ny] = [curX + dx, curY + dy];

        // 다음 움직이는 칸이 유효한 범위이고, 방문하지 않았으며, 벽이 아님
        if (isValidRange(nx, ny) && !visited[nx][ny] && maps[nx][ny] !== "X") {
          queue.push([nx, ny, curCnt + 1]);
          visited[nx][ny] = 1;
        }
      });
    }
  };

  const searchTargetDistance = (start, target) => {
    let result = 0;

    for (let i = 0; i < maps.length; i++) {
      for (let j = 0; j < maps[i].length; j++) {
        if (maps[i][j] === start) {
          result = bfs(i, j, target);
        }
      }
    }
    return result;
  };

  // 본문
  const targetLeverDistance = searchTargetDistance("S", "L");
  const targetExitDistance = searchTargetDistance("L", "E");

  if (!targetLeverDistance || !targetExitDistance) return -1;
  return targetLeverDistance + targetExitDistance;
}
