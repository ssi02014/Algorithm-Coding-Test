const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const brackets = input[0];
  let stack = [];
  let result = 0;
  let temp = 1;

  for (let idx in brackets) {
    const bracket = brackets[idx];
    if (bracket === "(") {
      stack.push(bracket);
      temp *= 2;
    } else if (bracket === "[") {
      stack.push(bracket);
      temp *= 3;
    } else if (bracket === ")") {
      const last = stack[stack.length - 1];

      if (!stack.length || last === "[") {
        result = 0;
        break;
      } else if (brackets[idx - 1] === "(") {
        result += temp;
      }

      temp /= 2;
      stack.pop();
    } else {
      const last = stack[stack.length - 1];

      if (!stack.length || last === "(") {
        result = 0;
        break;
      } else if (brackets[idx - 1] === "[") {
        result += temp;
      }
      temp /= 3;
      stack.pop();
    }
  }
  stack.length > 0 ? console.log(0) : console.log(result);
});
