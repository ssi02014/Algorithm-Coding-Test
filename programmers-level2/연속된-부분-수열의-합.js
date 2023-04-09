function solution(sequence, k) {
  const tempArr = [];
  let tempSum = 0;
  let start = 0;
  let end = 0;

  while (end <= sequence.length) {
    if (tempSum < k) {
      tempSum += sequence[end++];
    } else if (tempSum > k) {
      tempSum -= sequence[start++];
    } else {
      tempArr.push([start, end - 1, end - 1 - start]);
      tempSum += sequence[end++];
    }
  }

  tempArr.sort((a, b) => a[2] - b[2] || a[0] - b[0]);

  return tempArr[0].slice(0, 2);
}
