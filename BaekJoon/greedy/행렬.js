const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const inputList1 = input
    .slice(1, n + 1)
    .map((el) => el.split("").map(Number));
  const inputList2 = input.slice(n + 1).map((el) => el.split("").map(Number));

  solution(n, m, inputList1, inputList2);

  function solution(n, m, inputList1, inputList2) {
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
      for (let j = 0; j < m - 2; j++) {
        if (inputList1[i][j] !== inputList2[i][j]) {
          flip(i, j, inputList1);
          count++;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (inputList1[i][j] !== inputList2[i][j]) {
          console.log(-1);
          return;
        }
      }
    }
    console.log(count);
  }

  function flip(x, y, inputList1) {
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        inputList1[i][j] = 1 - inputList1[i][j];
      }
    }
  }
});
