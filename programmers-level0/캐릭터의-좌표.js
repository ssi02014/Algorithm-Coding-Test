function solution(keyinput, board) {
  const result = [0, 0];
  const moves = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };

  keyinput.forEach((input) => {
    const [y, x] = result;
    const [dy, dx] = moves[input];

    if (isValid(y + dy, x + dx, board)) {
      result[0] += dy;
      result[1] += dx;
    }
  });
  return result;
}

function isValid(y, x, board) {
  const [maxY, maxX] = board;
  const halfY = Math.floor(maxY / 2);
  const halfX = Math.floor(maxX / 2);

  if (x < -halfX || y < -halfY || x > halfX || y > halfY) {
    return false;
  }
  return true;
}
