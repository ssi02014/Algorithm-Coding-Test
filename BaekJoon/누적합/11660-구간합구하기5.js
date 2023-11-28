/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/11660
 * 알고리즘: DP, 누적합
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
  const [n, m] = input[0].split(" ").map(Number);
  const table = input.slice(1, n + 1).map((el) => el.split(" ").map(Number));
  const ranges = input.slice(n + 1).map((el) => el.split(" ").map(Number));
  const cumulativeSumTable = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(0)
  );
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // 점화식: DP[i][j] = DP[i-1][j] + DP[i][j-1] - DP[i-1][j-1] + A[i-1][j-1]
      // 위에서 구한 누적합 + 왼쪽에서 구한 누적합 - 교집합
      cumulativeSumTable[i][j] =
        cumulativeSumTable[i - 1][j] +
        cumulativeSumTable[i][j - 1] -
        cumulativeSumTable[i - 1][j - 1] +
        table[i - 1][j - 1]; // cumulativeSumTable은 좌우 1칸씩 늘려줬기 때문에 i - 1, j - 1 해줘야 함
    }
  }

  // 2차원 배열 누적합
  ranges.forEach((range) => {
    const [i, j, x, y] = range;

    // 점화식: sum = DP[x][y] - DP[x][j-1] - DP[i-1][y] + DP[i-1][j-1]
    const sum =
      cumulativeSumTable[x][y] -
      cumulativeSumTable[x][j - 1] -
      cumulativeSumTable[i - 1][y] +
      cumulativeSumTable[i - 1][j - 1];

    result += `${sum}\n`;
  });

  console.log(result);
});

/**
 * 

누적합 table
[
  [ 0, 0, 0, 0, 0 ],
  [ 0, 1, 3, 6, 10 ],
  [ 0, 3, 8, 15, 24 ],
  [ 0, 6, 15, 27, 42 ],
  [ 0, 10, 24, 42, 64 ]
]

 * 점화식: sum = DP[x][y] - DP[x][j-1] - DP[i-1][y] + DP[i-1][j-1]
 * range: 2 2 3 4
 * sum = 42[3, 4] - 6[3, 1] - 10[1, 4] + 1[1, 1] = 27
 */
