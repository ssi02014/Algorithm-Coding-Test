function solution(arr) {
  const counts = [0, 0];
  const initSize = arr.length;

  const isAllSameValues = (firstValue, size, start) => {
    const [startY, startX] = start;

    for (let i = startY; i < startY + size; i++) {
      for (let j = startX; j < startX + size; j++) {
        if (arr[i][j] !== firstValue) {
          return false;
        }
      }
    }
    return true;
  };

  const quad = (size, start) => {
    const [startY, startX] = start;
    const firstValue = arr[startY][startX];
    const half = size / 2;

    if (size === 1) {
      firstValue ? counts[1]++ : counts[0]++;
      return;
    }

    if (isAllSameValues(firstValue, size, start)) {
      firstValue ? counts[1]++ : counts[0]++;
      return;
    }

    quad(half, [startY, startX]);
    quad(half, [startY + half, startX]);
    quad(half, [startY, startX + half]);
    quad(half, [startY + half, startX + half]);
    return;
  };

  quad(initSize, [0, 0]);

  return counts;
}
