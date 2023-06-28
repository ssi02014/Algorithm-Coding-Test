const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, k] = input[0].split(" ").map(Number);
  const map = Array.from({ length: n }, () => Array(m).fill(0));
  const trashList = input.slice(1).map((el) => el.split(" ").map(Number));
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let count = 0;
  let result = 0;

  trashList.forEach((el) => {
    const [y, x] = el;

    map[y - 1][x - 1] = 1;
  });

  const isValid = (y, x) => {
    if (x < 0 || x >= m || y < 0 || y >= n || !map[y][x]) {
      return false;
    }
    return true;
  };

  const dfs = (startNode) => {
    const [curY, curX] = startNode;

    map[curY][curX] = 0;
    count++;

    moves.forEach((move) => {
      const [dy, dx] = move;
      const [ny, nx] = [dy + curY, dx + curX];

      if (isValid(ny, nx)) {
        dfs([ny, nx]);
      }
    });
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) {
        dfs([i, j], 1);
        result = Math.max(result, count);
        count = 0;
      }
    }
  }

  console.log(result);
});

/**
3 4 5
3 2
2 2
3 1
2 3
1 1
 */
