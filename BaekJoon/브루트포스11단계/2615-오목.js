const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

// ↗, →, ↓, ↘
const moves = [
  [0, 1],
  [1, 0],
  [1, 1],
  [-1, 1],
];

// 유효성 체크
const isValid = (board, x, y, target) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= board.length ||
    y >= board.length ||
    board[x][y] !== target
  ) {
    return false;
  }
  return true;
};

const checkOmok = (board, target, x, y) => {
  for (let i = 0; i < moves.length; i++) {
    const [dx, dy] = moves[i];
    let [nx, ny] = [x + dx, y + dy];
    let count = 1;

    while (isValid(board, nx, ny, target)) {
      count++;

      if (count === 5) {
        // 육목 체크 로직
        if (isValid(board, x - dx, y - dy, target)) break;
        if (isValid(board, nx + dx, ny + dy, target)) break;

        return [true, x + 1, y + 1];
      }

      nx += dx;
      ny += dy;
    }
  }

  return [false, -1, -1];
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const board = input.slice(0).map((el) => el.split(" "));
  let isFind = false;
  let result = "";

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== "0") {
        const [isOmok, x, y] = checkOmok(board, board[i][j], i, j);

        if (isOmok) {
          isFind = isOmok;
          result += `${board[i][j]}\n`;
          result += `${x} ${y}`;
        }
      }
    }
  }

  isFind ? console.log(result) : console.log("0");
});
