function solution(arr) {
  const [dx, dy] = [
    [1, -1, 0, 0],
    [0, 0, 1, -1],
  ];
  let result = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = true;

      for (let k = 0; k < dx.length; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (rangeCheck(nx, ny) && arr[i][j] <= arr[nx][ny]) {
          flag = false;
          break;
        }
      }
      if (flag) result++;
    }
  }

  return result;

  function rangeCheck(x, y) {
    if (x < 0 || x >= n || y < 0 || y >= n) {
      return false;
    }
    return true;
  }
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
