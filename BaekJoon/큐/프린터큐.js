const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = parseInt(input.shift());

  console.log(N);
  // for (let i = 0; i < N; i++) {}
});
