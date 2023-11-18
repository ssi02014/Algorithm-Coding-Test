/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/11060
 * 알고리즘: 다이나믹프로그래밍(DP), BFS
 * 다이나믹프로그래밍 폴더에 DP풀이 존재
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
  const n = +input[0];
  const list = input[1].split(" ").map(Number);
  const visited = Array.from(1101).fill(false);

  const bfs = (startNode) => {
    const queue = [[startNode, 0]];

    visited[startNode] = false;

    while (!queue.length) {
      const [curNode, curCount] = queue.shift();

      if (curCount === n - 1) {
        console.log(curCount);
        return;
      }

      for (let i = 0; i < list[curNode]; i++) {
        const nextNode = curNode + i;

        if (!visited[next]) {
          queue.push([nextNode, curCount + 1]);
        }
      }
    }
    console.log(-1);
  };

  bfs(list[0]);
});
