const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const list = [0, 0, 0, ...input.slice(1).map(Number)];
  const dp = [0, 0, 0];

  for (let i = 3; i < list.length; i++) {
    const temp = Math.max(
      dp[i - 3] + list[i - 1] + list[i],
      dp[i - 2] + list[i]
    );

    dp[i] = Math.max(dp[i - 1], temp);
  }

  console.log(dp.at(-1));
});
