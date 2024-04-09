/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/2579
 * 알고리즘: DP
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const n = +input[0];
  const stairs = input.slice(1).map(Number);
  const dp = Array(n).fill(0);

  dp[0] = stairs[0];
  dp[1] = Math.max(stairs[0] + stairs[1], stairs[1]);
  dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      /**
       * 마지막 계단은 반드시 밟아야된다. 이때 두 가지 케이스로 분류할 수 있다.
       * (O: 밟음, X: 안 밟음)
       * 1. 전전칸을 밟고 마지막칸을 밟는 경우 ex) ? O X O
       * 이때는 전전칸의 최대 값(dp[i - 2])에 현재 칸을 더하면 된다.
       */
      dp[i - 2] + stairs[i],
      /**
       * 2. 전칸을 밟고 마지막 칸을 밟는 경우 ex) ? X O O
       * 위 경우 3칸 연속을 밟을 수 없기 때문에 위 조건에서 전전전칸을 밟아야되는 조건이 추가되야 한다. ex) ? O X O O
       * 전전전칸의 최대 값(dp[i - 3])에 전칸 + 현재 칸을 더하면 된다.
       */
      dp[i - 3] + stairs[i - 1] + stairs[i]
    );
  }

  console.log(dp[n - 1]);
});
