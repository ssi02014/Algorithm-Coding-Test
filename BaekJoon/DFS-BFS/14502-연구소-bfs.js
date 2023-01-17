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
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let result = 0;

  const isValid = (x, y) => {
    if (x < 0 || y < 0 || x >= n || y >= m) return false;
    return true;
  };

  const getEmptySpaceCount = (graph) => {
    let count = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!graph[i][j]) count++;
      }
    }

    return count;
  };

  const bfs = () => {
    const copyGraph = JSON.parse(JSON.stringify(graph));
    const queue = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (copyGraph[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }

    while (queue.length) {
      const [x, y] = queue.shift();

      moves.forEach(([dx, dy]) => {
        const [nx, ny] = [x + dx, y + dy];

        if (isValid(nx, ny) && !copyGraph[nx][ny]) {
          copyGraph[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      });
    }

    result = Math.max(getEmptySpaceCount(copyGraph), result);
  };

  const makeWall = (wallCount) => {
    if (wallCount === 3) {
      bfs();
      return;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (graph[i][j] === 0) {
          // 백트랙킹
          graph[i][j] = 1;
          makeWall(wallCount + 1);
          graph[i][j] = 0;
        }
      }
    }
  };

  makeWall(0);

  console.log(result);
});
