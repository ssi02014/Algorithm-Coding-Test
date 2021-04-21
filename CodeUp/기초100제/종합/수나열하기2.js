const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [a, r, n] = input[0].split(" ").map(Number);

  for (let i = 1; i < n; i++) {
    a *= r;
  }

  console.log(a);
});
