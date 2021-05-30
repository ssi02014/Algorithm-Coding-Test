const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const factorial = (num) => {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = input[0].split(" ").map(Number);

  const a = factorial(N);
  const b = factorial(K);
  const c = factorial(N - K);

  console.log(a / (b * c));
});
