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
  const dp = Array(n).fill(0);

  let temp = list[0];
  dp[0] = list[0];

  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + list[i], list[i]);
    temp = Math.max(dp[i], temp);
  }

  console.log(temp);
});
