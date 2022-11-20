function solution(n) {
  const arr = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1000000007);
  }

  return arr[n - 1];
}
