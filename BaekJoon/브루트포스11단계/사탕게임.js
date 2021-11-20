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
  const board = Array.from(Array(n + 1), () => Array(n).fill(0));
  let maxCount = 0;

  for (let i = 1; i <= n; i++) {
    board[i - 1] = input[i].split("");
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      swap("horizontal", i, j); // 가로 스왑
      check("horizontal"); // 가로 체크
      check("vertical"); // 세로 체크
      swap("horizontal", i, j); // 원위치 스왑
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      swap("vertical", i, j); // 세로 스왑
      check("horizontal"); // 가로 체크
      check("vertical"); // 세로 체크
      swap("vertical", i, j); // 원위치 스왑
    }
  }

  function check(type) {
    for (let i = 0; i < n; i++) {
      let count = 1;
      for (let j = 0; j < n; j++) {
        if (type === "horizontal") {
          if (board[i][j] === board[i][j + 1]) count++;
          else {
            if (maxCount < count) maxCount = count;
            count = 1;
          }
        } else {
          if (board[j][i] === board[j + 1][i]) count++;
          else {
            if (maxCount < count) maxCount = count;
            count = 1;
          }
        }
      }
    }
  }

  function swap(type, i, j) {
    if (type === "horizontal") {
      let temp = board[i][j];
      board[i][j] = board[i][j + 1];
      board[i][j + 1] = temp;
    } else {
      let temp = board[j][i];
      board[j][i] = board[j + 1][i];
      board[j + 1][i] = temp;
    }
  }

  console.log(maxCount);
});
