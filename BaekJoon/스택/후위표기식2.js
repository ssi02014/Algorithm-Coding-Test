const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input.shift());
  const expression = input.shift().split("");
  const numList = input.slice(0).map(Number);
  const stack = [];

  let operandA = 0;
  let operandB = 0;

  expression.map((el) => {
    switch (el) {
      case "+":
        operandA = stack.pop();
        operandB = stack.pop();
        stack.push(operandB + operandA);
        break;
      case "-":
        operandA = stack.pop();
        operandB = stack.pop();
        stack.push(operandB - operandA);
        break;
      case "*":
        operandA = stack.pop();
        operandB = stack.pop();
        stack.push(operandB * operandA);
        break;
      case "/":
        operandA = stack.pop();
        operandB = stack.pop();
        stack.push(operandB / operandA);
        break;
      default:
        stack.push(numList[el.charCodeAt() - 65]);
    }
  });
  console.log(stack[0].toFixed(2));
});
