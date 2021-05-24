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
  let M = 0;

  for (let i = 1; i <= N; i++) {
    M = parseInt(input[i]);

    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let j = 4; j <= M; j++) {
      dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
    }

    console.log(dp[M]);
  }
});
