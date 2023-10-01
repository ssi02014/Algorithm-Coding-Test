// 재귀로 풀면 시간초과
// dp 풀이
function solution(n) {
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    const sum = dp[i - 2] + dp[i - 1];
    dp[i] = sum % 1234567;
  }

  return dp[n];
}
