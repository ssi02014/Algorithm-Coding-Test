/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/18352
 * 알고리즘: BFS
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m, k, x] = input[0].split(" ").map(Number);
  const nodeList = input.slice(1).map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: n + 1 }, () => []);
  const visited = Array(n + 1).fill(false);
  const result = [];

  // 단방향 그래프
  nodeList.forEach(([node1, node2]) => {
    graph[node1].push(node2);
  });

  const bfs = (startNode) => {
    const queue = [[startNode, 0]];

    visited[startNode] = true;

    while (queue.length) {
      const [curNode, curDistance] = queue.shift();

      if (curDistance === k) {
        result.push(curNode);
        continue;
      }

      for (const nextNode of graph[curNode]) {
        if (!visited[nextNode]) {
          visited[nextNode] = true;
          queue.push([nextNode, curDistance + 1]);
        }
      }
    }
  };

  bfs(x);

  result.sort((a, b) => a - b);

  console.log(result.length ? result.join("\n") : "-1");
});
