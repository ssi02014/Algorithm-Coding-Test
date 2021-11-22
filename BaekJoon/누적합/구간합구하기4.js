const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const list = input[1].split(" ").map(Number);
  const sumList = Array(n + 1).fill(0);
  let totalSum = 0;
  let result = "";

  for (let i = 1; i <= n; i++) {
    totalSum += list[i - 1];
    sumList[i] = totalSum;
  }

  for (let i = 0; i < m; i++) {
    const [start, end] = input[i + 2].split(" ").map(Number);
    result += sumList[end] - sumList[start - 1] + "\n";
  }
  console.log(result);
});
