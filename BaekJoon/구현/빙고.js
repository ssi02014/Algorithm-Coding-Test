const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const board = input.slice(0, 5).map((el) => el.split(" "));
  const picks = input
    .slice(5)
    .map((el) => el.split(" "))
    .flat();

  for (let i = 0; i < picks.length; i++) {
    fillBingoNumber(picks[i]);
    const answer = checkBingoLine();

    if (answer >= 3) {
      console.log(i + 1);
      break;
    }
  }

  function fillBingoNumber(num) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (num === board[i][j]) {
          board[i][j] = -1;
        }
      }
    }
  }

  function checkBingoLine() {
    let answer = 0;
    let isValidDiagonalToRight = true;
    let isValidDiagonalToLeft = true;

    // (ㅡ) 체크
    for (let i = 0; i < board.length; i++) {
      const isValid = board[i].every((el) => el === -1);
      if (isValid) answer++;
    }

    // (ㅣ) 체크
    for (let i = 0; i < board.length; i++) {
      let isValid = true;

      for (let j = 0; j < board[i].length; j++) {
        if (board[j][i] !== -1) {
          isValid = false;
          break;
        }
      }

      if (isValid) answer++;
    }

    // (\) 체크
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] !== -1) {
        isValidDiagonalToRight = false;
        break;
      }
    }

    // (/) 체크
    for (let i = 0; i < board.length; i++) {
      if (board[i][board.length - 1 - i] !== -1) {
        isValidDiagonalToLeft = false;
        break;
      }
    }

    if (isValidDiagonalToRight) answer++;
    if (isValidDiagonalToLeft) answer++;

    return answer;
  }
});
