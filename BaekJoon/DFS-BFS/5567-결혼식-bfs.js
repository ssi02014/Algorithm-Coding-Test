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
  const m = +input[1];
  const list = input.slice(2).map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: n + 1 }, () => []);
  const checkList = Array(n + 1).fill(false);
  let result = 0;

  list.forEach(([node1, node2]) => {
    graph[node1].push(node2);
    graph[node2].push(node1);
  });

  const bfs = (startNode, depth) => {
    const queue = [[startNode, depth]];

    while (queue.length) {
      const [curNode, curDepth] = queue.shift();

      if (curDepth === 2) return;

      graph[curNode].forEach((nextNode) => {
        checkList[nextNode] = true;
        queue.push([nextNode, curDepth + 1]);
      });
    }
  };

  bfs(1, 0);

  checkList.forEach((el) => el && result++);
  console.log(result ? result - 1 : 0);
});
