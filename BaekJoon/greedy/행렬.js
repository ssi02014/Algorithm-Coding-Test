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
  }
});
