function solution(data, col, row_begin, row_end) {
  const sortedData = data.sort(
    (a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]
  );
  const sValues = [];

  for (let i = row_begin; i <= row_end; i++) {
    const value = sortedData[i - 1].reduce((acc, cur) => {
      acc += cur % i;
      return acc;
    }, 0);

    sValues.push(value);
  }

  return sValues.reduce((acc, cur) => acc ^ cur, 0);
}
