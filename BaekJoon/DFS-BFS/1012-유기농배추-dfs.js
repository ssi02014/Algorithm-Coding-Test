/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/1012
 * 알고리즘: dfs, bfs
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let result = "";

  const createCabbageField = (n, m, positions) => {
    const field = Array.from({ length: m }, () => Array(n).fill(0));

    positions.forEach((position) => {
      const [x, y] = position;

      field[y][x] = 1;
    });

    return field;
  };

  const rangeCheck = (n, m, y, x) => {
    if (x < 0 || x >= n || y < 0 || y >= m) {
      return false;
    }
    return true;
  };

  const dfs = (cabbageField, y, x) => {
    const [n, m] = [cabbageField[0].length, cabbageField.length];

    cabbageField[y][x] = 0;

    moves.forEach((move) => {
      const [dy, dx] = move;
      const [ny, nx] = [dy + y, dx + x];

      if (rangeCheck(n, m, ny, nx) && cabbageField[ny][nx]) {
        dfs(cabbageField, ny, nx);
      }
    });
  };

  for (let i = 1; i < input.length; i++) {
    const [n, m, k] = input[i].split(" ").map(Number);
    const positions = input
      .slice(i + 1, i + k + 1)
      .map((el) => el.split(" ").map(Number));
    const cabbageField = createCabbageField(n, m, positions);
    let count = 0;

    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        if (cabbageField[j][k] === 1) {
          dfs(cabbageField, j, k);
          count++;
        }
      }
    }

    result += `${count}\n`;
    i += k;
  }
  console.log(result);
});
