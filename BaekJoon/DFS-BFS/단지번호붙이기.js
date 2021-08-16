const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = parseInt(input[0]);
  const graph = Array.from(Array(n), () => new Array(n));
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  let home = 0;

  const insertGraph = () => {
    for (let i = 1; i <= n; i++) {
      graph[i - 1] = input[i].split("").map(Number);
    }
  };

  const rangeCheck = (x, y) => {
    if (x >= 0 && x < n && y >= 0 && y < n) return true;
    return false;
  };

  const dfs = (x, y) => {
    if (rangeCheck(x, y) && graph[x][y] === 1) {
      graph[x][y] = 0;
      home += 1;

      for (let i = 0; i < dx.length; i++) {
        dfs(x + dx[i], y + dy[i]);
      }
    }
  };

  const solution = () => {
    const result = [];

    insertGraph();

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][j] === 1) {
          dfs(i, j);

          result.push(home);
          home = 0;
        }
      }
    }
    result.sort((a, b) => a - b);

    console.log(result.length);
    console.log(result.join("\n"));
  };

  solution();
});
