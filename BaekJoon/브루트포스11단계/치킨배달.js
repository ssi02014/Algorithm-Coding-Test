const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const graph = [];
  const visited = Array(13).fill(false);
  const [home, chicken] = [[], []];
  let result = Infinity;

  for (let i = 1; i <= n; i++) {
    graph[i - 1] = input[i].split(" ").map(Number);
  }

  checkLocation();
  dfs(0, 0);

  console.log(result);

  function checkLocation() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === 1) home.push([i + 1, j + 1]);
        else if (graph[i][j] === 2) chicken.push([i + 1, j + 1]);
      }
    }
  }

  function distance(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }

  function dfs(idx, selected) {
    if (selected === m) {
      let tempResult = 0;
      for (let i = 0; i < home.length; i++) {
        let tempDist = Infinity;

        for (let j = 0; j < chicken.length; j++) {
          if (visited[j]) {
            tempDist = Math.min(tempDist, distance(home[i], chicken[j]));
          }
        }
        tempResult += tempDist;
      }
      result = Math.min(result, tempResult);
    }

    if (idx === chicken.length) return;

    // 프렌차이즈 선정
    visited[idx] = true;
    dfs(idx + 1, selected + 1);

    // 프렌차이즈 선정 X
    visited[idx] = false;
    dfs(idx + 1, selected);
  }
});
