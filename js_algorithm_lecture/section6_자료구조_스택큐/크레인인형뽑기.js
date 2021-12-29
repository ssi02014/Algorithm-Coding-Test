function solution(board, moves) {
  const stack = [];
  let result = 0;

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const item = board[i][move - 1];

      if (item) {
        board[i][move - 1] = 0;

        if (item === stack[stack.length - 1]) {
          stack.pop();
          result += 2;
        } else {
          stack.push(item);
        }
        break;
      }
    }
  });

  return result;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
