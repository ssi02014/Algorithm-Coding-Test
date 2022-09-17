function solution(n) {
  const result = [1, 2];

  for (let i = 2; i < n; i++) {
    result[i] = (result[i - 1] + result[i - 2]) % 1234567;
  }

  return result[n - 1];
}
/**
 * n = 1 -> 1
 * n = 2 -> 2
 * n = 3 -> 3
 * n = 4 -> 5
 * n = 5 -> 8
 * 이러한 규칙이 있는데.. 자세히보면 결국 피보나치 수열이다.
 */
