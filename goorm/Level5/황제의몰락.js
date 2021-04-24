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
  const [N, K] = input[0].split(" ").map(Number);
  const result = [];

  let deleteIndex = 0;

  for (let i = 1; i < N + 1; i++) {
    result.push(i);
  }

  while (result.length !== 2) {
    result.splice(deleteIndex, 1);

    deleteIndex += K - 1;

    if (deleteIndex >= result.length) deleteIndex = deleteIndex % result.length;
  }
  console.log(result.join(" "));
});
