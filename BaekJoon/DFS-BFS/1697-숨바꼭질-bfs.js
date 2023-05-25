// bfs
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = input[0].split(" ").map(Number);
  const visited = Array(100001).fill(false);
  const getNextNodes = (curNode) => [curNode + 1, curNode - 1, curNode * 2];

  const getIsValid = (node) => {
    if (node < 0 || node > 100000 || visited[node]) {
      return false;
    }
    return true;
  };

  const bfs = (startNode) => {
    const queue = [[startNode, 0]];

    visited[startNode] = true;

    while (queue.length) {
      const [curNode, time] = queue.shift();

      if (curNode === k) return time; // 중단점

      for (const nextNode of getNextNodes(curNode)) {
        if (getIsValid(nextNode)) {
          visited[nextNode] = true;
          queue.push([nextNode, time + 1]);
        }
      }
    }
  };

  console.log(bfs(n));
});
