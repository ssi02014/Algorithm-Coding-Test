function solution(sequence, k) {
  const tempList = [];
  let [start, end] = [0, 0];
  let sum = 0;

  while (end <= sequence.length) {
    if (sum < k) {
      sum += sequence[end++];
    } else if (sum > k) {
      sum -= sequence[start++];
    } else {
      tempList.push([start, end - 1]);
      sum += sequence[end++];
    }
  }

  tempList.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

  return tempList[0];
}
