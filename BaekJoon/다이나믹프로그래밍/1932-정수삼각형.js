const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const arr = input.slice(1).map((el) => el.split(" ").map(Number));

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      arr[i - 1][j] += Math.max(arr[i][j], arr[i][j + 1]);
    }
  }
  console.log(arr[0][0]);
});

// 아래층부터 arr[i-1][j]에 arr[i][j]와 arr[i][j+1]중 큰 수를 계속 누적한다.
// 그러면 최종적으로 arr[0][0]이 합의 최대값이 나오게 된다.
