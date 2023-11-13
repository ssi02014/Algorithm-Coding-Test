/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/2210
 * 알고리즘: dfs, 브루트포스
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
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const graph = input.slice(0).map((el) => el.split(" "));
  const height = graph.length;
  const width = graph[0].length;
  const set = new Set();

  const checkValidRange = (y, x) => {
    if (x < 0 || y < 0 || x >= width || y >= height) {
      return false;
    }
    return true;
  };

  const dfs = (y, x, value, count) => {
    if (count === 6) {
      set.add(value);
      return;
    }

    for (const move of moves) {
      const [dy, dx] = move;
      const [ny, nx] = [dy + y, dx + x];

      if (checkValidRange(ny, nx)) {
        dfs(ny, nx, value + graph[ny][nx], count + 1);
      }
    }
  };

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      dfs(i, j, graph[i][j], 1);
    }
  }

  console.log(set.size);
});
