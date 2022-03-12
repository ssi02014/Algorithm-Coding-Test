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
      return board[row][col] ? blue++ : white++;
    }

    let halfSize = Math.floor(size / 2);

    partition(row, col, halfSize); // 2사분면
    partition(row, col + halfSize, halfSize); // 1사분면
    partition(row + halfSize, col, halfSize); // 3사분면
    partition(row + halfSize, col + halfSize, halfSize); // 4사분면
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
