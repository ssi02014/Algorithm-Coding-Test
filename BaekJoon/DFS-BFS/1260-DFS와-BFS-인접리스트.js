const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const [n, m, startNode] = input[0].split(" ").map(Number);
  const nodeList = input.slice(1).map((el) => el.split(" ").map(Number));
  const [dfsVisited, dfsResult] = [Array(n + 1).fill(false), []];
  const [bfsVisited, bfsResult] = [Array(n + 1).fill(false), []];
  let graph = Array.from({ length: n + 1 }, () => []);

  // 인접리스트
  nodeList.forEach((el) => {
    const [node1, node2] = el;

    graph[node1].push(node2);
    graph[node2].push(node1);
  });

  graph = graph.map((el) => el.sort((a, b) => a - b));

  const bfs = (startNode) => {
    const queue = [];

    bfsResult.push(startNode);
    queue.push(startNode);

    while (queue.length) {
      const node = queue.shift();

      bfsVisited[startNode] = true;

      for (const nextNode of graph[node]) {
        if (!bfsVisited[nextNode]) {
          bfsVisited[nextNode] = true;
          bfsResult.push(nextNode);
          queue.push(nextNode);
        }
      }
    }
  };

  const dfs = (startNode) => {
    dfsResult.push(startNode);
    dfsVisited[startNode] = true;

    for (const nextNode of graph[startNode]) {
      if (!dfsVisited[nextNode]) {
        dfs(nextNode);
      }
    }
  };

  bfs(startNode);
  dfs(startNode);

  console.log(dfsResult.join(" "));
  console.log(bfsResult.join(" "));
});
