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
  const stages = input.slice(1).map(Number);
  let result = 0;

  for (let i = n - 1; i >= 0; i--) {
    while (stages[i] <= stages[i - 1]) {
      stages[i - 1]--;
      result++;
    }
  }

  console.log(result);
});
