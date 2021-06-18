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
  let result = 0;

  for (let i = 1; i <= N; i++) {
    const str = input[i].split("");
    const stack = [];

    for (let j = 0; j < str.length; j++) {
      if (stack.length) {
        if (stack[stack.length - 1] === str[j]) stack.pop();
        else stack.push(str[j]);
      } else {
        stack.push(str[j]);
      }
    }

    if (!stack.length) result++;
  }

  console.log(result);
});
