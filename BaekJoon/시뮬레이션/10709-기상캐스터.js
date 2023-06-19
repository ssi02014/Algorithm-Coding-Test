const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ");
  const board = input
    .slice(1)
    .map((el) => el.split("").map((column) => (column === "c" ? 0 : -1)));

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (board[i][j] === -1 && board[i][j - 1] !== -1) {
        board[i][j] = board[i][j - 1] + 1;
      }
    }
  }

  console.log(
    board.reduce((acc, cur) => {
      acc += `${cur.join(" ")}\n`;
      return acc;
    }, "")
  );
});
