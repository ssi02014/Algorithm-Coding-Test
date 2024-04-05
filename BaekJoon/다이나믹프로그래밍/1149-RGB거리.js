/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/1149
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
  const dp = Array.from({ length: n }, () => Array(3).fill(0));
  const costs = input.slice(1).map((el) => el.split(" ").map(Number));

  for (let i = 0; i < 3; i++) {
    dp[0][i] = costs[0][i];
  }

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
  }

  console.log(Math.min(...dp[n - 1]));
});
