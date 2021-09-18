function solution(n) {
  let numList = Array.from(Array(n), () => []);
  let row = -1;
  let col = 0;
  let num = 0;

  numList = numList.map((el, idx) => {
    for (let i = 0; i <= idx; i++) {
      el.push(0);
    }
    return el;
  });

  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) {
      numList[++row][col] = ++num;
    }
    for (let j = 0; j < i - 1; j++) {
      numList[row][++col] = ++num;
    }
    for (let j = 0; j < i - 2; j++) {
      numList[--row][--col] = ++num;
    }
  }

  return numList.reduce((acc, cur) => [...acc, ...cur], []);
}
