const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const whiteStartBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const blackStartBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const chessBoard = getChessBoardByInput();
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N - 7; i++) {
    for (let j = 0; j < M - 7; j++) {
      result = Math.min(result, checkChessBoard(chessBoard, "black", i, j));
      result = Math.min(result, checkChessBoard(chessBoard, "white", i, j));
    }
  }

  console.log(result); // 출력

  function getChessBoardByInput() {
    const board = [];
    for (let i = 1; i < input.length; i++) {
      board[i - 1] = input[i];
    }
    return board;
  }

  function checkChessBoard(chessBoard, checkBoardType, x, y) {
    const checkBoard =
      checkBoardType === "black" ? blackStartBoard : whiteStartBoard;
    let count = 0;

    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if (chessBoard[i][j] !== checkBoard[i - x][j - y]) {
          count++;
        }
      }
    }
    return count;
  }
});
