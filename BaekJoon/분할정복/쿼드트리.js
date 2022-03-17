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
  let result = "";

  for (let i = 1; i <= n; i++) {
    board[i - 1] = input[i].split("").map(Number);
  }

  quadTree(0, 0, n);

  console.log(result);

  function quadTree(row, col, size) {
    if (checkNumber(row, col, size)) {
      result += board[row][col];
      return;
    }

    const halfSize = Math.floor(size / 2);

    result += "("; // 각 레벨 시작할 때 여는 괄호 추가

    quadTree(row, col, halfSize); // 2사분면
    quadTree(row, col + halfSize, halfSize); // 1사분면
    quadTree(row + halfSize, col, halfSize); // 3사분면
    quadTree(row + halfSize, col + halfSize, halfSize); // 4사분면

    result += ")"; // 해당 레벨 종료되면 닫는 괄호 추가
  }

  function checkNumber(row, col, size) {
    const initNum = board[row][col];
    for (i = row; i < row + size; i++) {
      for (j = col; j < col + size; j++) {
        if (board[i][j] !== initNum) return false;
      }
    }
    return true;
  }
});
