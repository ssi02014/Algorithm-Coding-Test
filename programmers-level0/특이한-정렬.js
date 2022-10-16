function solution(numlist, n) {
  const gapItemArr = numlist.map((el) => [Math.abs(n - el), el]);
  const sortedGapItemArr = gapItemArr.sort((a, b) => {
    if (a[0] < b[0]) {
      return a[0] - b[0];
    } else if (a[0] === b[0]) {
      return b[1] - a[1];
    }
  });

  return sortedGapItemArr.map((el) => el[1]);
}
