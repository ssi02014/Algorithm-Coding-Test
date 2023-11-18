/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/11060
 * 알고리즘: 다이나믹프로그래밍(DP), BFS
 * DFS-BFS 폴더에 BFS 풀이 존재
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
  const dp = Array(1101).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= list[i]; j++) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }

  console.log(dp[n - 1] >= Number.MAX_SAFE_INTEGER ? -1 : dp[n - 1]);
});
