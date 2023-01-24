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
  const connections = input.slice(1).map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: n + 1 }, () => []);
  let distance = [];
  let max = 0;
  let rootFurthestNode = 0;

  connections.forEach((el) => {
    const [node1, node2, wei] = el;

    graph[node1].push([node2, wei]);
    graph[node2].push([node1, wei]);
  });

  const dfs = (startNode, wei) => {
    graph[startNode].forEach((el) => {
      const [curNode, curWei] = el;

      if (distance[curNode] === -1) {
        distance[curNode] = wei + curWei;
        dfs(curNode, wei + curWei);
      }
    });
  };

  // 루트 노드(1)에서 가장 먼 노드 찾기
  distance = Array(n + 1).fill(-1);
  distance[1] = 0;
  dfs(1, 0);

  max = Math.max(...distance);
  rootFurthestNode = distance.indexOf(max);

  // rootFurthestNode 노드에서 가장 먼 노드 찾기
  distance = Array(n + 1).fill(-1);
  distance[rootFurthestNode] = 0;
  dfs(rootFurthestNode, 0);

  console.log(Math.max(...distance));
});
