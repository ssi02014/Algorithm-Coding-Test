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
  const road = input[1].split(" ").map(Number);
  const result = [];

  let temp = road[0];
  let stack = [temp];

  for (let i = 1; i < N; i++) {
    if (temp < road[i]) stack.push(road[i]);
    else {
      if (stack.length > 1) {
        result.push(stack[stack.length - 1] - stack[0]);
      }
      stack = [road[i]];
    }
    temp = road[i];
  }

  if (stack.length > 0) {
    result.push(stack[stack.length - 1] - stack[0]);
  }

  !result.length ? console.log(0) : console.log(Math.max(...result));
});
