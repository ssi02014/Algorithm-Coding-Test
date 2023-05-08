function solution(dirs) {
  const MAX_LENGTH = 5;
  const MIN_LENGTH = -MAX_LENGTH;

  const checkSet = new Set();
  const moveByType = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };
  let curPosition = [0, 0];

  const getIsValid = (x, y) => {
    if (x < MIN_LENGTH || y < MIN_LENGTH || x > MAX_LENGTH || y > MAX_LENGTH) {
      return false;
    }
    return true;
  };

  for (const dir of dirs) {
    const [dx, dy] = moveByType[dir];
    const [curX, curY] = curPosition;
    const [nx, ny] = [curX + dx, curY + dy];

    if (getIsValid(nx, ny)) {
      curPosition = [nx, ny];

      // 양방향 저장 [0, 0] -> [1, 0] 과 [1, 0] -> [0, 0] 둘은 같은 지나간 길임
      checkSet.add(`${curX}${curY}${nx}${ny}`);
      checkSet.add(`${nx}${ny}${curX}${curY}`);
    }
  }

  return checkSet.size / 2;
}
