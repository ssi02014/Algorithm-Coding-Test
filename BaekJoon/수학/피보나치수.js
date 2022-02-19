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

  function fibo(n) {
    if (n < 2) return n;
    return fibo(n - 1) + fibo(n - 2);
  }

  console.log(fibo(n));
});
