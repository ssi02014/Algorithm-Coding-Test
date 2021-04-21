const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const N = parseInt(input.shift());

  let [a, b] = [0, 0];
  let board = Array.from(Array(19), () => new Array(19).fill(0));

  for (let i = 0; i < N; i++) {
    [a, b] = input[i].split(" ").map(Number);

    board[a - 1][b - 1] = 1;
  }

  console.log(board.map((el) => el.join(" ")).join("\n"));
});
