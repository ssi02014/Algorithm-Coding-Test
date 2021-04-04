const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = parseInt(input.shift());
  let M = [];
  let stack = [];
  let result = [];
  for (let i = 0; i < N; i++) {
    M[i] = input[i].split(" ");
  }

  for (let i = 0; i < M.length; i++) {
    if (M[i][0] === "push") {
      stack.push(M[i][1]);
    } else if (M[i][0] === "top") {
      stack.length === 0
        ? result.push(-1)
        : result.push(stack[stack.length - 1]);
    } else if (M[i][0] === "size") {
      result.push(stack.length);
    } else if (M[i][0] === "empty") {
      stack.length === 0 ? result.push(1) : result.push(0);
    } else {
      stack.length === 0 ? result.push(-1) : result.push(stack.pop());
    }
  }
  console.log(result.join("\n"));
});
