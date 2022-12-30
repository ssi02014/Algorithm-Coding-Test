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
  const getMoves = (curNode) => [curNode + 1, curNode - 1, curNode * 2];

  const checkRange = (move) => {
    if (move < 0 || move > 100000) {
      return false;
    }
    return true;
  };

  const bfs = (n) => {
    const queue = [];

    // startNode, time
    queue.push([n, 0]);
    visited[n] = true;

    while (queue.length) {
      const [curNode, time] = queue.shift();

      if (curNode === k) return time; // 중단점

      for (const nextMove of getMoves(curNode)) {
        if (!visited[nextMove] && checkRange(nextMove)) {
          visited[nextMove] = true;
          queue.push([nextMove, time + 1]);
        }
      }
    }
  };

  console.log(bfs(n));
});
