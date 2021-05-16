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
  let result = "";

  for (let i = 1; i <= N; i++) {
    if (i >= 1 && i < 10) result += 1;
    else if (i >= 10 && i < 100) result += 2;
    else if (i >= 100 && i < 1000) result += 3;
    else if (i >= 1000 && i < 10000) result += 4;
    else if (i >= 10000 && i < 100000) result += 5;
    else if (i >= 100000 && i < 1000000) result += 6;
    else if (i >= 1000000 && i < 10000000) result += 7;
    else if (i >= 10000000 && i < 100000000) result += 8;
    else result += 9;
  }
});
