function solution(n) {
  const dp = [1, 2, 3, 5];

  for (let i = 4; i < n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }

  return dp[n - 1];
}
/**
 * n = 1 -> 1
 * n = 2 -> 2
 * n = 3 -> 3
 * n = 4 -> 5
 * n = 5 -> 8
 * 이러한 규칙이 있는데.. 자세히보면 결국 피보나치 수열이다.
 */
