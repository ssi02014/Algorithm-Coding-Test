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
  let a = 0;
  let b = 1;
  let temp = 0;

  for (let i = 0; i < n - 1; i++) {
    temp = b;
    b = a + b;
    a = temp;
  }

  console.log(b);
});
