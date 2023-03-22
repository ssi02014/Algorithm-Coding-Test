const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(" ").map(Number));
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let result = 0;
  let count = 0;
  let max = 0;

  const rangeCheck = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= m) {
      return false;
    }
    return true;
  };

  const dfs = (x, y) => {
    if (!rangeCheck(x, y) || !map[x][y]) return false;

    map[x][y] = 0;
    count++;

    moves.forEach((move) => {
      const [dx, dy] = move;
      const [nx, ny] = [x + dx, y + dy];

      dfs(nx, ny);
    });

    return true;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j)) {
        result++;
        max = Math.max(max, count);
        count = 0;
      }
    }
  }

  console.log(`${result}\n${max}`);
});
