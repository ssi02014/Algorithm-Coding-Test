const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, startNode] = input[0].split(" ").map(Number);
  const connection = input.slice(1).map((el) => el.split(" ").map(Number));
  const [dfsVisited, dfsResult] = [Array(n + 1).fill(false), []];
  const [bfsVisited, bfsResult] = [Array(n + 1).fill(false), []];
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  //그래프 생성(인접 행렬)
  const adjacencyMatrix = () => {
    connection.forEach(([x, y]) => {
      [graph[x][y], graph[y][x]] = [1, 1];
    });
  };

  //dfs(재귀 사용, 모든 경우의 수 유형)
  const dfs = (graph, startNode) => {
    dfsVisited[startNode] = true;
    dfsResult.push(startNode);

    for (let i = 1; i < graph.length; i++) {
      if (graph[startNode][i] === 1 && !dfsVisited[i]) {
        dfs(graph, i);
      }
    }
  };

  //bfs(큐를 사용, 최단 거리 유형)
  const bfs = (graph, startNode) => {
    const queue = [];

    queue.push(startNode);
    bfsResult.push(startNode);

    while (queue.length !== 0) {
      const node = queue.shift();

      bfsVisited[node] = true;

      for (let i = 1; i < graph.length; i++) {
        if (graph[node][i] === 1 && !bfsVisited[i]) {
          bfsVisited[i] = true;
          queue.push(i);
          bfsResult.push(i);
        }
      }
    }
  };

  adjacencyMatrix();

  dfs(graph, startNode);
  bfs(graph, startNode);

  console.log(dfsResult.join(" "));
  console.log(bfsResult.join(" "));
});
