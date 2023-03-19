const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const moves = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  let result = "";

  const isValid = (board, x, y, limitX, limitY) => {
    if (x < 0 || y < 0 || x >= limitX || y >= limitY || board[x][y] === "*") {
      return false;
    }
    return true;
  };

  for (let i = 0; i < input.length - 1; i++) {
    const [r, c] = input[i].split(" ").map(Number);
    const board = input
      .slice(i + 1, i + r + 1)
      .map((el) => el.split("").map((el) => (el === "." ? 0 : el)));

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] === "*") {
          moves.forEach((move) => {
            const [dx, dy] = move;
            const [nx, ny] = [i + dx, j + dy];

            if (isValid(board, nx, ny, r, c)) {
              board[nx][ny] = board[nx][ny] + 1;
            }
          });
        }
      }
    }

    board.forEach((el) => {
      result += el.join("") + "\n";
    });

    i += r;
  }

  console.log(result);
});
