// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const result = [];
  let N = parseInt(input[0]);
  let a = 2;

  while (N > 1) {
    if (N % a === 0) {
      N /= a;
      result.push(a);
    } else {
      a++;
    }
  }

  console.log(result.join(" "));
});
