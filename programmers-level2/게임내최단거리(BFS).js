function solution(maps) {
  const HEIGHT = maps.length;
  const WIDTH = maps[0].length;
  const moves = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let result = -1;

  const getIsValid = (y, x) => {
    if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT || !maps[y][x]) {
      return false;
    }
    return true;
  };

  const bfs = (start, end) => {
    const queue = [[start, end, 1]];

    while (queue.length) {
      const [curY, curX, curCount] = queue.shift();

      if (curY === HEIGHT - 1 && curX === WIDTH - 1) {
        result = curCount;
        return;
      }

      moves.forEach((move) => {
        const [dy, dx] = move;
        const [ny, nx] = [curY + dy, curX + dx];

        if (getIsValid(ny, nx)) {
          queue.push([ny, nx, curCount + 1]);
          maps[ny][nx] = 0;
        }
      });
    }
  };

  bfs(0, 0);

  return result;
}
