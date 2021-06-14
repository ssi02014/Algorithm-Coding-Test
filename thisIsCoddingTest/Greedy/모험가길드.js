const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input[0]);
  const fear = input[1].split(" ").map(Number);

  let count = 0;
  let result = 0;

  fear.sort((a, b) => a - b);

  for (let rate of fear) {
    count++;

    if (count >= rate) {
      result++;
      count = 0;
    }
  }

  console.log(result);
});
