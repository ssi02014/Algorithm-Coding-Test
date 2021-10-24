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
  const day = [];
  const cost = [];

  for (let i = 1; i <= n; i++) {
    [day[i - 1], cost[i - 1]] = input[i].split(" ").map(Number);
  }

  const dp = [...cost, 0];

  for (let i = n - 1; i >= 0; i--) {
    if (day[i] + i > n) dp[i] = dp[i + 1];
    else dp[i] = Math.max(dp[i + 1], cost[i] + dp[i + day[i]]);
  }

  console.log(dp[0]);
});
