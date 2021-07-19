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
  const list = input[1].split(" ").map(Number);
  const sum = parseInt(input[2]);
  let count = 0;
  let start = 0;
  let end = N - 1;

  list.sort((a, b) => a - b);

  while (true) {
    let temp = list[start] + list[end];

    if (start >= end) break;

    if (temp === sum) {
      count++;
      end--;
      start++;
    } else if (temp > sum) end--;
    else start++;
  }

  console.log(count);
});
