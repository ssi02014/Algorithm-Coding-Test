const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  const dp = [];

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= N; i++) {
    dp[i] = i;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
    }
  }
  console.log(dp[N]);
});
