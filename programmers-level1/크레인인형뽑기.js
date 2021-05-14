function solution(board, moves) {
  const basket = [];
  let result = 0;

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] > 0) {
        basket.push(board[i][move - 1]);
        board[i][move - 1] = 0;

        if (basket[basket.length - 1] === basket[basket.length - 2]) {
          basket.pop();
          basket.pop();
          result += 2;
        }

        break;
      }
    }
  });

  return result;
}
