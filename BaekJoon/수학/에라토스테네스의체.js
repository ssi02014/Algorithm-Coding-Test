// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   const [N, K] = input[0].split(" ").map(Number);
//   const seq = [];
//   const result = [];

//   for (let i = 0; i <= N; i++) {
//     seq.push(true);
//   }

//   for (let i = 2; i * i <= N; i++) {
//     if (seq[i]) {
//       result.push(i);
//       seq[i] = false;

//       for (let j = i * i; j <= N; j += i) {
//         if (!result.includes(j)) {
//           result.push(j);
//           seq[j] = false;
//         }
//       }
//     }
//   }

//   seq.map((_, i) => {
//     if (!result.includes(i) && i > 1) result.push(i);
//   });

//   console.log(result[K - 1]);
// });

function solution(boards, moves) {
  const basket = [];
  const indexMoves = moves.map((x) => x - 1);
  let cnt = 0;

  for (let move of indexMoves) {
    for (let board of boards) {
      if (board[move] !== 0) {
        if (basket[basket.length - 1] === board[move]) {
          basket.pop();
          cnt += 2;
        } else basket.push(board[move]);

        board[move] = 0;
        break;
      }
    }
  }
  return cnt;
}
