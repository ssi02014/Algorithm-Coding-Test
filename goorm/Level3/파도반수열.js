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
  const sequence = [0, 1, 1];

  for (let i = 0; i < N; i++) {
    sequence.push(sequence[i] + sequence[i + 1]);
  }
  console.log(sequence[N]);
});
