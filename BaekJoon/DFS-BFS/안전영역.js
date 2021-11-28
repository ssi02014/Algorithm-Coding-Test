const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const [dx, dy] = [
  [1, -1, 0, 0],
  [0, 0, 1, -1],
];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = input[0];
  const countList = [];
  let graph = [];

  for (let i = 1; i <= n; i++) {
    graph[i - 1] = input[i].split(" ").map(Number);
  }

  let tempGraph = JSON.parse(JSON.stringify(graph));
  solution(tempGraph);

  function solution(tempGraph) {
    let count = 0;

    for (let i = 1; i < 101; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
          if (graph[j][k] > i) {
            dfs(j, k, i);
            count += 1;
          }
        }
      }
      countList.push(count);
      count = 0;
      graph = JSON.parse(JSON.stringify(tempGraph));
    }

    const maxCount = Math.max(...countList);
    if (!maxCount) console.log(1);
    else console.log(maxCount);
  }

  function dfs(x, y, heigth) {
    if (rangeCheck(x, y) && graph[x][y] > heigth) {
      graph[x][y] = -1;
      for (let i = 0; i < dx.length; i++) {
        dfs(x + dx[i], y + dy[i], heigth);
      }
    }
  }

  function rangeCheck(x, y) {
    if (x < 0 || y < 0 || x >= n || y >= n) return false;
    return true;
  }
});
