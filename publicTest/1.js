function solution(office, k) {
  let sumList = [];

  for (let i = 0; i < office.length; i++) {
    for (let j = 0; j < office.length; j++) {
      checkWarmer(i, j);
    }
  }

  return Math.max(...sumList);

  function checkWarmer(x, y) {
    let sum = 0;

    for (let i = 0; i < k; i++) {
      for (let j = 0; j < k; j++) {
        if (rangeCheck(x + i, y + j)) {
          if (office[x + i][y + j] === 1) {
            sum += 1;
          }
        }
      }
    }
    sumList.push(sum);
  }

  function rangeCheck(x, y) {
    if (x < 0 || y < 0 || x >= office.length || y >= office.length) {
      return false;
    }
    return true;
  }
}
