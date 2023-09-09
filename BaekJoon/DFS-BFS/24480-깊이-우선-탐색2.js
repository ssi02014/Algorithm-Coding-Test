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
  const [n, , r] = input[0].split(" ").map(Number);
  const trunkInfos = input.slice(1).map((el) => el.split(" ").map(Number));
  const nodeList = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);
  const result = Array(n + 1).fill(0);
  let count = 1;

  trunkInfos.forEach((info) => {
    const [node1, node2] = info;

    nodeList[node1].push(node2);
    nodeList[node2].push(node1);
  });

  // 내림차순 조회
  const sortedNodeList = nodeList.map((el) => el.sort((a, b) => b - a));

  const dfs = (startNode) => {
    result[startNode] = count++;
    visited[startNode] = true;

    for (const nextNode of sortedNodeList[startNode]) {
      if (!visited[nextNode]) {
        dfs(nextNode);
      }
    }
  };

  dfs(r);

  console.log(result.slice(1).join("\n"));
});
