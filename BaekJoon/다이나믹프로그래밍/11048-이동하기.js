const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const inputMap = input.slice(1).map((el) => el.split(" "));
  const map = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      map[i + 1][j + 1] = +inputMap[i][j];
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] =
        Math.max(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + map[i][j];
    }
  }

  console.log(dp[n][m]);
});

/**
 * 1 2 3
 * 4 a 5
 * 6 7 8
 *
 * 이 있다면 a(2,2)가 가장 큰 케이스는 [1, 2], [1, 1], [2, 1] 중에 가장 큰 값 + 기존 map[2, 2]의 값이다.
 */
