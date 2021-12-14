const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const list = [];
  let result = "";

  for (let i = 1; i <= n; i++) {
    list[i - 1] = input[i].split(" ");
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      result += list[j][i];
    }
  }

  console.log(result);
});
