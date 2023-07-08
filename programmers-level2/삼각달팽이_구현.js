function solution(n) {
  const numList = Array.from({ length: n }, (_, idx) => Array(idx).fill(0));
  let row = -1;
  let col = 0;
  let num = 0;

  for (let i = n; i > 0; i -= 3) {
    // to Bottom
    for (let j = 0; j < i; j++) {
      numList[++row][col] = ++num;
    }

    // to Right
    for (let j = 0; j < i - 1; j++) {
      numList[row][++col] = ++num;
    }

    // to Top
    for (let j = 0; j < i - 2; j++) {
      numList[--row][--col] = ++num;
    }
  }

  return numList.reduce((acc, cur) => [...acc, ...cur], []);
}
