const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const expression = input[0].split("-");
  const temp = [];

  let result = 0;

  expression.map((el) => {
    temp.push(
      el
        .split("+")
        .map(Number)
        .reduce((a, b) => a + b)
    );
  });

  result = temp[0];

  for (let i = 1; i < temp.length; i++) {
    result -= temp[i];
  }

  console.log(result);
});
