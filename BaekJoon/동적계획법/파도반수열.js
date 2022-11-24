const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const targets = input.slice(1).map(Number);

  targets.forEach((target) => {
    const dp = [1, 1, 1];

    for (let i = 3; i < target; i++) {
      dp.push(dp[i - 3] + dp[i - 2]);
    }

    console.log(dp[target - 1]);
  });
});
