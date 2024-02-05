/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/1890
 * 알고리즘: DP
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
  const graph = input.slice(1).map((el) => el.split(" ").map(Number));

  const dp = Array.from({ length: n }, () => Array(n).fill(BigInt(0)));

  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === n - 1 && j === n - 1) {
        console.log(dp[i][j].toString());
        return;
      }

      const curValue = graph[i][j];
      const ny = curValue + i;
      const nx = curValue + j;

      if (ny < n) {
        dp[ny][j] += BigInt(dp[i][j]);
      }
      if (nx < n) {
        dp[i][nx] += BigInt(dp[i][j]);
      }
    }
  }
});
