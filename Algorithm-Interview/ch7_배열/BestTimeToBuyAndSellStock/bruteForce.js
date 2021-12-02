const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const prices = input[0].split(" ").map(Number);
  let maxPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      maxPrice = Math.max(prices[j] - prices[i], maxPrice);
    }
  }

  console.log(maxPrice);
});
