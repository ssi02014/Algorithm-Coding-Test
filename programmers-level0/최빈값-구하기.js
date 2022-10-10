function solution(array) {
  const result = [];
  const board = array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  const max = Math.max(...Object.values(board));

  for (const key in board) {
    if (board[key] === max) {
      if (result.length > 0) return -1;
      result.push(+key);
    }
  }
  return result[0];
}
