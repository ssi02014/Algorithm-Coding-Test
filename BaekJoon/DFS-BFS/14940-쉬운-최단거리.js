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
  const graph = input.slice(1).map((el) => el.split(" ").map(Number));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const isValid = (y, x) => {
    if (x < 0 || y < 0 || x >= m || y >= n || graph[y][x] === 0) {
      return false;
    }
    return true;
  };

  const bfs = (startNode) => {
    const queue = [startNode];

    while (queue.length) {
      const [curY, curX] = queue.shift();
      const curValue = graph[curY][curX];

      moves.forEach(([dy, dx]) => {
        const [ny, nx] = [curY + dy, curX + dx];

        if (isValid(ny, nx) && !visited[ny][nx]) {
          queue.push([ny, nx]);
          graph[ny][nx] = curValue + 1;
          visited[ny][nx] = true;
        }
      });
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 2 && !visited[i][j]) {
        visited[i][j] = true;
        graph[i][j] = 0;
        bfs([i, j]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        graph[i][j] = -1;
      }
    }
  }

  console.log(graph.map((el) => el.join(" ")).join("\n"));
});
