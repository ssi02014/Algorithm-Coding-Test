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
  const list = [];

  let result = 0;

  for (let i = 1; i <= N; i++) {
    list[i - 1] = parseInt(input[i]);
  }

  list.sort((a, b) => a - b);

  for (let i = 1; i <= N; i++) {
    result = Math.max(result, list[N - i] * i);
  }

  console.log(result);
});
