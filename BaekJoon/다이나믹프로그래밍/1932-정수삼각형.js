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
  const arr = input.slice(1).map((el) => el.split(" ").map(Number));

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      arr[i - 1][j] += Math.max(arr[i][j], arr[i][j + 1]);
    }
  }
  console.log(arr[0][0]);
});
