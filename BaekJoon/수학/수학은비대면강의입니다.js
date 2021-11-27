const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [a, b, c, d, e, f] = input[0].split(" ").map(Number);

  for (let i = -999; i < 1000; i++) {
    for (let j = -999; j < 1000; j++) {
      if (a * i + b * j === c && d * i + e * j === f) {
        console.log(i, j);
      }
    }
  }
});
