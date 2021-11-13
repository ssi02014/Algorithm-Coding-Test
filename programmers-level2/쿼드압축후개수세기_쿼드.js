function quad(array, size, countArray, start) {
  const first = array[start[0]][start[1]];
  const half = size / 2;
  let flag = true;

  if (size === 1) {
    first ? countArray[1]++ : countArray[0]++;
    return;
  }

  for (let i = start[0]; i < start[0] + size; i++) {
    for (let j = start[1]; j < start[1] + size; j++) {
      if (first !== array[i][j]) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  if (flag) {
    first ? countArray[1]++ : countArray[0]++;
    return;
  }
  quad(array, half, countArray, start);
  quad(array, half, countArray, [start[0], start[1] + half]);
  quad(array, half, countArray, [start[0] + half, start[1]]);
  quad(array, half, countArray, [start[0] + half, start[1] + half]);
  return;
}

function solution(arr) {
  const countArray = [0, 0];
  const size = arr.length;
  quad(arr, size, countArray, [0, 0]);

  return countArray;
}
