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

  let list = new Array(N + 1).fill(0);

  for (let i = 2; i <= N; i++) {
    list[i] = list[i - 1] + 1;

    if (i % 2 === 0) {
      list[i] = Math.min(list[i], list[i / 2] + 1);
    }
    if (i % 3 === 0) {
      list[i] = Math.min(list[i], list[i / 3] + 1);
    }
  }
  console.log(list);
});
