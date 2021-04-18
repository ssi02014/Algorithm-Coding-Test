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

  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "+" ||
      expression[i] === "*" ||
      expression[i] === "-" ||
      expression[i] === "/"
    ) {
      operandA = stack.pop();
      operandB = stack.pop();

      switch (expression[i]) {
        case "+":
          stack.push(operandB + operandA);
          break;
        case "-":
          stack.push(operandB - operandA);
          break;
        case "*":
          stack.push(operandB * operandA);
          break;
        case "/":
          stack.push(operandB / operandA);
          break;
      }
    } else {
      stack.push(numList[expression[i].charCodeAt() - "A".charCodeAt()]);
    }
  }
  console.log(stack[0].toFixed(2));
});
