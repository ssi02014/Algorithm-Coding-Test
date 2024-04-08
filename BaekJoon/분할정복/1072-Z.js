/**
 * @description
 * 문제 주소: https://www.acmicpc.net/problem/1074
 * 알고리즘: 분할 정복
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
  const [n, r, c] = input[0].split(" ").map(Number);
  let result = 0;

  // 행(r -> y), 열(c -> x)
  const recursive = (x, y, size) => {
    // 찾으려는 열과 행이 일치
    if (x === c && y === r) {
      console.log(result);
      return;
      // 찾으려는 열과 행이 현재 사분면 안에 있음
    } else if (c < x + size && r < y + size && c >= x && r >= y) {
      recursive(x, y, size / 2);
      recursive(x + size / 2, y, size / 2);
      recursive(x, y + size / 2, size / 2);
      recursive(x + size / 2, y + size / 2, size / 2);
    } else {
      result += size * size;
    }
  };

  recursive(0, 0, Math.pow(2, n));
});
