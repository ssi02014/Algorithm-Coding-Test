const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const num1 = input[0];
  const num2 = input[1];
  let result = [];

  for (let i = num1.length - 1; i >= 0; i--) {
    result.push(+num1 * +num2[i]);
  }
  result.push(+num1 * +num2);
  console.log(result.join("\n"));
});
