const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, target] = input[0].split(" ");
  let result = 0;

  for (let i = 1; i <= +n; i++) {
    for (let el of i.toString()) {
      if (el === target) result++;
    }
  }

  console.log(result);
});
