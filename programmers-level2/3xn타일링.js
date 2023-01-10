// 3 x n 타일 점화식
// dp[n] = dp[n - 2] * 3 + dp[n - 4] * 2 + dp[n - 6] * 2 + ... + dp[2] * 2 + 2;
// dp[8] = dp[6] * 3 + dp[4] * 2 + dp[4] * 2 + 2

function solution(n) {
  const dp = Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = 0;
  dp[2] = 3;
  dp[3] = 0;
  dp[4] = 11;

  const sum = (n) => {
    let result = 0;

    for (let i = n; i >= 2; i -= 2) {
      result += dp[i] * 2;
    }

    return result;
  };

  for (let i = 4; i <= n; i++) {
    if (i % 2 === 0) {
      dp[i] = (dp[i - 2] * 3 + sum(i - 4) + 2) % 1000000007;
    }
  }

  return dp[n];
}
