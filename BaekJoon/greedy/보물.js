const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = 0;
  const a = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const b = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a)
    .forEach((el, i) => {
      result += el * a[i];
    });

  console.log(result);
});
