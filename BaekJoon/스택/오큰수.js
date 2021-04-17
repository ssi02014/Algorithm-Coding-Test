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
  const numList = input[1].split(" ").map(Number);
  const stack = [];
  const result = [];

  for (let i = 0; i < N; i++) {
    result[i] = -1;
  }

  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && numList[Math.max(...stack)] < numList[i]) {
      result[stack.pop()] = numList[i];
    }

    stack.push(i);
  }

  console.log(result.join(" "));
});
