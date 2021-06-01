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
  const list = input[1].split(" ").map(Number);

  list.sort((a, b) => a - b);

  console.log(list[M - 1]);
});
