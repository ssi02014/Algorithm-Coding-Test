const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let graph = [];
let [dfsVisited, bfsVisited] = [[], []];
let [dfsResult, bfsResult] = [[], []];

//dfs(재귀 사용, 모든 경우의 수 유형)
function dfs(startNode) {
  dfsVisited[startNode] = true;

  dfsResult.push(startNode);
  for (let i = 1; i < graph.length; i++) {
    if (graph[startNode][i] === 1 && dfsVisited[i] === false) dfs(i);
  }

  return dfsResult;
}

//bfs(큐를 사용, 최단 거리 유형)
function bfs(startNode) {
  const needVisitQueue = [];

  needVisitQueue.push(startNode);
  bfsResult.push(startNode);

  while (needVisitQueue.length !== 0) {
    const node = needVisitQueue.shift();

    bfsVisited[node] = true;
    for (let i = 1; i < graph.length; i++) {
      if (graph[node][i] === 1 && bfsVisited[i] === false) {
        bfsVisited[i] = true;
        needVisitQueue.push(i);
        bfsResult.push(i);
      }
    }
  }
  return bfsResult;
}

//그래프 생성(인접 행렬)
function adjacencyMatrix(node, connection) {
  graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));

  connection.forEach((el) => {
    let [x, y] = el;
    [graph[x][y], graph[y][x]] = [1, 1];
  });
}

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [nodeCount, trunkLine, startNode] = input[0].split(" ").map(Number);
  const connection = [];

  for (let i = 1; i < input.length; i++) {
    connection[i - 1] = input[i].split(" ").map(Number);
  }

  dfsVisited = new Array(nodeCount + 1).fill(false);
  bfsVisited = new Array(nodeCount + 1).fill(false);

  adjacencyMatrix(nodeCount, connection); //인접 행렬 생성

  dfs(startNode);
  bfs(startNode);

  console.log(dfsResult.join(" "));
  console.log(bfsResult.join(" "));
});
