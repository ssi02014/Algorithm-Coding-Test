const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const list = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const result = [];
  let start = 0;
  let end = list.length - 1;
  let min = Infinity;

  while (start < end) {
    const sum = list[start] + list[end];

    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      [result[0], result[1]] = [list[start], list[end]];
      if (!sum) break;
    }

    sum < 0 ? start++ : end--;
  }

  console.log(result.join(" "));
});
