const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = +input.shift();
  const moves = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
  ];
  let result = "";

  const getIsValid = (graph, y, x) => {
    if (
      x < 0 ||
      y < 0 ||
      x >= graph.length ||
      y >= graph.length ||
      graph[y][x]
    ) {
      return false;
    }
    return true;
  };

  const bfs = (graph, startNode, targetNode) => {
    const [targetY, targetX] = targetNode;
    const [startY, startX] = startNode;
    const queue = [[startY, startX, 0]];

    graph[startY][startX] = 1;

    while (queue.length) {
      const [curY, curX, curCount] = queue.shift();

      if (curY === targetY && curX === targetX) {
        return curCount;
      }

      moves.forEach((move) => {
        const [dy, dx] = move;
        const [ny, nx] = [curY + dy, curX + dx];

        if (getIsValid(graph, ny, nx)) {
          graph[ny][nx] = 1;
          queue.push([ny, nx, curCount + 1]);
        }
      });
    }
  };

  for (let i = 0; i < t; i++) {
    const [l, startNode, targetNode] = input
      .splice(0, 3)
      .map((el, i) => (i > 0 ? el.split(" ").map(Number) : +el));
    const graph = Array.from({ length: l }, () => Array(l).fill(0));

    const count = bfs(graph, startNode, targetNode);

    result += `${count}\n`;
  }

  console.log(result);
});
