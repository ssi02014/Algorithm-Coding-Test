function solution(maps) {
  const answer = [];
  const [height, width] = [maps.length, maps[0].length];
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let sum = 0;

  const getIsValid = (y, x) => {
    if (x < 0 || y < 0 || x >= width || y >= height || maps[y][x] === "X") {
      return false;
    }
    return true;
  };

  const bfs = (y, x) => {
    const queue = [[y, x]];

    while (queue.length) {
      const [curY, curX] = queue.pop();

      if (maps[curY][curX] === "X") continue;

      sum += +maps[curY][curX];
      maps[curY][curX] = "X";

      moves.forEach(([dy, dx]) => {
        const [ny, nx] = [curY + dy, curX + dx];

        if (getIsValid(ny, nx)) {
          queue.push([ny, nx]);
        }
      });
    }
  };

  maps = maps.map((el) => el.split(""));

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] !== "X") {
        bfs(i, j);

        answer.push(sum);
        sum = 0;
      }
    }
  }

  answer.sort((a, b) => a - b);

  return !answer.length ? [-1] : answer;
}
