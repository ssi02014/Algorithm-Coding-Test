const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = input[0].split(" ").map(Number);
  const stack = [];
  const result = Array(T.length).fill(0);

  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      const last = stack.pop();
      result[last] = i - last;
    }
    stack.push(i);
  }
  console.log(result);
});
