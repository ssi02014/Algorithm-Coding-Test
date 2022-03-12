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
  const board = [];
  let blue = 0;
  let white = 0;

  for (let i = 1; i <= n; i++) {
    board[i - 1] = input[i].split(" ").map(Number);
  }

  partition(0, 0, n);

  console.log(white + "\n" + blue);

  function partition(row, col, size) {
    if (checkColor(row, col, size)) {
      board[row][col] === 0 ? white++ : blue++;
      return;
    }

    let newSize = Math.floor(size / 2);

    partition(row, col, newSize);
    partition(row, col + newSize, newSize);
    partition(row + newSize, col, newSize);
    partition(row + newSize, col + newSize, newSize);
  }

  function checkColor(row, col, size) {
    const color = board[row][col];

    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        if (board[i][j] !== color) return false;
      }
    }
    return true;
  }
});
