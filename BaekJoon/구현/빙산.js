const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [row, column] = input[0].split(" ").map(Number);
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  const map = [];
  let visited = Array.from(Array(row), () => Array(column).fill(false));
  let year = 0;

  for (let i = 1; i <= row; i++) {
    map[i - 1] = input[i].split(" ").map(Number);
  }

  while (true) {
    let count = 0;
    let result = false;

    visited = Array.from(Array(row), () => Array(column).fill(false));

    for (let i = 1; i < row - 1; i++) {
      for (let j = 1; j < column - 1; j++) {
        if (map[i][j] && !visited[i][j]) {
          count++;

          if (count === 2) {
            result = true;
            break;
          }
          dfs(i, j);
        }
      }
    }

    if (result) break;
    if (!count) {
      year = 0;
      break;
    }

    melt();
    year++;
  }

  console.log(year);

  function melt() {
    const copyMap = [];

    for (let i = 0; i < row; i++) {
      copyMap.push([...map[i]]);
    }

    // i가 y j가 x
    for (let i = 1; i < row - 1; i++) {
      for (let j = 1; j < column - 1; j++) {
        if (copyMap[i][j]) {
          let cnt = 0;

          for (let k = 0; k < 4; k++) {
            const nx = j + dx[k];
            const ny = i + dy[k];

            if (!copyMap[ny][nx]) cnt++;
          }
          map[i][j] = Math.max(copyMap[i][j] - cnt, 0);
        }
      }
    }
  }

  function dfs(y, x) {
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (rangeCheck(ny, nx)) {
        if (map[ny][nx] && !visited[ny][nx]) dfs(ny, nx);
      }
    }
  }

  function rangeCheck(y, x) {
    if (x < 0 || y < 0 || x >= column || y >= row) {
      return false;
    }
    return true;
  }
});
