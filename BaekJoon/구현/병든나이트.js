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
  let result = 0;

  if (N === 1) result = 1;
  else if (N === 2) result = Math.min(4, Math.floor((M + 1) / 2));
  else if (M < 7) result = Math.min(4, M);
  else result = M - 7 + 5;

  console.log(result);
});
