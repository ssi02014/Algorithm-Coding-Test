/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/21736
 * 알고리즘: DFS, BFS
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
  const [n, m] = input[0].split(" ").map(Number);
  const graph = input.slice(1).map((el) => el.split(""));
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let result = 0;

  const isValid = (y, x) => {
    if (x < 0 || y < 0 || x >= m || y >= n || graph[y][x] === "X") {
      return false;
    }
    return true;
  };

  const dfs = (y, x) => {
    graph[y][x] = "X";

    for (const move of moves) {
      const [dy, dx] = move;
      const [ny, nx] = [y + dy, x + dx];

      if (isValid(ny, nx)) {
        if (graph[ny][nx] === "P") result++;
        dfs(ny, nx);
      }
    }
  };

  // bfs인데 stack 사용, dfs보다 효율적
  const bfs = (y, x) => {
    const stack = [[y, x]];

    graph[y][x] = "X";

    while (stack.length) {
      const [curY, curX] = stack.pop();

      for (const move of moves) {
        const [dy, dx] = move;
        const [ny, nx] = [curY + dy, curX + dx];

        if (isValid(ny, nx)) {
          if (graph[ny][nx] === "P") result++;

          graph[ny][nx] = "X";
          stack.push([ny, nx]);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === "I") {
        // dfs(i, j);
        bfs(i, j);
        console.log(result > 0 ? result : "TT");
        return;
      }
    }
  }
});
