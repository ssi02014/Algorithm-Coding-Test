const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = input[0].split(" ").map(Number);
  const basket = [];
  let result = 0;
  let temp = 1;

  for (let i = 0; i < k; i++) {
    basket.push(temp++);
  }

  const min = basket.reduce((acc, cur) => acc + cur);

  if (n < min) {
    result = -1;
  } else if ((n - min) % k === 0) {
    result = k - 1;
  } else {
    result = k;
  }

  console.log(result);
});
