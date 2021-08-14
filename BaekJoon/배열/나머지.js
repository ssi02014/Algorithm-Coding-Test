const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const numList = input.slice(0).map(Number);
  const numSet = new Set();

  numList.map((el) => numSet.add(el % 42));

  console.log(Array.from(numSet).length);
});
