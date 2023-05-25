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

  const getIsValid = (y, x) => {
    if (x < 0 || y < 0 || x >= n || y >= n || !map[y][x]) {
      return false;
    }
    return true;
  };

  const dfs = (y, x) => {
    map[y][x] = 0;
    count++;

    moves.forEach(([dy, dx]) => {
      const [ny, nx] = [y + dy, x + dx];

      if (getIsValid(ny, nx)) {
        dfs(ny, nx);
      }
    });
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === 1) {
        dfs(i, j);

        result.push(count);
        count = 0;
      }
    }
  }
  result.sort((a, b) => a - b);

  console.log(`${result.length}\n${result.join("\n")}`);
});
