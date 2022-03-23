const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const result = [];
  let i = 0;

  if (n === 1) return console.log("*");
  while (i < n) {
    i++;
    result.push("*".repeat(i));
  }

  while (i > 1) {
    i--;
    result.push("*".repeat(i));
  }

  console.log(result.join("\n"));
});
