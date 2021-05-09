const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [e, s, m] = input[0].split(" ").map(Number);

  let year = 1;
  while (true) {
    if (
      (year - e) % 15 === 0 &&
      (year - s) % 28 === 0 &&
      (year - m) % 19 === 0
    ) {
      break;
    }

    year++;
  }

  console.log(year);
});
