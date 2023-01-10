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
  let result = 0;

  const dfs = (startNode, targetNode, count) => {
    if (startNode === targetNode) {
      result = count;
      return;
    }

    visited[startNode] = true;

    for (const nextNode of graph[startNode]) {
      if (!visited[nextNode]) {
        dfs(nextNode, targetNode, count + 1);
      }
    }
  };

  // 인접 리스트 생성
  familyConnections.forEach((el) => {
    const [x, y] = el;

    graph[x].push(y);
    graph[y].push(x);
  });

  dfs(startNode, targetNode, 0);

  console.log(result ? result : -1);
});
