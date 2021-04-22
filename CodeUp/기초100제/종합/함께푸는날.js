const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [a, b, c] = input[0].split(" ").map(Number);

  let day = 1;

  while (true) {
    if (day % a === 0 && day % b === 0 && day % c === 0) break;
    else day++;
  }
  console.log(day);
});
