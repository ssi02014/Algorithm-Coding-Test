function solution(n) {
  const TOTAL = n * n;
  const arr = Array.from({ length: n }, () => []);
  let value = 1;
  let tempCount = 0;
  let [x, y] = [0, 0];

  const adjustCoordinate = (direction) => {
    const funcByDirection = {
      right: () => {
        x--;
        y++;
        n--;
      },
      left: () => {
        x++;
        y--;
        n--;
      },
      bottom: () => {
        x--;
        y--;
      },
      top: () => {
        x++;
        y++;
      },
    };
    tempCount = 0;
    funcByDirection[direction]();
  };

  while (value <= TOTAL) {
    // x축 우측
    while (tempCount++ < n) {
      arr[y][x++] = value++;
    }
    adjustCoordinate("right");

    // y축 아래
    while (tempCount++ < n) {
      arr[y++][x] = value++;
    }
    adjustCoordinate("bottom");

    // x축 좌측
    while (tempCount++ < n) {
      arr[y][x--] = value++;
    }
    adjustCoordinate("left");

    // y축 위
    while (tempCount++ < n) {
      arr[y--][x] = value++;
    }
    adjustCoordinate("top");
  }

  return arr;
}
