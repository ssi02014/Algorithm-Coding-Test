const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const list = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const mid = n % 2 === 0 ? list.length / 2 - 1 : Math.floor(list.length / 2);

  console.log(list[mid]);
});
