const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = parseInt(input[0]);
  const numList = input[1].split(" ").map(Number);
  const m = Math.max(...numList);
  const operationList = [];
  numList.forEach((el) => {
    operationList.push((el / m) * 100);
  });

  console.log(operationList.reduce((a, b) => a + b) / n);
});
