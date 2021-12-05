const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [m, n, k] = input[0].split(" ").map(Number);
  const graph = Array.from(Array(m), () => Array(n).fill(0));
  const [dx, dy] = [
    [-1, 1, 0, 0],
    [0, 0, -1, 1],
  ];
  const countList = [];
  let count = 0;
  let result = "";

  for (let i = 1; i <= k; i++) {
    const [y1, x1, y2, x2] = input[i].split(" ").map(Number);

    for (let j = x1; j < x2; j++) {
      for (let k = y1; k < y2; k++) {
        graph[j][k] = 1;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === 0) {
        countList.push(dfs(i, j));
        count = 0;
      }
    }
  }

  result += countList.length + "\n";
  result += countList.sort((a, b) => a - b).join(" ");

  console.log(result);

  function rangeCheck(i, j) {
    if (i >= 0 && i < m && j >= 0 && j < n) {
      return true;
    }
    return false;
  }

  function dfs(x, y) {
    if (rangeCheck(x, y) && graph[x][y] === 0) {
      graph[x][y] = 1;
      count += 1;
      for (let i = 0; i < dx.length; i++) {
        dfs(x + dx[i], y + dy[i]);
      }
    }
    return count;
  }
});
