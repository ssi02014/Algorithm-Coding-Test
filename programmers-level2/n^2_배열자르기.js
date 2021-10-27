function solution(n, left, right) {
  const result = [];

  while (left <= right) {
    const x = Math.floor(left / n);
    const y = left++ % n;
    const max = Math.max(x, y) + 1;

    result.push(max);
  }

  return result;
}
