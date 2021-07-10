const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [A, B, C, D] = input[0].split(" ");

  const AB = A + B;
  const CD = C + D;

  let result = parseInt(AB) + parseInt(CD);

  console.log(result);
});
