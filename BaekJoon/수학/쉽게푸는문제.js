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
  const seq = [];

  let num = 0;

  while (seq.length < M) {
    num++;

    for (let i = 0; i < num; i++) {
      seq.push(num);
    }
  }

  console.log(seq.slice(N - 1, M).reduce((a, b) => a + b));
});
