// Run by Node.js

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
  const numList = input[1].split(" ").map(Number);
  const range = input[2].split(" ").map(Number);

  console.log(numList.slice(range[0] - 1, range[1]).reduce((a, b) => a + b));
});
