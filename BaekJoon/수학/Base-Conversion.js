const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [future, current] = input[0].split(" ").map(Number);
  const numbers = input[2].split(" ").map(Number);
  const result = [];
  let tenResult = 0;

  numbers.forEach((number, idx) => {
    tenResult += number * Math.pow(future, numbers.length - idx - 1);
  });

  while (tenResult) {
    result.push(tenResult % current);
    tenResult = Math.floor(tenResult / current);
  }

  console.log(result.reverse().join(" "));
});
