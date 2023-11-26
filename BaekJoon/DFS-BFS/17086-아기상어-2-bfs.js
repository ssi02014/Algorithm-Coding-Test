/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/17086
 * 알고리즘: 그래프탐색, 브루트포스, BFS
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
  const graph = input
    .slice(1)
    .map((el) => el.split(" ").map((el) => (el === "1" ? 0 : Infinity)));

  // 8방향 좌,우,상,하,대각
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  let result = 0;

  const isValid = (y, x, visited) => {
    if (
      x < 0 ||
      y < 0 ||
      x >= m ||
      y >= n ||
      graph[y][x] === 0 ||
      visited[y][x]
    ) {
      return false;
    }
    return true;
  };

  const bfs = (y, x) => {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[y, x, 0]];

    visited[y][x] = true;

    while (queue.length) {
      const [curY, curX, curCount] = queue.shift();

      moves.forEach((move) => {
        const [dy, dx] = move;
        const [ny, nx] = [dy + curY, dx + curX];

        if (isValid(ny, nx, visited)) {
          graph[ny][nx] = Math.min(curCount + 1, graph[ny][nx]);
          visited[ny][nx] = true;

          queue.push([ny, nx, curCount + 1]);
        }
      });
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) {
        bfs(i, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result = Math.max(graph[i][j], result);
    }
  }

  console.log(result);
});
