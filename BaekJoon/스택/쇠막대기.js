const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const laser = input[0].split("");
  const stack = [];
  let result = 0;

  for (let i = 0; i < laser.length; i++) {
    if (laser[i] === "(") {
      stack.push(laser[i]);
    } else {
      stack.pop();

      if (laser[i - 1] === "(") result += stack.length;
      else result++;
    }
  }

  console.log(result);
});
