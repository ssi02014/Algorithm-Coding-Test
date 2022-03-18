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
  let [zeroCnt, minusOneCnt, oneCnt] = [0, 0, 0];

  for (let i = 1; i <= n; i++) {
    board[i - 1] = input[i].split(" ").map(Number);
  }

  partition(0, 0, n);

  console.log(`${minusOneCnt}\n${zeroCnt}\n${oneCnt}`);

  // row -> i, col -> j
  function partition(row, col, size) {
    if (checkNumber(row, col, size)) {
      if (board[row][col] === 1) oneCnt++;
      else if (board[row][col] === -1) minusOneCnt++;
      else zeroCnt++;

      return;
    }

    const threeDivision = Math.floor(size / 3);

    partition(row, col, threeDivision);
    partition(row, col + threeDivision, threeDivision);
    partition(row, col + threeDivision * 2, threeDivision);

    partition(row + threeDivision, col, threeDivision);
    partition(row + threeDivision, col + threeDivision, threeDivision);
    partition(row + threeDivision, col + threeDivision * 2, threeDivision);

    partition(row + threeDivision * 2, col, threeDivision);
    partition(row + threeDivision * 2, col + threeDivision, threeDivision);
    partition(row + threeDivision * 2, col + threeDivision * 2, threeDivision);
  }

  function checkNumber(row, col, size) {
    const initNum = board[row][col];

    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        if (board[i][j] !== initNum) return false;
      }
    }
    return true;
  }
});
