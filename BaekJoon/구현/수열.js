const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = parseInt(input[0]);
  const list = input[1].split(" ").map(Number);

  let maxValue = 1;
  let len = 1;

  for (let i = 1; i < n; i++) {
    list[i] <= list[i - 1] ? len++ : (len = 1);
    maxValue = Math.max(maxValue, len);
  }

  len = 1;

  for (let i = 1; i < n; i++) {
    list[i] >= list[i - 1] ? len++ : (len = 1);
    maxValue = Math.max(maxValue, len);
  }

  console.log(maxValue);
});
