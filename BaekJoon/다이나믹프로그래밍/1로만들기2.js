const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = parseInt(input[0]);
  const list = new Array(N + 1).fill(0);
  const before = new Array(N + 1).fill(0);
  let result = "";

  function solve(n) {
    for (let i = 2; i <= N; i++) {
      list[i] = list[i - 1] + 1;
      before[i] = i - 1;

      if (i % 2 === 0) {
        if (list[i] > list[i / 2] + 1) {
          list[i] = list[i / 2] + 1;
          before[i] = Math.floor(i / 2);
        }
      }
      if (i % 3 === 0) {
        if (list[i] > list[i / 3] + 1) {
          list[i] = list[i / 3] + 1;
          before[i] = Math.floor(i / 3);
        }
      }
    }

    return list[n];
  }

  console.log(solve(N));

  while (true) {
    result += N + " ";

    N = before[N];
    if (N === 0) break;
  }

  console.log(result);
});
