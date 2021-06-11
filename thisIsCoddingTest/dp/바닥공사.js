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
  const d = new Array(1001).fill(0);

  d[1] = 1;
  d[2] = 3;

  for (let i = 3; i <= N; i++) {
    d[i] = (d[i - 1] + 2 * d[i - 2]) % 796796;
  }

  console.log(d[N]);
});
