const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const list = input[0].split("");
  const stack = [];
  const table = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < list.length; i++) {
    if (!table[list[i]]) stack.push(list[i]);
    else if (!stack.length || table[list[i]] !== stack.pop()) {
      return console.log(false);
    }
  }

  return console.log(stack.length === 0);
});
