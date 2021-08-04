const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const J = parseInt(input[1]);
  const appleSet = [];
  let result = 0;

  for (let i = 2; i <= J + 1; i++) {
    appleSet[i - 2] = parseInt(input[i]);
  }

  console.log(result);
});
