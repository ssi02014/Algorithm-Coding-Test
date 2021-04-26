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
  const [N, M] = input[0].split(" ").map(Number);
  const first = input[1].split(" ").map(Number);
  const second = input[2].split(" ").map(Number);

  let result = [];

  result = first.concat(second);

  console.log(result.sort((a, b) => a - b).join(" ") + " ");
});
