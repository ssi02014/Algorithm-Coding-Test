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
  let result = "";

  for (let i = 1; i <= k; i++) {
    const [y1, x1, y2, x2] = input[i].split(" ").map(Number);

    for (let j = x1; j < x2; j++) {
      for (let k = y1; k < y2; k++) {
        graph[j][k] = 1;
      }
    }
  }

  function solution() {
    let countList = [];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!graph[i][j]) countList.push(dfs(i, j));
      }
    }

    countList.sort((a, b) => a - b);

    result += countList.length + "\n";
    result += countList.join(" ");

    console.log(result);
  }

  function rangeCheck(i, j) {
    if (i >= 0 && i < m && j >= 0 && j < n) {
      return true;
    }
    return false;
  }

  function dfs(x, y) {
    const stack = [];
    let num = 1;

    stack.push([x, y]);
    graph[x][y] = 1;

    while (stack.length !== 0) {
      const [curX, curY] = stack.pop();

      for (let k = 0; k < dx.length; k++) {
        const nx = curX + dx[k];
        const ny = curY + dy[k];

        if (rangeCheck(nx, ny) && graph[nx][ny] === 0) {
          stack.push([nx, ny]);
          graph[nx][ny] = 1;
          num += 1;
        }
      }
    }
    return num;
  }

  solution();
});
