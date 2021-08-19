const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = input.shift();
  const [dx, dy] = [[-1, 0, 1, 0], [0, 1, 0, -1]];
  let [m, n, k] = [0, 0, 0];
  let graph = [];
  //m = 10이면 height = 10, n = 8이면 width = 8

  for (let i = 0; i < t; i++) {
    insertValueGraph()
    solution();
  }

  function solution() {
    let earthWorm = 0;
    
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === 1) {
          dfs(i, j);
          earthWorm += 1;
        }
      }
    }

    console.log(earthWorm);
  }

  function dfs(x, y) {
    if (rangeCheck(x, y)) {
      if (graph[x][y] === 1) {
        graph[x][y] = 2;

        for (let i = 0; i < dx.length; i++) {
          dfs(x + dx[i], y + dy[i]);
        }
      }
    }
  }

  function insertValueGraph() {
    [m, n, k] = input.shift().split(" ").map(Number);
    const nodes = input.splice(0, k);
    
    //그래프 초기화할때는 heigth(m)가 첫번째, width(n)가 2번째로 들어가야됨
    graph = Array.from(Array(m), () => new Array(n).fill(0));

    nodes.map(el => {
      const [x, y] = el.split(" ").map(Number);
      graph[x][y] = 1;
    });
  }

  function rangeCheck(x, y) {
    if (x >= 0 && x < m && y >= 0 && y < n) return true;
    return false;
  }
});
