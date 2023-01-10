const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 0-1 Knapsack Problem
  const [n, k] = input[0].split(" ").map(Number);
  const products = input.slice(1).map((el) => el.split(" ").map(Number));
  const knapsack = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const [w, v] = products[i - 1];

    for (let j = 1; j <= k; j++) {
      if (j - w >= 0) {
        knapsack[i][j] = Math.max(
          knapsack[i - 1][j],
          knapsack[i - 1][j - w] + v
        );
      } else {
        knapsack[i][j] = knapsack[i - 1][j];
      }
    }
  }

  console.log(knapsack[n][k]);
});
