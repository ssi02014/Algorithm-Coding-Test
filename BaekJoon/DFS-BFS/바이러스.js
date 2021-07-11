const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const computers = parseInt(input[0]);
  const networkLine = parseInt(input[1]);
  const directConnectList = [];
  const graph = [...Array(computers + 1)].map(() => []);
  const dfsVisited = Array(computers + 1).fill(false);
  let result = 0;

  for (let i = 2; i < input.length; i++) {
    directConnect[i - 2] = input[i].split(" ").map(Number);
  }

  directConnectList.forEach((nodes) => {
    const [node1, node2] = nodes;

    graph[node1].push(node2);
    graph[node2].push(node1);
  });

  function dfs(startNode) {
    if (dfsVisited[startNode]) return;

    dfsVisited[startNode] = true;
    result++;

    graph[startNode].map((connectedNode) => {
      if (!dfsVisited[connectedNode]) dfs(connectedNode);
    });
  }

  dfs(1);

  console.log(result - 1);
});
