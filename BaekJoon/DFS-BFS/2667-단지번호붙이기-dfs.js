const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const n = +input[0];
  const map = input.slice(1).map((el) => el.split("").map(Number));
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const result = [];
  let count = 0;

  const rangeCheck = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= n) {
      return false;
    }
    return true;
  };

  const dfs = (i, j) => {
    map[i][j] = 0;
    count++;

    moves.forEach(([dx, dy]) => {
      const [nx, ny] = [i + dx, j + dy];

      if (rangeCheck(nx, ny) && map[nx][ny]) {
        dfs(nx, ny);
      }
    });
  };

  const solution = () => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (map[i][j] === 1) {
          dfs(i, j, 1);

          result.push(count);
          count = 0;
        }
      }
    }
    result.sort((a, b) => a - b);

    console.log(result.length);
    console.log(result.join("\n"));
  };

  solution();
});
