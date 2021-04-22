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
  const result = [];

  result.push(0);
  result.push(1);

  for (let i = 2; i <= N; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  console.log(result.reduce((a, b) => a + b));
});
