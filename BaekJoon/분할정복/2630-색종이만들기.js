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
  const board = input.slice(1).map((el) => el.split(" ").map(Number));
  let blue = 0;
  let white = 0;

  const checkColor = (y, x, size) => {
    const curColor = board[y][x];

    for (let i = y; i < y + size; i++) {
      for (let j = x; j < x + size; j++) {
        if (board[i][j] !== curColor) {
          return false;
        }
      }
    }
    return true;
  };

  const recursive = (y, x, size) => {
    if (checkColor(y, x, size)) {
      board[y][x] === 1 ? blue++ : white++;
      return;
    }

    const halfSize = Math.floor(size / 2);

    recursive(y, x, halfSize); // 2사분면
    recursive(y + halfSize, x, halfSize); //1사분면
    recursive(y, x + halfSize, halfSize); //3사분면
    recursive(y + halfSize, x + halfSize, halfSize); //4사분면
  };

  recursive(0, 0, n);

  console.log(`${white}\n${blue}`);
});
