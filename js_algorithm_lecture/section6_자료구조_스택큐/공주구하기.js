function solution(n, k) {
  const result = [];
  let princes = [];
  let count = 0;

  for (let i = 1; i <= n; i++) {
    princes[i - 1] = i;
  }

  while (result.length < n) {
    count++;

    if (count === k) {
      count = 0;
      result.push(princes.shift());
    } else {
      princes.push(princes.shift());
    }
  }

  return result[result.length - 1];
}

console.log(solution(8, 3));
