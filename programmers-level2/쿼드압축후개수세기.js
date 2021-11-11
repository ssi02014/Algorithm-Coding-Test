function quad(array, size, countArray, start) {
  const first = array[start[0]][start[1]]; // 시작 지점의 값
  const half = size / 2;
  let flag = true;

  // size가 1이면 마지막. first 값에 따라서 countArray의 값을 증가.
  if (size === 1) {
    first ? countArray[1]++ : countArray[0]++;
    return;
  }

  // 모든 값이 다 같은지 확인. 하나라도 다르면 flag을 false로 변환
  for (let i = start[0]; i < start[0] + size; i++) {
    for (let j = start[1]; j < start[1] + size; j++) {
      if (first !== array[i][j]) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  // keep이 true일 경우 모두가 다 같다는 뜻, 하나만 확인하여 증가.
  if (flag) {
    first ? countArray[1]++ : countArray[0]++;
    return;
  }

  // flag가 false일 경우 4등분하여 다시 실시.
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
