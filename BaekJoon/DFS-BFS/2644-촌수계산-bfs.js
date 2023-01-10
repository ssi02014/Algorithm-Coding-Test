const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const [startNode, targetNode] = input[1].split(" ").map(Number);
  const familyConnections = input
    .slice(3)
    .map((el) => el.split(" ").map(Number));

  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);

  const bfs = (startNode, targetNode, count) => {
    const queue = [[startNode, targetNode, count]];

    visited[startNode] = true;

    while (queue.length) {
      const [curNode, targetNode, count] = queue.shift();

      if (curNode === targetNode) return count;

      for (const nextNode of graph[curNode]) {
        if (!visited[nextNode]) {
          visited[nextNode] = true;
          queue.push([nextNode, targetNode, count + 1]);
        }
      }
    }
  };

  // 인접 리스트 생성
  familyConnections.forEach((el) => {
    const [x, y] = el;

    graph[x].push(y);
    graph[y].push(x);
  });

  const result = bfs(startNode, targetNode, 0);

  console.log(result ? result : -1);
});
