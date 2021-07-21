const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = parseInt(input.shift());

  for (let i = 1; i <= T; i++) {
    const [N, M] = input.shift().split(" ").map(Number);

    input.splice(0, M);
    console.log(N - 1);
  }
});
